<template>
  <div id="app" :theme="getMode">
    <headerNav />
    <div class="mock"></div>
    <footerComponent />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

.mock {
  height: 600px;
  background-color: rgb(94, 184, 58);
}
</style>
