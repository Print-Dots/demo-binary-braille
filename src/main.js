import Vue from 'vue'
import App from './App.vue'
import Components from './components'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  render: h => h(App),
}).$mount('#app')
