<template>
  <div class="chart">
    <!-- title -->
    <h2 class="title chart-title">購物籃</h2>
    <!-- chart item -->
    <div
      :class="['chart-item', { 'd-none': item.qty === 0 }]"
      v-for="item in getChartItems"
      :key="item.id"
    >
      <img
        class="chart-image"
        :src="require(`@/assets/images/${item.image}`)"
        alt="product image"
      />
      <div class="chart-panel">
        <!-- item & qty -->
        <div>
          <!-- item title -->
          <div class="chart-item-title">{{ item.title }}</div>
          <!-- qty -->
          <div>
            <button
              class="qty-btn"
              @click="mutateChartItemQty({ qty: -1, id: item.id })"
            >
              -
            </button>
            <span class="chart-item-qty">{{ item.qty }}</span>
            <button
              class="qty-btn"
              @click="mutateChartItemQty({ qty: 1, id: item.id })"
            >
              +
            </button>
          </div>
        </div>
        <!-- price -->
        <div class="chart-item-price">{{ item.price | dollarSign }}</div>
      </div>
    </div>
    <!-- delivery cost -->
    <div class="delivery-cost">
      <span>運費</span>
      <span>{{ getSelectedDeliveryFee | dollarSign }}</span>
    </div>
    <!-- sum -->
    <div class="order-sum">
      <span>小計</span>
      <span>{{ getOrderSum | dollarSign }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";
import { dollarSign } from "../utils/mixins"

export default {
  name: "chartSection",
  async created() {
    const response = await axios.get("./data/chartItems.json");
    const chartItems = [];
    response.data.chartItems.forEach((item) => {
      chartItems.push({ ...item, id: uuidv4() });
    });
    this.setChartItems(chartItems);
  },
  mixins: [dollarSign],
  methods: {
    ...mapActions(["setChartItems", "setChartItemQty", "setOrderSum"]),
    mutateChartItemQty(mutateObj) {
      this.setChartItemQty(mutateObj);
    },
  },
  computed: {
    ...mapGetters(["getChartItems", "getSelectedDeliveryFee"]),
    getOrderSum() {
      let orderSum = 0;
      this.getChartItems.forEach((item) => {
        orderSum += item.qty * item.price;
      });
      orderSum += this.getSelectedDeliveryFee
      this.setOrderSum(orderSum)
      return orderSum;
    },
  },
  // filters: {
  //   dollarSign(price) {
  //     return price === 0 ? "免費" : `$ ${price}`;
  //   },
  // },
};
</script>

<style>
</style>