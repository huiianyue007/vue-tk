<template>
  <div class="tk-gloabl">
    <component v-for="component, name in list" :is="component" v-bind="propData[name]" :ref="name" :key="name"></component>
  </div>
</template>

<script>
  import manager from './manager'
  export default {
    name: 'TkGlobal',
    data: function () {
      return {
        propData: {},
        list: {}
      }
    },
    created () {
      if (!this.components) return
      this.components.map((item) => {
        if (typeof item.component === 'object') {
          this.$options.components[item.name] = item.component
        }
        this.propData[item.name] = item.props ? item.props : {}
        this.list[item.name] = typeof item.component === 'object' ? item.name : item.component
      })
      const global = {}
      this.$nextTick(() => {
        for (let name in this.$refs) {
          global[name] = this.$refs[name][0]
          manager.set(this.name, global)
          manager.set(this.name + 'Props', this.propData)
        }
      })
    },
    methods: {
    },
    props: {
      components: Array,
      name: {
        type: String,
        default: '$tkGlobal'
      }
    }
  }
</script>
