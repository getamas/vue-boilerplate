import { COMMENTS_MAX_TITLE_LENGTH, COMMENTS_MAX_AUTHOR_LENGTH, COMMENTS_MAX_CONTENT_LENGTH } from './comment.types'

export class Comment {
  constructor(data) {
    if (data.id) {
      this.id = data.id
    }

    this.title = data.title
    this.content = data.content
    this.author = data.author

    if (data.createdAt) {
      this.createdAt = data.createdAt
    }
  }

  validate() {
    if (!this.title || this.title.length > COMMENTS_MAX_TITLE_LENGTH) {
      return false
    }
    if (!this.author || this.author.length > COMMENTS_MAX_AUTHOR_LENGTH) {
      return false
    }
    if (!this.content || this.content.length > COMMENTS_MAX_CONTENT_LENGTH) {
      return false
    }
    return true
  }
}
