<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
    </div>
    <div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
    </div>
    <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
    </div>
    <div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
    </div>
    <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RiseLoader',
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
        }
      }
    }

  }
</script>

<style>
  .v-spinner {
    text-align: center;
  }

  .v-spinner .v-rise-odd {
    animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15, .46, .9, .6);
    animation-fill-mode: both;
    display: inline-block;
  }

  .v-spinner .v-rise-even {
    animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15, .46, .9, .6);
    animation-fill-mode: both;
    display: inline-block;
  }

  @keyframes v-riseOddDelay {
    25%{
      transform: translateY(30px)  ;
    }
    0%
    {
      transform: scale(0.4);
    }
    50%
    {
      transform: scale(1.1);
    }
    75% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0) scale(0.75)  ;
    }
  }
  @keyframes v-riseEvenDelay {
    25% {
      transform: translateY(-30px);
    }
    0% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.4);
    }
    75% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0) scale(1.0);
    }
  }
</style>
