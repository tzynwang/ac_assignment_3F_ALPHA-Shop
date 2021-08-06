const axios = require('axios')
const Vue = require('vue/dist/vue.js')
const { uuid } = require('uuidv4')

const app = new Vue({
  el: '#app',
  data: {
    steps: [],
    currentStep: 0,
    categories: [],
    chartItems: [],
    currentDeliveryFee: 0,
    deliveryFee: { standard: 0, dhl: 500 },
    orderSum: 0,
    navLogoSrc: './images/logo.svg',
    navSearchIcon: './images/icon-nav-search.svg',
    navChartIcon: './images/icon-nav-chart.svg',
    navModeIcon: './images/icon-nav-to-dark-mode.svg',
    navMenuIcon: './images/icon-nav-menu.svg',
    footerFbIcon: './images/icon-footer-fb.svg',
    footerIGIcon: './images/icon-footer-ig.svg',
    footerTelIcon: './images/icon-footer-tel.svg',
    darkMode: false
  },
  async created () {
    // categories
    const categories = await this.fetchData('./data/categories.json') // ../../data/categories.json
    this.categories = [...categories.categories]

    // chart items
    const chartItems = await this.fetchData('./data/chartItems.json') // ../../data/chartItems.json
    chartItems.chartItems.forEach(item => {
      this.chartItems.push({ item, id: uuid() })
    })

    // steps
    const steps = await this.fetchData('./data/steps.json') // ../../data/steps.json
    this.steps = [...steps.steps]
  },
  methods: {
    async fetchData (url) {
      const response = await axios.get(url)
      return response.data
    },
    stepNumber (index) {
      return index < this.currentStep ? '✓' : index + 1
    },
    addQty (id) {
      this.chartItems.forEach(item => {
        if (item.id === id) {
          item.item.qty += 1
        }
      })
    },
    minusQty (id) {
      this.chartItems.forEach(item => {
        if (item.id === id) {
          if (item.item.qty > 0) item.item.qty -= 1
        }
      })
    },
    reCalcOrderSum () {
      this.orderSum = 0
      this.chartItems.forEach(item => {
        this.orderSum += (item.item.price * item.item.qty)
      })
      this.orderSum += this.currentDeliveryFee
    },
    stepCount (input) {
      this.currentStep = (input < 0 && this.currentStep > 0) ? this.currentStep -= 1 : this.currentStep += 1
      window.scrollTo(0, 0)
    },
    autoFocus () {
      document.querySelector('.search-input').focus()
    },
    closeInput () {
      document.querySelector('.search-input').value = ''
      document.querySelector('.search-input').blur()
    }
  },
  computed: {
    nextBtnText () {
      return this.currentStep === 2 ? '確認下單' : '下一步 →'
    }
  },
  filters: {
    dollarSign (value) {
      return value === 0 ? '免費' : `$${value}`
    }
  },
  watch: {
    darkMode: function (value) {
      if (value) {
        document.documentElement.setAttribute('data-theme', 'dark')
        this.navLogoSrc = './images/logo-dark.svg'
        this.navSearchIcon = './images/icon-nav-search-dark.svg'
        this.navChartIcon = './images/icon-nav-chart-dark.svg'
        this.navModeIcon = './images/icon-nav-to-light-mode.svg'
        this.navMenuIcon = './images/icon-nav-menu-dark.svg'
        this.footerFbIcon = './images/icon-footer-fb-dark.svg'
        this.footerIGIcon = './images/icon-footer-ig-dark.svg'
        this.footerTelIcon = './images/icon-footer-tel-dark.svg'
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        this.navLogoSrc = './images/logo.svg'
        this.navSearchIcon = './images/icon-nav-search.svg'
        this.navChartIcon = './images/icon-nav-chart.svg'
        this.navModeIcon = './images/icon-nav-to-dark-mode.svg'
        this.navMenuIcon = './images/icon-nav-menu.svg'
        this.footerFbIcon = './images/icon-footer-fb.svg'
        this.footerIGIcon = './images/icon-footer-ig.svg'
        this.footerTelIcon = './images/icon-footer-tel.svg'
      }
    },
    chartItems: {
      deep: true,
      handler () {
        this.orderSum = 0
        this.chartItems.forEach(item => {
          this.orderSum += (item.item.price * item.item.qty)
        })
        this.orderSum += this.currentDeliveryFee
      }
    },
    currentDeliveryFee: function () {
      this.orderSum = 0
      this.chartItems.forEach(item => {
        this.orderSum += (item.item.price * item.item.qty)
      })
      this.orderSum += this.currentDeliveryFee
    }
  }
})