<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-ring v-ring1" v-bind:style="spinnerBasicStyle">
      <div class="v-ring v-ring2" v-bind:style="spinnerStyle">
      </div>
      <div class="v-ring v-ring3" v-bind:style="spinnerStyle">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RingLoader',
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: '#5dc596'
      },
      size: {
        type: String,
        default: '60px'
      },
      margin: {
        type: String,
        default: '2px'
      },
      radius: {
        type: String,
        default: '100%'
      }
    },
    computed: {
      spinnerStyle () {
        return {
          height: this.size,
          width: this.size,
          border: parseFloat(this.size) / 10 + 'px solid' + this.color,
          opacity: 0.4,
          borderRadius: this.radius
        }
      },
      spinnerBasicStyle () {
        return {
          height: this.size,
          width: this.size,
          position: 'relative'
        }
      }
    }

  }
</script>

<style>
  .v-spinner .v-ring2 {
    animation: v-ringRightRotate 2s 0s infinite linear;
    animation-fill-mode: forwards;
    perspective: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .v-spinner .v-ring3 {
    animation: v-ringLeftRotate 2s 0s infinite linear;
    animation-fill-mode: forwards;
    perspective: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }
  @keyframes v-ringRightRotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);

    }
  }

  @keyframes v-ringLeftRotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    }
  }
</style>
