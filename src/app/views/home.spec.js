import Vue from 'vue'
import Vuetify from 'vuetify'

import Home from './home.vue'

Vue.use(Vuetify)

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })
})
