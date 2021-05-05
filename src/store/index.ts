import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new Store instance.
// 创建一个新的 Store 实例。
const store = createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})

export default store
