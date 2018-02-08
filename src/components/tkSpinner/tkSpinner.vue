<template>
  <component v-bind:is="loader" :color="color" :size="size"></component>
</template>
<script>
  import BeatLoader from './spinner/BeatLoader.vue'
  import BounceLoader from './spinner/BounceLoader.vue'
  import ClipLoader from './spinner/ClipLoader.vue'
  import DotLoader from './spinner/DotLoader.vue'
  import FadeLoader from './spinner/FadeLoader.vue'
  import GridLoader from './spinner/GridLoader.vue'
  import MoonLoader from './spinner/MoonLoader.vue'
  import PacmanLoader from './spinner/PacmanLoader.vue'
  import PulseLoader from './spinner/PulseLoader.vue'
  import RingLoader from './spinner/RingLoader.vue'
  import RiseLoader from './spinner/RiseLoader.vue'
  import RotateLoader from './spinner/RotateLoader.vue'
  import ScaleLoader from './spinner/ScaleLoader.vue'
  import SkewLoader from './spinner/SkewLoader.vue'
  import SquareLoader from './spinner/SquareLoader.vue'
  import SyncLoader from './spinner/SyncLoader.vue'
  export default {
    name: 'tk-spinner',
    data () {
      return {}
    },
    props: {
      type: {
        type: String,
        default: 'pulse'
      },
      color: {
        type: String,
        default: '#5dc596'
      },
      size: {
        type: String
      }
    },
    computed: {
      loader () {
        let loader = `${this.capitalizeFirstLetter(this.type)}Loader`
        return loader
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    },
    components: {
      BeatLoader,
      BounceLoader,
      ClipLoader,
      DotLoader,
      FadeLoader,
      GridLoader,
      MoonLoader,
      PacmanLoader,
      PulseLoader,
      RingLoader,
      RiseLoader,
      RotateLoader,
      ScaleLoader,
      SkewLoader,
      SquareLoader,
      SyncLoader
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
