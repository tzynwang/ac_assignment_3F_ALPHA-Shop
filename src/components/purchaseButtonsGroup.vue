<template>
  <div class="btn-group">
    <button
      :class="[
        'btn',
        'btn-primary-outline',
        't-align-left',
        { 'd-none': getCurrentStep === 0 },
      ]"
      @click.prevent="
        setCurrentStep(-1);
        scrollTop();
      "
    >
      ← 上一步
    </button>
    <button
      class="btn btn-primary"
      @click.prevent="
        setCurrentStep(1);
        scrollTop();
        mutateFormState(true);
      "
    >
      {{ getCurrentStep | nextBtnText }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "purchaseButtonsGroup",
  computed: {
    ...mapGetters(["getCurrentStep", "getFormInput", "getSelectedDeliveryFee"])
  },
  methods: {
    ...mapActions(["setCurrentStep", "setFormState"]),
    scrollTop () {
      window.scrollTo(0, 0)
    },
    mutateFormState (state) {
      if (this.getCurrentStep === 3) {
        this.setFormState(state)
        // const formInput = { ...this.getFormInput }
        // console.log(`
        // title: ${formInput.title}
        // name: ${formInput.name}
        // tel: ${formInput.tel}
        // email: ${formInput.email}
        // city: ${formInput.city}
        // address: ${formInput.address}
        // cardHolderName: ${formInput.cardHolderName}
        // cardNumber: ${formInput.cardNumber}
        // cardExpiredDate: ${formInput.cardExpiredDate}
        // cardCvc: ${formInput.cardCvc}
        // deliveryFee: ${this.getSelectedDeliveryFee}
        // `)
      }
    }
  },
  filters: {
    nextBtnText (step) {
      return step < 2 ? '下一步 →' : '確認下單'
    }
  }
};
</script>

<style>
</style>