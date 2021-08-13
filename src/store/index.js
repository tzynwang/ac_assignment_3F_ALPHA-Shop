import Vuex from 'vuex'
import Vue from 'vue'
import mode from './modules/mode'
import purchase from './modules/purchase'

// Load Vuex
Vue.use(Vuex)

// Create store
const store = new Vuex.Store({
  modules: {
    mode,
    purchase
  }
})

export default store
