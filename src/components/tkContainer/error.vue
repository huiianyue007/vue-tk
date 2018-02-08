<template>
  <div class="status-page">
    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7675"><path d="M512 83.577816c-237.289317 0-429.650196 192.360879-429.650196 429.650196s192.360879 429.650196 429.650196 429.650196S941.650196 750.517329 941.650196 513.228012 749.289317 83.577816 512 83.577816z m34.016332 644.469294H477.984668v-68.031665h68.031664v68.031665z m0-89.476874H477.984668l-17.734173-340.160322h103.50101l-17.735173 340.160322z" fill="#999999" p-id="7676"></path></svg>
    <div class="message">加载错误</div>
    <button @click="refresh">重新加载</button>
  </div>
</template>
<script>
  export default {
    methods: {
      refresh: function () {
        return this.$emit('refresh')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .status-page{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;

    .icon{
      width: 56px;
      height: 56px;
      margin-bottom: 16px;
    }
    .message{
      text-align: center;
      font-size: 14px;
      color: #999;
    }
    button{
      dissplay: block;
      padding: 8px 36px;
      border: 1px solid #666;
      border-radius: 2px;
      background-color: white;
      margin-top: 32px;
    }
  }
</style>
