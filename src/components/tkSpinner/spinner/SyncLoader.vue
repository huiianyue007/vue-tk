<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-sync v-sync1" v-bind:style="[spinnerStyle,spinnerDelay1]">
    </div>
    <div class="v-sync v-sync2" v-bind:style="[spinnerStyle,spinnerDelay2]">
    </div>
    <div class="v-sync v-sync3" v-bind:style="[spinnerStyle,spinnerDelay3]">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SyncLoader',
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
        default: '15px'
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
    data () {
      return {
        spinnerStyle: {
          backgroundColor: this.color,
          height: this.size,
          width: this.size,
          margin: this.margin,
          borderRadius: this.radius
        },
        spinnerDelay1: {
          animationDelay: '0.07s'
        },
        spinnerDelay2: {
          animationDelay: '0.14s'
        },
        spinnerDelay3: {
          animationDelay: '0.21s'
        }
      }
    }

  }
</script>

<style>
  .v-spinner .v-sync {
    animation: v-syncStretchDelay 0.6s infinite ease-in-out;
    animation-fill-mode: both;
    display: inline-block;
  }
  @keyframes v-syncStretchDelay {
    33% {
      transform: translateY(10px);
    }
    66% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
