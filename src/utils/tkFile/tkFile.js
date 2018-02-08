import tkUa from '../tkUa/tkUa'

function getExt (filename) {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

function dataURLtoFile (dataurl, filename) {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = window.atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return {
    file: new window.File([u8arr], filename, {type: mime}),
    buffer: u8arr.buffer
  }
}

const tkFile = {
  options: {},
  input: null,
  pick (options = {}) {
    let defaultOptions = {
      type: 'image',
      from: 'file'
    }
    this.options = Object.assign({}, defaultOptions, options)
    return this.run()
  },
  run () {
    if (tkUa.isPlus) {
      if (this.options.from === 'camera') {
        return this.pickFromCamera()
      } else if (this.options.type === 'image') {
        return this.pickFromGallery()
      } else {
        return this.pickFromFile()
      }
    } else {
      if (this.options.from === 'camera') {
        return Promise.reject(new Error('当前环境无法使用摄像头'))
      } else {
        return this.pickFromFile()
      }
    }
  },
  pickFromFile () {
    let self = this
    return new Promise(function (resolve, reject) {
      const reader = new window.FileReader()
      self.input = document.createElement('input')
      self.input.type = 'file'
      self.input.accept = self.options.type + '/*'
      self.input.onchange = () => {
        let file = self.input.files[0]
        reader.onloadend = function (e) {
          resolve({
            url: window.URL.createObjectURL(file),
            file: file,
            buffer: e.target.result,
            options: self.options,
            name: file.name,
            fullPath: self.input.value,
            ext: getExt(file.name)
          })
        }
        reader.readAsArrayBuffer(file)
      }
      self.input.click()
    })
  },
  pickFromCamera () {
    let self = this
    return new Promise(function (resolve, reject) {
      const camera = plus.camera.getCamera()
      let res = camera.supportedImageResolutions[0]
      let fmt = camera.supportedImageFormats[0]
      camera.captureImage(function (file) {
        window.plus.io.resolveLocalFileSystemURL(file, function (entry) {
          const reader = new window.plus.io.FileReader()
          reader.onloadend = function (e) {
            let {file, buffer} = dataURLtoFile(e.target.result, entry.name)
            resolve({
              url: window.URL.createObjectURL(file),
              file: file,
              buffer: buffer,
              options: self.options,
              name: entry.name,
              fullPath: entry.fullPath,
              ext: getExt(entry.name)
            })
          }
          reader.readAsDataURL(entry)
        }, function (e) {
          reject(new Error('读取文件失败'))
        })
      }, function (e) {
        reject(new Error('无法打开摄像'))
      }, {resolution: res, format: fmt})
    })
  },
  pickFromGallery () {
    let self = this
    return new Promise(function (resolve, reject) {
      plus.gallery.pick(function (file) {
        plus.io.resolveLocalFileSystemURL(file, function (entry) {
          const reader = new window.plus.io.FileReader()
          reader.onloadend = function (e) {
            let {file, buffer} = dataURLtoFile(e.target.result, entry.name)
            resolve({
              url: window.URL.createObjectURL(file),
              file: file,
              buffer: buffer,
              options: self.options,
              name: entry.name,
              fullPath: entry.fullPath,
              ext: getExt(entry.name)
            })
          }
          reader.readAsDataURL(entry)
        }, function () {
          reject(new Error('无法读取图片'))
        })
      }, function () {
        reject(new Error('取消选择图片'))
      }, {filter: self.options.type})
    })
  },
  createFormData (options) {
    let data = new window.FormData()
    for (let name in options) {
      let item = options[name]
      if (item.file && item.file.constructor === window.File) {
        item = item.file
      }
      data.append(name, item)
    }
    return data
  }
}

export default tkFile
