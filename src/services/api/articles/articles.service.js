import { Article, Comment } from '@/models'
import httpClient from '../http-client'

async function getAll() {
  const { data } = await httpClient.get('posts')
  return data
}

async function getOneById(id) {
  const { data } = await httpClient.get('posts', id)
  return new Article(data)
}

async function createComment(articleId, commentData) {
  const article = await getOneById(articleId)

  const comment = new Comment(commentData)

  if (!comment.validate()) {
    throw new Error('Comment data is not valid')
  }

  await httpClient.post(`posts/${articleId}/comments`, comment)
  article.comments.push(comment)

  return article
}

export default { getAll, getOneById, createComment }
