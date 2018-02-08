<template>
  <tk-cover v-bind="cover">
    <transition-group name="toast-complete" class="toast-wrap">
      <div class="tk-toast" v-for="item in list" :key="item.id">{{item.message}}</div>
    </transition-group>
  </tk-cover>
</template>

<script>
  import tkCover from '../tkCover/tkCover.vue'
  export default {
    name: 'TkToast',
    data: function () {
      return {
        cover: {
          through: true,
          color: 'transparent',
          show: true,
          bottom: true
        },
        list: [],
        hiddenTimeId: null
      }
    },
    methods: {
      add (message) {
        let id = Date.now()
        this.list.push({
          message: message,
          id: id
        })
        setTimeout(() => {
          let index = this.list.findIndex((element) => {
            return element.id === id
          })
          if (index >= 0) {
            this.list.splice(index, 1)
          }
        }, 2000)
      }
    },
    components: {
      tkCover
    }
  }
</script>
<style lang="scss" scoped>
  .toast-wrap{
    width: 100%;
    bottom: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    pointer-events: none;
  }
  .tk-toast{
    background-color: rgba(0,0,0,.68);
    font-size: 14px;
    padding: 6px 20px;
    border-radius: 100px;
    color: white;
    display: inline-block;
    margin: 4px 0;
    transition: all .5s ease;
    max-width: 80%;
    text-align: center;
  }
  .toast-complete-enter{
    opacity: 0;
    transform: translateY(100%);
  }
  .toast-complete-leave-to{
    opacity: 0;
  }

</style>
