module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_reset.scss";
          @import "@/assets/styles/_color.scss";
          @import "@/assets/styles/_mixin.scss";
        `
      }
    }
  },
  publicPath: '/ac_assignment_3F_ALPHA-Shop/'
}
