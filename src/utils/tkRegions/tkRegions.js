import province from './json/province_object.json'
import city from './json/city_object.json'
import area from './json/area_object.json'

const tkRegions = {
  province: province,
  city: city,
  area: area,
  isProvince (id) {
    return String(id).substr(-4) === '0000'
  },
  isCity (id) {
    return !this.isProvince(id) && String(id).substr(-2) === '00'
  },
  isArea (id) {
    return String(id).substr(-2) !== '00'
  },
  getType (id) {
    let type
    if (this.isProvince(id)) {
      type = 'province'
    } else if (this.isCity(id)) {
      type = 'city'
    } else if (this.isArea(id)) {
      type = 'area'
    } else {
      type = null
    }
    return type
  },
  getParentId (id) {
    let type = this.getType(id)
    if (type === null || type === 'province') {
      return null
    } else if (type === 'city') {
      return String(id).substr(0, 2) + '0000'
    } else if (type === 'area') {
      return String(id).substr(0, 4) + '00'
    } else {
      return null
    }
  },
  getSon (id) {
    let sons = {}
    let type = this.getType(id)
    if (type === null || type === 'area') {
      return null
    } else if (type === 'city') {
      let code = String(id).substr(0, 4)
      for (let i in this.area) {
        if (String(i).substr(0, 4) === code) {
          sons[i] = this.area[i]
        }
      }
      return sons
    } else if (type === 'province') {
      let code = String(id).substr(0, 2)
      for (let i in this.city) {
        if (String(i).substr(0, 2) === code) {
          sons[i] = this.city[i]
        }
      }
      return sons
    } else {
      return null
    }
  },
  // 根据区域id获取区域名
  getName (id) {
    let type = this.getType(id)
    if (type === null) return null
    return this[type][id] ? this[type][id]['name'] : null
  },
  // 根据区域id获取区域全名
  getFullName (id) {
    let name = this.getName(id)
    if (name === null) return null
    let pId = this.getParentId(id)
    let gpId = this.getParentId(pId)
    let pName = pId === null ? '' : this.getName(pId) + ' '
    let gpName = gpId === null ? '' : this.getName(gpId) + ' '
    return gpName + pName + name
  }
}
export default tkRegions
