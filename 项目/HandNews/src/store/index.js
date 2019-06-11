/**
 * Created by lonelydawn on 2018/9/7$.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Category from './modules/Category'
import List from './modules/List'
import News from './modules/News'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Category,
    List,
    News
  }
})
