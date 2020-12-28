import ArticlesService from './api/articles'

export const provider = () => ({
  articles: ArticlesService
})
