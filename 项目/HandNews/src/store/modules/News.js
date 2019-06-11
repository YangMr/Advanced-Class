/**
 * Created by lonelydawn on 2018/9/7$.
 */

import ajax from '@/ajax/News'

const state = {
  news: []
}

const getters = {
  news: state => state.news
}

const mutations = {
  setNews (state, news) {
    state.news = news
  }
}

const actions = {
  getNews ({ commit }, payload) {
    ajax.getNews(news => {
      commit('setNews', news)
    }, payload)
  }
}

export default {
  namespaced: true, // 声明为独立命名空间
  state,
  getters,
  mutations,
  actions
}
