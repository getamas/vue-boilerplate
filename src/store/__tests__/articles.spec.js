import * as articlesModule from '@/store/modules/articles'

describe('@store/modules/articles', () => {
  it('exports a valid Vuex module', () => {
    expect(articlesModule).toBeAVuexModule()
  })
})
