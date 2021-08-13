const state = {
  currentStep: 0,
  deliveryFee: { standard: 0, dhl: 500 },
  chartItems: [],
  selectedDeliveryFee: 0,
  title: '',
  name: '',
  tel: '',
  email: '',
  city: '',
  address: '',
  cardHolderName: '',
  cardNumber: '',
  cardExpiredDate: '',
  cardCvc: '',
  formState: false,
  orderSum: -1
}

const getters = {
  getCurrentStep: state => state.currentStep,
  getDeliveryFee: state => state.deliveryFee,
  getChartItems: state => state.chartItems,
  getSelectedDeliveryFee: state => state.selectedDeliveryFee,
  getFormInput: state => state,
  getFormState: state => state.formState,
  getOrderSum: state => state.orderSum
}

const actions = {
  setCurrentStep ({ commit }, step) {
    commit('updateCurrentStep', step)
  },
  setChartItems ({ commit }, chartItemArray) {
    commit('updateChartItems', chartItemArray)
  },
  setChartItemQty ({ commit }, mutateObj) {
    commit('updateChartItemQty', mutateObj)
  },
  setDeliveryFee ({ commit }, fee) {
    commit('updateDeliveryFee', fee)
  },
  setInput ({ commit }, inputObj) {
    commit('updateInput', inputObj)
  },
  setFormState ({ commit }, formState) {
    commit('updateFormState', formState)
  },
  setOrderSum ({ commit }, orderSum) {
    commit('updateOrderSum', orderSum)
  }
}

const mutations = {
  updateCurrentStep: (state, step) => {
    if (step === -1 && state.currentStep > 0) {
      state.currentStep -= 1
    }
    if (step === 1 && state.currentStep < 3) {
      state.currentStep += 1
    }
  },
  updateChartItems: (state, chartItemArray) => (state.chartItems = chartItemArray),
  updateChartItemQty: (state, mutateObj) => {
    state.chartItems.forEach(item => {
      if (item.id === mutateObj.id && mutateObj.qty === 1) {
        item.qty += 1
      }
      if (item.id === mutateObj.id && mutateObj.qty === -1) {
        if (item.qty > 0) item.qty -= 1
      }
    })
  },
  updateDeliveryFee: (state, fee) => (state.selectedDeliveryFee = fee),
  updateInput: (state, inputObj) => (state[inputObj.field] = inputObj.event.target.value),
  updateFormState: (state, formState) => (state.formState = formState),
  updateOrderSum: (state, orderSum) => (state.orderSum = orderSum)
}

export default {
  state,
  getters,
  actions,
  mutations
}
