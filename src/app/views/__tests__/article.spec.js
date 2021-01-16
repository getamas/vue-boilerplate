import Article from '@/app/views/article.vue'

describe('@views/article', () => {
  it('is a valid view', () => {
    expect(Article).toBeAViewComponent()
  })
})
