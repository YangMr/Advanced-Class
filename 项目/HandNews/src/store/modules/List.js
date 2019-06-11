/**
 * Created by lonelydawn on 2018/9/7$.
 */

import ajax from '@/ajax/List'

const state = {
  list: []
}

const getters = {
  list: state => state.list
}

const mutations = {
  setList (state, list) {
    state.list = list
  }
}

const actions = {
  getListByCategory ({ commit }, payload) {
    ajax.getListByCategory(list => {
      commit('setList', list)
    }, payload)
  },
  getListByKeyword ({ commit }, payload) {
    ajax.getListByKeyword(list => {
      commit('setList', list)
    }, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
