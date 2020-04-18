import Vue from 'vue'
import App from './App.vue'
import Components from './components'

Vue.config.productionTip = false

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  render: h => h(App),
}).$mount('#app')
