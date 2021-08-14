<template>
  <div class="btn-group">
    <button
      :class="[
        'btn',
        'btn-primary-outline',
        't-align-left',
        { 'd-none': getCurrentStep === 0 },
      ]"
      @click.prevent="formCheck(-1)"
    >
      ← 上一步
    </button>
    <button class="btn btn-primary" @click.prevent="formCheck(1)">
      {{ getCurrentStep | nextBtnText }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "purchaseButtonsGroup",
  computed: {
    ...mapGetters(["getCurrentStep", "getFormInput", "getSelectedDeliveryFee"]),
  },
  methods: {
    ...mapActions(["setCurrentStep", "setFormState"]),
    scrollTop() {
      window.scrollTo(0, 0);
    },
    formCheck(stepMove) {
      switch (this.getCurrentStep) {
        case 0:
          if (
            !this.getTrimLength(this.getFormInput.title) ||
            !this.getTrimLength(this.getFormInput.name) ||
            !this.getTrimLength(this.getFormInput.tel) ||
            !this.getTrimLength(this.getFormInput.email) ||
            !this.getTrimLength(this.getFormInput.city) ||
            !this.getTrimLength(this.getFormInput.address)
          ) {
            return;
          } else {
            this.setCurrentStep(stepMove);
            this.scrollTop();
          }
          break;
        case 1:
          this.setCurrentStep(stepMove);
          this.scrollTop();
          break;
        case 2:
          if (
            !this.getTrimLength(this.getFormInput.cardHolderName) ||
            !this.getTrimLength(this.getFormInput.cardNumber) ||
            !this.getTrimLength(this.getFormInput.cardExpiredDate) ||
            !this.getTrimLength(this.getFormInput.cardCvc)
          ) {
            return;
          } else if (stepMove === 1) {
            this.scrollTop();
            this.setFormState(true);
          } else {
            this.scrollTop();
            this.setFormState(false);
            this.setCurrentStep(stepMove);
          }
      }
    },
    getTrimLength(input) {
      return input.trim().length;
    },
  },
  filters: {
    nextBtnText(step) {
      return step < 2 ? "下一步 →" : "確認下單";
    },
  },
};
</script>

<style>
</style>