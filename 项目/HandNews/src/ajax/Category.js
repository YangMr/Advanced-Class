/**
 * Created by lonelydawn on 2018/9/7$.
 */

import Category from '@/data/Category'

export default {
  getCategories (cb) {
    setTimeout(() => {
      cb(Category.data)
    }, 10)
  }
}
