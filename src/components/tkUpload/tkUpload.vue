<template>
  <div class="upload">
    <md-whiteframe class="btn" md-elevation="5">{{title}}</md-whiteframe>
    <input type="file">
  </div>
</template>
<script>
  export default {
    name: 'upload',
    data: function () {
      return {}
    },
    props: {
      title: {
        type: String
      }
    }
  }
</script>
<style rel="stylesheet/scss" scoped lang="scss">
  .upload {
    position: relative;
    width: 150px;
    height: 40px;

    .btn {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      z-index: 1;
    }

    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 10;
    }
  }
</style>
