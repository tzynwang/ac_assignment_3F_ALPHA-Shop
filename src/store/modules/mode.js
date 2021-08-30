const state = {
  mode: '',
  logoSrc: 'logo.svg',
  navSearchIcon: 'icon-nav-search.svg',
  navChartIcon: 'icon-nav-chart.svg',
  navModeIcon: 'icon-nav-to-dark-mode.svg',
  navMenuIcon: 'icon-nav-menu.svg',
  formCalendarIcon: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzgwODA4MCIgY2xhc3M9ImJpIGJpLWNhbGVuZGFyIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41ek0xIDR2MTBhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjRIMXoiLz4NCjwvc3ZnPg==")',
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
  getFormCalendarIcon: state => state.formCalendarIcon,
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
      state.formCalendarIcon = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzgwODA4MCIgY2xhc3M9ImJpIGJpLWNhbGVuZGFyIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41ek0xIDR2MTBhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjRIMXoiLz4NCjwvc3ZnPg==")'
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
      state.formCalendarIcon = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAuNCkiIGNsYXNzPSJiaSBiaS1jYWxlbmRhciIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgPHBhdGggZD0iTTMuNSAwYS41LjUgMCAwIDEgLjUuNVYxaDhWLjVhLjUuNSAwIDAgMSAxIDBWMWgxYTIgMiAwIDAgMSAyIDJ2MTFhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yaDFWLjVhLjUuNSAwIDAgMSAuNS0uNXpNMSA0djEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY0SDF6Ii8+DQo8L3N2Zz4=")'
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
