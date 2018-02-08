export default {
  vue: null,
  set: function (name, obj) {
    if (!this.vue) return
    this.vue.prototype[name] = obj
  }
}
