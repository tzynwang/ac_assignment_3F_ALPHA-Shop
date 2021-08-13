module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_reset.scss";
          @import "@/assets/styles/_color.scss";
          @import "@/assets/styles/_mixin.scss";
          @import "@/assets/styles/main.scss";
        `
      }
    }
  },
  publicPath: '/ac_assignment_3F_ALPHA-Shop/'
}
