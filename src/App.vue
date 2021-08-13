<template>
  <div id="app" :theme="getMode">
    <headerNav />
    <router-view/>
    <footerComponent />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import headerNav from "./components/headerNav.vue"
import footerComponent from "./components/footerComponent.vue"

export default {
  name: "App",
  components: {
    headerNav,
    footerComponent
  },
  computed: {
    ...mapGetters(["getMode"])
  },
  created () {
    if (!window.localStorage.getItem("alphaShopTheme")) {
      window.localStorage.setItem("alphaShopTheme", "default")
    } else {
      const mode = window.localStorage.getItem("alphaShopTheme")
      this.setMode(mode)
    }
  },
  methods: {
    ...mapActions(["setMode"])
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>