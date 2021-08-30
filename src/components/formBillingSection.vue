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
        <!-- <input
          type="tel"
          inputmode="numeric"
          name="cardExpiredDate"
          id="cardExpiredDate"
          placeholder="MMYY"
          @change="onInputChange({ field: 'cardExpiredDate', event: $event })"
          :class="{
            'input-empty-hint': !getTrimLength(getFormInput.cardExpiredDate),
          }"
        /> -->
        <input
          type="month"
          name="cardExpiredDate"
          id="cardExpiredDate"
          @change="onInputChange({ field: 'cardExpiredDate', event: $event })"
          :class="{
            'input-empty-hint': !getTrimLength(getFormInput.cardExpiredDate),
          }"
          :style="calendarIcon"
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

import isCreditCard from "validator/lib/isCreditCard";
import isAfter from "validator/lib/isAfter";
import isInt from "validator/lib/isInt";

export default {
  name: "formBillingSection",
  methods: {
    ...mapActions(["setInput"]),
    onInputChange(inputObject) {
      const value = inputObject.event.target.value;
      switch (inputObject.field) {
        case "cardNumber":
          if (isCreditCard(value)) this.setInput(inputObject);
          break;
        case "cardExpiredDate":
          if (isAfter(value)) this.setInput(inputObject);
          break;
        case "cardCvc":
          if (value.length === 3 && isInt(value)) this.setInput(inputObject);
          break;
        default:
          if (value.trim().length) this.setInput(inputObject);
      }
    },
    getTrimLength(input) {
      return input.trim().length;
    },
  },
  computed: {
    ...mapGetters(["getFormInput", "getFormCalendarIcon"]),
    calendarIcon() {
      return {
        "--calendar-icon": this.getFormCalendarIcon,
      };
    },
  },
};
</script>

<style lang="scss">
input {
  // set customized input type="month" calendar icon
  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    position: relative;
    right: 1rem;
    cursor: pointer;
    background-image: var(--calendar-icon);
  }
}
</style>