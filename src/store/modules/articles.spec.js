import * as articlesModule from './articles'

describe('@store/modules/articles', () => {
  it('exports a valid Vuex module', () => {
    expect(articlesModule).toBeAVuexModule()
  })
})
