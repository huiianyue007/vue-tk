/* global plus, FileReader, AV */
/**
 * @global isNative {boolean} - 判断环境是原生还是web
 * @global isUpload {boolean} - 是否需要上传
 * @global isIE9 {boolean} - 检测浏览器环境
 * @global event {event} - DOM 事件
 * @global imgRename {string} - 上传重命名图像
 * @global imgMaxSize {number} - 图片大小
 * @global getImgBase64 {function} - 获取图片的base64值
 * @global getImgDetail {function} - 图片上传的详细信息，包含 name, size
 * @global uploadBeforeCallback {function} - 上传前的回调函数
 * @global imgMaxSizeCallback {function} - 图片最大的回调函数
 */
let isNative
let isUpload
let isIE9

let event
let imgRename
let imgMaxSize
let imgBase64Value
let imgDetail = {}

let getImgBase64
let getImgDetail
let uploadBeforeCallback
let imgMaxSizeCallback
let getFile
/**
 * @desc upload 参数初始化
 * @param option {object} - 配置参数
 */
function init (option) {
  // 如果传递的配置为空，直接返回
  if (!option && typeof option !== 'object') {
    throw new Error('upload config is empty or parameter is error')
  }
  // 触发对象必须传入，否者报错
  if (!option.event) {
    throw new Error('event is empty')
  }

  isNative = typeof plus !== 'undefined'
  isIE9 = navigator.userAgent.indexOf('MSIE 9.0') > -1 || navigator.userAgent.indexOf('MSIE 8.0') > -1 || navigator.userAgent.indexOf('MSIE 7.0') > -1
  isUpload = option.isUpload

  event = option.event
  imgMaxSize = option.imgMaxSize

  getImgBase64 = option.getImgBase64
  getImgDetail = option.getImgDetail
  uploadBeforeCallback = option.uploadBeforeCallback
  imgMaxSizeCallback = option.imgMaxSizeCallback
  getFile = option.getFile
}

/**
 * @desc 原生图片读取
 * @param resolve {function} promise 函数
 * @param reject {function} promise 函数
 */
function nativeImageHandler (resolve, reject) {
  plus.gallery.pick(function (picture) {
    plus.io.resolveLocalFileSystemURL(picture, function (entry) {
      entry.file(function (file) {
        if (!limitImgSize(file)) return
        formatImgDetail(file)
        revertImgBase64(file).then((base64) => {
          let fileName = imgRename || file.name
          uploadH5Native(fileName, base64, resolve, reject)
        })
      })
    })
  }, function () {}, {filter: 'image'})
}

/**
 * @desc html5 图片读取
 * @param event {object} 点击事件
 * @param resolve {function} promise 函数
 * @param reject {function} promise 函数
 */
function html5ImageHandler (event, resolve, reject) {
  event.target.addEventListener('change', (e) => {
    if (isIE9) {
      console.log('暂不支持 IE9')
    } else {
      let file = e.target.files[0]
      if (!file.type.match('image.*')) return
      if (!limitImgSize(file)) return
      formatImgDetail(file)
      revertImgBase64(file).then((base64) => {
        let fileName = imgRename || file.name
        uploadH5Native(fileName, base64, resolve, reject)
      })
    }
  })
}

/**
 * @desc 将图像转换为 base64，只对原生和 ie9+ 生效
 * @param file {Blob} - Blob对象
 * @return Promise - 返回 promise 对象
 */
function revertImgBase64 (file) {
  return new Promise((resolve, reject) => {
    let reader
    if (isNative) {
      reader = new plus.io.FileReader()
      reader.onloadend = function () {
        imgBase64Value = this.result
        resolve({base64: imgBase64Value})
        try {
          if (!getImgBase64) return
          getImgBase64(imgBase64Value)
        } catch (e) {
          console.error(e)
        }
      }
    } else {
      reader = new FileReader()
      reader.addEventListener('load', function () {
        imgBase64Value = this.result
        resolve({base64: imgBase64Value})
        try {
          if (!getImgBase64) return
          getImgBase64(imgBase64Value)
        } catch (e) {
          console.error(e)
        }
      })
    }
    reader.readAsDataURL(file)
  })
}

/**
 * @desc 获取选择图片的基本信息
 * @param file {Blob} - Blob 对象
 */
function formatImgDetail (file) {
  // 如果不传入获取图片基本信息直接返回
  if (!getImgDetail) return
  imgDetail.name = file.name
  imgDetail.size = `${(file.size / 1024).toFixed(2)}kb`
  try {
    getImgDetail(imgDetail)
  } catch (e) {
    console.error(e)
  }
}

/**
 * @desc 判断图片的大小是否超出限制
 * @param file {Blob} - 图像文件
 * @returns {boolean}
 */
function limitImgSize (file) {
  // 判断 imgMaxSize 是否存在
  if (!imgMaxSize) return true
  // 如果 imgMaxSize 不为数字，退出
  if (typeof imgMaxSize !== 'number') {
    throw new Error(`imgMaxSize expect is a number，but get a ${typeof imgMaxSize}`)
  }
  if (file.size > imgMaxSize * 1024) {
    if (imgMaxSizeCallback) {
      try {
        imgMaxSizeCallback(file.size > imgMaxSize * 1024)
      } catch (e) {
        console.error(e)
      }
    }
    return false
  } else {
    return true
  }
}

/**
 * @desc leancloud 文件上传，支持 ie9+ 和原生
 * @param name {string} - 文件名
 * @param file {object} - base64 后的对象
 * @param resolve {Promise} - promise 对象
 * @param reject {Promise} - promise 对象
 */
function uploadH5Native (name, file, resolve, reject) {
  if (!isUpload) return
  if (uploadBeforeCallback) {
    try {
      uploadBeforeCallback()
    } catch (e) {
      console.error(e)
    }
  }
  try {
    if (typeof AV === 'undefined') {
      new Error('上传依赖 leancloud！请检查环境')
    }
    let fileAV = new AV.File(name, file)
    getFile(fileAV)
    fileAV.save().then(function (file) {
      resolve(file.url())
    }, function (error) {
      reject(error)
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @desc 图片上传入口函数
 * @param option - 配置项
 * @return {Promise}
 */
export default function tkUpload (option) {
  init(option)
  return new Promise((resolve, reject) => {
    if (isNative) {
      // 判断为原生时，如果 DOM 对象为 type=file 的 input 对象，阻止默认事件
      event.preventDefault()
      nativeImageHandler(resolve, reject)
    } else {
      html5ImageHandler(event, resolve, reject)
    }
  })
}

