import Vue from 'vue'
import Vuetify from 'vuetify'

import MainLayout from '@/app/layouts/main.vue'

Vue.use(Vuetify)

describe('@layouts/main.vue', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent
      },
      vuetify: new Vuetify()
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
