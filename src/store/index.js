import Vuex from 'vuex'
import Vue from 'vue'
import mode from './modules/mode'

// Load Vuex
Vue.use(Vuex)

// Create store
const store = new Vuex.Store({
  modules: {
    mode
  }
})

export default store
