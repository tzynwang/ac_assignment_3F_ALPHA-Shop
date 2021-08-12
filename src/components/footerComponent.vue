<template>
  <footer class="container">
    <div class="footer-section logo">
      <img :src="require(`@/assets/images/${getLogoSrc}`)" alt="logo" />
    </div>
    <div class="footer-section">
      <div class="footer-title">客戶服務</div>
      <a href="">運送說明</a>
      <a href="">退換貨相關</a>
      <a href="">付款資訊</a>
      <a href="">FAQ</a>
    </div>
    <div class="footer-section">
      <div class="footer-title">關於我們</div>
      <a href="">品牌故事</a>
      <a href="">媒體聯繫</a>
      <a href="">Press kit</a>
    </div>
    <div class="footer-section">
      <div class="footer-title">資訊</div>
      <a href="">隱私權政策</a>
      <a href="">Cookie</a>
      <a href="">GDPR</a>
    </div>
    <div class="footer-section">
      <div class="footer-title">追蹤 ALPHA Shop</div>
      <div class="footer-tel">+886 02123-45678</div>
      <div class="social-media">
        <a href="">
          <img :src="require(`@/assets/images/${getFooterFbIcon}`)" alt="facebook icon" />
        </a>
        <a href="">
          <img :src="require(`@/assets/images/${getFooterIGIcon}`)" alt="instagram icon" />
        </a>
        <a href="">
          <img :src="require(`@/assets/images/${getFooterTelIcon}`)" alt="make-a-call icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "footerComponent",
  computed: {
    ...mapGetters([
      "getLogoSrc",
      "getFooterFbIcon",
      "getFooterIGIcon",
      "getFooterTelIcon",
    ]),
  },
};
</script>

<style>
</style>