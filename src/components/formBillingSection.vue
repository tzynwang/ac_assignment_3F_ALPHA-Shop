<template>
  <div
    class="form-section billing-info"
  >
    <h2 class="title">付款資訊</h2>
    <div class="form-row">
      <label for="cardHolderName">持卡人姓名</label>
      <input
        type="text"
        name="cardHolderName"
        id="cardHolderName"
        placeholder="John Doe"
        @change="setInput({ field: 'cardHolderName', event: $event })"
        :class="{ 'input-empty-hint': !getTrimLength(getFormInput.cardHolderName) }"
      />
    </div>
    <div class="form-row">
      <label for="cardNumber">卡號</label>
      <input
        type="tel"
        inputmode="numeric"
        name="cardNumber"
        id="cardNumber"
        placeholder="1111 2222 3333 4444"
        @change="setInput({ field: 'cardNumber', event: $event })"
        :class="{ 'input-empty-hint': !getTrimLength(getFormInput.cardNumber) }"
      />
    </div>
    <div class="row-group card-expDate-and-cvc">
      <div class="form-row">
        <label for="cardExpiredDate">有效期限</label>
        <input
          type="tel"
          inputmode="numeric"
          name="cardExpiredDate"
          id="cardExpiredDate"
          placeholder="MM/YY"
          @change="setInput({ field: 'cardExpiredDate', event: $event })"
          :class="{ 'input-empty-hint': !getTrimLength(getFormInput.cardExpiredDate) }"
        />
      </div>
      <div class="form-row">
        <label for="cardCvc">CVC / CCV</label>
        <input
          type="tel"
          inputmode="numeric"
          name="cardCvc"
          id="cardCvc"
          placeholder="123"
          @change="setInput({ field: 'cardCvc', event: $event })"
          :class="{ 'input-empty-hint': !getTrimLength(getFormInput.cardCvc) }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "formBillingSection",
  methods: {
    ...mapActions(["setInput"]),
    getTrimLength(input) {
      return input.trim().length;
    },
  },
  computed: {
    ...mapGetters(["getFormInput"]),
  },
};
</script>

<style>
</style>