import { Comment } from './comment'

export const mockCommentsData = () => [
  {
    id: 1,
    title: 'title',
    content: 'content',
    author: 'author',
    createdAt: '2019-12-19T11:54:04 +05:00'
  },
  {
    id: 2,
    title: 'title2',
    content: 'content2',
    author: 'author',
    createdAt: '2019-12-07T11:54:04 +05:00'
  }
]

export const mockComments = (data = mockCommentsData()) => data.map(item => new Comment(item))
