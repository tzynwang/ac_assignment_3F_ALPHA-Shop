<template>
  <div :class="['order-summary', { 'd-none': !getFormState }]">
    <span class="order-summary-close" @click="mutateFormState(false)"></span>
    <div>title: {{ getFormInput.title }}</div>
    <div>name: {{ getFormInput.name }}</div>
    <div>tel: {{ getFormInput.tel }}</div>
    <div>email: {{ getFormInput.email }}</div>
    <div>city: {{ getFormInput.city }}</div>
    <div>address: {{ getFormInput.address }}</div>
    <div>cardHolderName: {{ getFormInput.cardHolderName }}</div>
    <div>cardNumber: {{ getFormInput.cardNumber }}</div>
    <div>cardExpiredDate: {{ getFormInput.cardExpiredDate }}</div>
    <div>cardCvc: {{ getFormInput.cardCvc }}</div>
    <div>deliveryFee: {{ getSelectedDeliveryFee }}</div>
    <div>orderSum: {{ getOrderSum }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "orderSummaryModal",
  computed: {
    ...mapGetters([
      "getFormInput",
      "getFormState",
      "getSelectedDeliveryFee",
      "getOrderSum",
    ]),
  },
  methods: {
    ...mapActions(["setFormState"]),
    mutateFormState(state) {
      this.setFormState(state);
    },
  },
};
</script>
