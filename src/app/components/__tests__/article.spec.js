import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import { mockArticles } from '@/models'
import Article from '@/app/components/article.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const article = mockArticles()[0]

describe('@components/article', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Article, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter(),
      propsData: { article }
    })
  })

  it('exports a valid component', () => {
    expect(Article).toBeAComponent()
  })

  it('should render article', () => {
    expect(wrapper.find('.v-card__title').text()).toBe(article.title)
    expect(wrapper.find('.v-card__text').text()).toBe(article.short)
    expect(wrapper.find('.v-btn').attributes('href')).toBe(`#/articles/${article.id}`)
  })
})
