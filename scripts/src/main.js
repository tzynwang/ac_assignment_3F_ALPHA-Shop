const axios = require('axios')
const Vue = require('vue/dist/vue.js')

const app = new Vue({
  el: '#app',
  data: {
    steps: [],
    currentStep: 0,
    categories: [],
    chartItems: [],
    navLogoSrc: './images/logo.svg',
    navSearchIcon: './images/icon-nav-search.svg',
    navChartIcon: './images/icon-nav-chart.svg',
    navModeIcon: './images/icon-nav-to-dark-mode.svg',
    navMenuIcon: './images/icon-nav-menu.svg',
    darkMode: false
  },
  async created () {
    // categories
    const categories = await this.fetchData('../../data/categories.json')
    this.categories = [...categories.categories]

    // chart items
    const chartItems = await this.fetchData('../../data/chartItems.json')
    this.chartItems = [...chartItems.chartItems]

    // steps
    const steps = await this.fetchData('../../data/steps.json')
    this.steps = [...steps.steps]
  },
  methods: {
    async fetchData (url) {
      const response = await axios.get(url)
      return response.data
    },
    stepNumber(index) {
      return index < this.currentStep ? '✓' : index + 1
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
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        this.navLogoSrc = './images/logo.svg'
        this.navSearchIcon = './images/icon-nav-search.svg'
        this.navChartIcon = './images/icon-nav-chart.svg'
        this.navModeIcon = './images/icon-nav-to-dark-mode.svg'
        this.navMenuIcon = './images/icon-nav-menu.svg'
      }
    }
  }
})
