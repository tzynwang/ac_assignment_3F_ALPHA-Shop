<template>
  <div class="form-section billing-info">
    <h2 class="title">付款資訊</h2>
    <div class="form-row">
      <label for="cardHolderName">持卡人姓名</label>
      <input
        type="text"
        name="cardHolderName"
        id="cardHolderName"
        placeholder="John Doe"
        @change="onInputChange({ field: 'cardHolderName', event: $event })"
        :class="{
          'input-empty-hint': !getTrimLength(getFormInput.cardHolderName),
        }"
      />
    </div>
    <div class="form-row">
      <label for="cardNumber">卡號</label>
      <input
        type="tel"
        inputmode="numeric"
        name="cardNumber"
        id="cardNumber"
        placeholder="1111222233334444"
        @change="onInputChange({ field: 'cardNumber', event: $event })"
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
          placeholder="MMYY"
          @change="onInputChange({ field: 'cardExpiredDate', event: $event })"
          :class="{
            'input-empty-hint': !getTrimLength(getFormInput.cardExpiredDate),
          }"
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
          @change="onInputChange({ field: 'cardCvc', event: $event })"
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
    onInputChange(inputObject) {
      const value = inputObject.event.target.value
      switch (inputObject.field) {
        case "cardNumber":
          if (value.length === 16 && !isNaN(parseInt(value, 10)))
            this.setInput(inputObject);
          break;
        case "cardExpiredDate":
          if (
            value.length === 4 &&
            !isNaN(parseInt(value, 10)) &&
            parseInt(value.slice(0, 2), 10) <= 12 &&
            parseInt(value.slice(0, 2), 10) >= 1 &&
            parseInt(value.slice(2, 4), 10) >= 
            parseInt(new Date().getFullYear().toString().slice(2, 4), 10)
          )
            this.setInput(inputObject);
          break;
        case "cardCvc":
          if (value.length === 3 && !isNaN(parseInt(value, 10)))
            this.setInput(inputObject);
            break
        default:
          if (value.trim().length)
            this.setInput(inputObject);
      }
    },
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