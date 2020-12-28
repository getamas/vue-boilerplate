import { mockComments, mockArticles, mockArticlesData } from '@/models'
import ArticlesService from './articles.service'
import httpClient from '../http-client'

jest.mock('../http-client')

describe('>>> Articles Service', () => {
  const service = ArticlesService

  describe('>> getMany', () => {
    it('should return all data', async () => {
      httpClient.get.mockResolvedValue({
        data: mockArticlesData()
      })

      const data = await service.getAll()
      expect(data).toEqual(mockArticlesData())
    })
  })

  describe('>> getOneById', () => {
    it('should return one article by provided id', async () => {
      const article = mockArticles()[1]

      httpClient.get.mockResolvedValue({
        data: article
      })

      const data = await service.getOneById(article.id)

      expect(data).toEqual(article)
    })
  })

  describe('>> createComment', () => {
    const data = mockComments()[0]

    it('should add new comment to provided article and return it', async () => {
      const article = mockArticles()[0]
      const commentsAmount = article.comments.length

      httpClient.get.mockResolvedValue({
        data: article
      })

      const newArticle = await service.createComment(article.id, data)
      expect(newArticle.id).toEqual(article.id)
      expect(newArticle.comments.length).toBe(commentsAmount + 1)
    })

    it('should throw an error if comment is not valid', async () => {
      const article = mockArticles()[0]
      const comment = {
        ...mockComments()[0],
        title: ''
      }

      httpClient.get.mockResolvedValue({
        data: article
      })

      try {
        await service.createComment(1, comment)
      } catch (error) {
        expect(error).toEqual(new Error('Comment data is not valid'))
      }
    })
  })
})
