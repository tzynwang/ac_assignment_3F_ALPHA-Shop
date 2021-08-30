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
        <chartSection :chart-items-from-parent="chartItemsFromParent" />
        <purchaseButtonsGroup v-if="windowWidth <= 768" />
      </div>

      <orderSummaryModal />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
      chartItemsFromParent: [] // for AC review
    };
  },
  async created() {
    // for AC review
    const response = await axios.get("./data/chartItems.json");
    response.data.chartItems.forEach((item) => {
      this.chartItemsFromParent.push({ ...item, id: uuidv4() });
    });
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
