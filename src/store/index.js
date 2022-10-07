import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 导入模块
import category from './modules/category'
import user from './modules/user'
import chart from './modules/chart'

export default createStore({
  modules: {
    category,
    user,
    chart,
  },
  //   注意：
  // ===> 默认是存储在localStorage中
  // ===> key是存储数据的键名
  // ===> paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如user.token
  // ===> 修改state后触发才可以看到本地存储数据的的变化。
  plugins: [createPersistedState({
    key: 'knowledge-graph',
    paths: ['user']
  })]
})
