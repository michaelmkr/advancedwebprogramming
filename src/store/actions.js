import * as types from './mutations-types'

export const setDemo = ({ commit }, payload) => {
  commit(types.DEMO, payload)
}
