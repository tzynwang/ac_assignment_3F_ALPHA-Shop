<template>
  <div class="form-section delivery-method">
    <h2 class="title">運送方式</h2>
    <div class="form-row">
      <input
        type="radio"
        name="delivery"
        id="deliveryStandard"
        :value="getDeliveryFee.standard"
        @change="mutateDeliveryFee(getDeliveryFee.standard)"
        checked
      />
      <label for="deliveryStandard">
        <div class="deliver-method">標準運送</div>
        <div class="deliver-time">約 3~7 個工作天</div>
      </label>
      <span class="price">{{ getDeliveryFee.standard | dollarSign }}</span>
    </div>
    <div class="form-row">
      <input
        type="radio"
        name="delivery"
        id="deliveryDhl"
        :value="getDeliveryFee.dhl"
        @change="mutateDeliveryFee(getDeliveryFee.dhl)"
      />
      <label for="deliveryDhl">
        <div class="deliver-method">DHL貨運</div>
        <div class="deliver-time">48 小時內送達</div>
      </label>
      <span class="price">{{ getDeliveryFee.dhl | dollarSign }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'formDeliverySection',
  methods: {
    ...mapActions(["setDeliveryFee"]),
    mutateDeliveryFee (fee) {
      this.setDeliveryFee(fee)
    }
  },
  computed: {
    ...mapGetters(["getDeliveryFee"]),
  },
  filters: {
    dollarSign (price) {
      return price === 0 ? '免費' : `$ ${price}`
    }
  }
};
</script>

<style>
</style>