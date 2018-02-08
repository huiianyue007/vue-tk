<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-scale v-scale1" v-bind:style="[spinnerStyle,spinnerDelay1]">
    </div>
    <div class="v-scale v-scale2" v-bind:style="[spinnerStyle,spinnerDelay2]">
    </div>
    <div class="v-scale v-scale3" v-bind:style="[spinnerStyle,spinnerDelay3]">
    </div>
    <div class="v-scale v-scale4" v-bind:style="[spinnerStyle,spinnerDelay4]">
    </div>
    <div class="v-scale v-scale5" v-bind:style="[spinnerStyle,spinnerDelay5]">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ScaleLoader',
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: '#5dc596'
      },
      height: {
        type: String,
        default: '35px'
      },
      width: {
        type: String,
        default: '4px'
      },
      margin: {
        type: String,
        default: '2px'
      },
      radius: {
        type: String,
        default: '2px'
      }
    },
    data () {
      return {
        spinnerStyle: {
          backgroundColor: this.color,
          height: this.height,
          width: this.width,
          margin: this.margin,
          borderRadius: this.radius
        },
        spinnerDelay1: {
          animationDelay: '0.1s'
        },
        spinnerDelay2: {
          animationDelay: '0.2s'
        },
        spinnerDelay3: {
          animationDelay: '0.3s'
        },
        spinnerDelay4: {
          animationDelay: '0.4s'
        },
        spinnerDelay5: {
          animationDelay: '0.5s'
        }
      }
    }

  }
</script>

<style>
  .v-spinner {
    text-align: center;
  }
  .v-spinner .v-scale {
    animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
    animation-fill-mode: both;
    display: inline-block;
  }
  @keyframes v-scaleStretchDelay {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.4);
    }
  }
</style>
