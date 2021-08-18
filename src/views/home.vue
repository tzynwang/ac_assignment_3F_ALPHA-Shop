<template>
  <main class="container">
    <!-- <h1 class="title">首頁 (´・ω・`)</h1> -->
    <homeLanding />
    <homePrimarySection />
    <homeSecondarySection />
  </main>
</template>

<script>
import homeLanding from "./../components/homeLanding.vue"
import homePrimarySection from "./../components/homePrimarySection.vue"
import homeSecondarySection from "./../components/homeSecondarySection.vue"

export default {
  name: "home",
  components: {
    homeLanding,
    homePrimarySection,
    homeSecondarySection
  }
}
</script>

<style>

</style>