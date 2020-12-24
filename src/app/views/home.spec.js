import Vue from 'vue'
import Vuetify from 'vuetify'

import Home from './home.vue'

Vue.use(Vuetify)

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const { element } = shallowMount(Home, {
      vuetify: new Vuetify()
    })
    expect(element.textContent).toContain('Home Page')
  })
})
