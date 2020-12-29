import Vue from 'vue'
import provider from '@/services/api/provider'

export const prepareServices = store => {
  // eslint-disable-next-line no-param-reassign
  store.$services = provider

  Vue.mixin({
    beforeCreate() {
      this.$services = store.$services
    }
  })
}
