<template>
  <main class="container">
    <h1 class="title">結帳</h1>
    <div class="layout-wrapper">
      <div class="form-section">
        <div class="progress-and-form">
          <progressBar />
          <formAddressSection :class="{ 'd-none': getCurrentStep !== 0 }" />
          <formDeliverySection :class="{ 'd-none': getCurrentStep !== 1 }" />
          <formBillingSection :class="{ 'd-none': getCurrentStep < 2 }" />
        </div>
        <purchaseButtonsGroup v-if="windowWidth > 768" />
      </div>

      <div class="chart-section">
        <chartSection />
        <purchaseButtonsGroup v-if="windowWidth <= 768" />
      </div>

      <orderSummaryModal />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import progressBar from "../components/progressBar.vue";
import formAddressSection from "../components/formAddressSection.vue";
import formDeliverySection from "../components/formDeliverySection.vue";
import formBillingSection from "../components/formBillingSection.vue";
import purchaseButtonsGroup from "../components/purchaseButtonsGroup.vue";
import chartSection from "../components/chartSection.vue";
import orderSummaryModal from "../components/orderSummaryModal.vue";

export default {
  name: "purchase",
  components: {
    progressBar,
    formAddressSection,
    formDeliverySection,
    formBillingSection,
    purchaseButtonsGroup,
    chartSection,
    orderSummaryModal,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  computed: {
    ...mapGetters(["getCurrentStep"]),
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
