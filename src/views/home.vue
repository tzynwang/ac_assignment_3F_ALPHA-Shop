<template>
  <main class="container">
    <!-- <h1 class="title">首頁 (´・ω・`)</h1> -->
    <homeLanding />
    <homePrimarySection />
  </main>
</template>

<script>
import homeLanding from "./../components/homeLanding.vue"
import homePrimarySection from "./../components/homePrimarySection.vue"

export default {
  name: "home",
  components: {
    homeLanding,
    homePrimarySection
  }
}
</script>

<style>

</style>