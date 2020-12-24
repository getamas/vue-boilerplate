import Vue from 'vue'

import App from '@/app/app.vue'
import router from '@/app/router'
import store from '@/store'
import vuetify from '@/app/plugins/vuetify'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
