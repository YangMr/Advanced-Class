/**
 * Created by lonelydawn on 2018/9/7.
 */

import ajax from '@/ajax/Category'

const state = {
  categories: []
}

const getters = {
  categories: state => state.categories
}

const mutations = {
  setCategories (state, categories) {
    state.categories = categories
  }
}

const actions = {
  getCategories ({ commit }) {
    ajax.getCategories(categories => {
      commit('setCategories', categories)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
