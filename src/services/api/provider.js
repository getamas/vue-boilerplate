import ArticlesService from './articles/articles.service'

export const provider = () => ({
  articles: ArticlesService
})
