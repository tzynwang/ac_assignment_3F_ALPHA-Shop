const state = {
  mode: '',
  logoSrc: 'logo.svg',
  navSearchIcon: 'icon-nav-search.svg',
  navChartIcon: 'icon-nav-chart.svg',
  navModeIcon: 'icon-nav-to-dark-mode.svg',
  navMenuIcon: 'icon-nav-menu.svg',
  footerFbIcon: 'icon-footer-fb.svg',
  footerIGIcon: 'icon-footer-ig.svg',
  footerTelIcon: 'icon-footer-tel.svg'
}

const getters = {
  getMode: state => state.mode,
  getLogoSrc: state => state.logoSrc,
  getNavSearchIcon: state => state.navSearchIcon,
  getNavChartIcon: state => state.navChartIcon,
  getNavModeIcon: state => state.navModeIcon,
  getNavMenuIcon: state => state.navMenuIcon,
  getFooterFbIcon: state => state.footerFbIcon,
  getFooterIGIcon: state => state.footerIGIcon,
  getFooterTelIcon: state => state.footerTelIcon
}

const actions = {
  setMode ({ commit }, mode) {
    window.localStorage.setItem('alphaShopTheme', mode)
    commit('updateMode', mode)
    commit('updateIconSrc', mode)
  }
}

const mutations = {
  updateMode: (state, mode) => (state.mode = mode),
  updateIconSrc: (state, mode) => {
    if (mode === 'default') {
      state.logoSrc = 'logo.svg'
      state.navSearchIcon = 'icon-nav-search.svg'
      state.navChartIcon = 'icon-nav-chart.svg'
      state.navModeIcon = 'icon-nav-to-dark-mode.svg'
      state.navMenuIcon = 'icon-nav-menu.svg'
      state.footerFbIcon = 'icon-footer-fb.svg'
      state.footerIGIcon = 'icon-footer-ig.svg'
      state.footerTelIcon = 'icon-footer-tel.svg'
    }
    if (mode === 'dark') {
      state.logoSrc = 'logo-dark.svg'
      state.navSearchIcon = 'icon-nav-search-dark.svg'
      state.navChartIcon = 'icon-nav-chart-dark.svg'
      state.navModeIcon = 'icon-nav-to-light-mode.svg'
      state.navMenuIcon = 'icon-nav-menu-dark.svg'
      state.footerFbIcon = 'icon-footer-fb-dark.svg'
      state.footerIGIcon = 'icon-footer-ig-dark.svg'
      state.footerTelIcon = 'icon-footer-tel-dark.svg'
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
