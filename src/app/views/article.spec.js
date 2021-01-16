import Article from './article.vue'

describe('@views/article', () => {
  it('is a valid view', () => {
    expect(Article).toBeAViewComponent()
  })
})
