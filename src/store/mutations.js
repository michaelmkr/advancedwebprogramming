import * as types from './mutations-types'

export default {
  [types.DEMO] (state, payload) {
    state.demo = payload;
  }
}
