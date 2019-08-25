import pathify from 'vuex-pathify'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    
    strict: true,
    state: () => ({}),
    mutations: {},
    modules: {
      // store
    },
    plugins: [
      pathify.plugin
    ]
  })
}

export default createStore
