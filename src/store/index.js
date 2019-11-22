import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    demo: 0
  },
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
