/**
 * Created by lonelydawn on 2018/9/7$.
 */

import News from '@/data/News'
import List from '@/data/List'

export default {
  getNews (cb, { id }) {
    setTimeout(() => {
      let profile = List.data.find(item => item.id === Number(id))
      let detail = News.data.find(item => item.id === Number(id))
      cb(Object.assign(profile, detail))
    }, 10)
  }
}
