import { Article } from '@/models'
import { FETCH_ARTICLES, CREATE_COMMENT } from '@/store/actions'

export const state = {
  articles: []
}

export const getters = {
  getAllArticles(state) {
    return state.articles.map(data => new Article(data))
  },
  getOneArticleById: state => id => {
    const data = state.articles.find(article => article.id === id)

    if (!data) {
      return undefined
    }

    return new Article(data)
  }
}

export const mutations = {
  [FETCH_ARTICLES](state, data) {
    data.map(article => state.articles.push(article))
  },
  [CREATE_COMMENT](state, data) {
    const article = state.articles.find(article => article.id === data.article.id)

    if (!article) {
      state.articles.push(data.article)
      return
    }

    article.comments.push(data.comment)
  }
}

export const actions = {
  async [FETCH_ARTICLES]({ commit }) {
    const data = await this.$services.articles.getAll()
    commit(FETCH_ARTICLES, data)
  },
  async [CREATE_COMMENT]({ commit }, { articleId, comment }) {
    const article = await this.$services.articles.createComment(articleId, comment)
    commit(CREATE_COMMENT, { article, comment })
  }
}
