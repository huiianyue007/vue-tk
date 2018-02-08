<template>
  <tk-container>
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">页面3</h2>
    </md-toolbar>
    <tk-flex class="button-wrap" center>
      <md-button @click.native="$back">上一页</md-button>
      <md-button @click.native="home">首页</md-button>
    </tk-flex>
    <md-subheader>触发的事件</md-subheader>
    {{event}}
  </tk-container>
</template>

<script>
  export default {
    methods: {
      home () {
        this.$back('/components/history')
      }
    },
    data () {
      return {
        event: []
      }
    },
    created () {
      this.event.push('created')
    },
    beforeMount () {
      this.event.push('beforeMount')
    },
    mounted () {
      this.event.push('mounted')
    },
    activated () {
      this.event.push('activated')
    },
    deactivated () {
      this.event = []
    },
    beforeDestroy () {
      this.event = []
    }
  }
</script>

<style lang="scss" scoped>
  .button-wrap{
    margin: 20px 0;
  }
</style>
