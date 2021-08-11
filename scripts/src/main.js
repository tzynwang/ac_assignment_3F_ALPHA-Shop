const axios = require('axios')
const Vue = require('vue/dist/vue.js')
const { v4: uuidv4 } = require('uuid')

const app = new Vue({
  el: '#app',
  data: {
    steps: ['寄送地址', '運送方式', '付款資訊'],
    currentStep: 0,
    categories: ['男款', '女款', '最新消息', '客製商品', '聯絡我們'],
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
    footerTelIcon: './images/icon-footer-tel.svg'
  },
  async created () {
    // chart items
    const chartItems = await this.fetchData('./data/chartItems.json')
    chartItems.chartItems.forEach(item => {
      this.chartItems.push({ item, id: uuidv4() })
    })
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
      if (input < 0 && this.currentStep > 0) {
        this.currentStep -= 1
      } else if (input > 0 && this.currentStep < 2) {
        this.currentStep += 1
      }
    },
    scrollTop () {
      window.scrollTo(0, 0)
    },
    autoFocus () {
      document.querySelector('.search-input').focus()
    },
    closeInput () {
      document.querySelector('.search-input').value = ''
      setTimeout(() => {
        document.querySelector('.search-input').blur()
      }, 1000)
    },
    closeNavList (event) {
      if (event.target.checked) {
        document.querySelector('main').addEventListener('click', () => {
          event.target.checked = false
        })
      }
    },
    darkModeMethod (event) {
      if (event.target.checked) {
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
        document.documentElement.setAttribute('data-theme', '')
        this.navLogoSrc = './images/logo.svg'
        this.navSearchIcon = './images/icon-nav-search.svg'
        this.navChartIcon = './images/icon-nav-chart.svg'
        this.navModeIcon = './images/icon-nav-to-dark-mode.svg'
        this.navMenuIcon = './images/icon-nav-menu.svg'
        this.footerFbIcon = './images/icon-footer-fb.svg'
        this.footerIGIcon = './images/icon-footer-ig.svg'
        this.footerTelIcon = './images/icon-footer-tel.svg'
      }
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
