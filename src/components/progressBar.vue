<template>
  <div class="progress-bar">
    <div
      :class="[
        'step-item',
        { active: (index) === getCurrentStep },
        { complete: (index) < getCurrentStep },
      ]"
      v-for="(step, index) in steps"
      :key="'progress-bar-step-' + index"
    >
      <div class="icon">{{ stepNumber(index, getCurrentStep) }}</div>
      <div class="content">
        <span class="content-text">{{ step }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'progressBar',
  data() {
    return {
      steps: ['寄送地址', '運送方式', '付款資訊']
    }
  },
  computed: {
    ...mapGetters(["getCurrentStep"]),
  },
  methods: {
    stepNumber (step, currentStep) {
      return step < currentStep ? '✓' : (step + 1)
    }
  }
};
</script>

<style>
</style>