export default {
  disableBodyOverScroll: function () {
    if (typeof document !== 'undefined') {
      document.body.addEventListener('touchmove', function (e) {
        if (e.target === document.body) {
          e.preventDefault()
        }
      })
    }
  },
  status: {
  },
  loadingOptions: {},
  mobileView: true
}
