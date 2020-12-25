import { Comment } from '../comment'

export class Article {
  constructor(data) {
    if (data.id) {
      this.id = data.id
    }

    this.title = data.title
    this.content = data.content
    this.short = data.short
    this.createdAt = data.createdAt
    this.isActive = data.isActive
    this.picture = data.picture
    this.tags = data.tags

    if (data.createdAt) {
      this.createdAt = data.createdAt
    }

    this.comments = data.comments.map(comment => new Comment(comment))
  }
}
