import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    parsedText: ''
  },
  
  mutations: {
    incrementText(state, text) {
      state.parsedText = text
    }
  }
})

export default store 