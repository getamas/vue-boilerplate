<script>
import { FETCH_ARTICLES, CREATE_COMMENT } from '@/store/actions'
import { COMMENTS_MAX_TITLE_LENGTH, COMMENTS_MAX_AUTHOR_LENGTH, COMMENTS_MAX_CONTENT_LENGTH } from '@/models'

import Layout from '@/app/layouts/main.vue'

export default {
  page: {
    title: 'Article',
    meta: [{ name: 'description', content: 'The Article page.' }]
  },
  components: { Layout },
  data() {
    return {
      isValid: false,
      newComment: {
        author: '',
        title: '',
        content: ''
      },
      COMMENTS_MAX_TITLE_LENGTH,
      COMMENTS_MAX_AUTHOR_LENGTH,
      COMMENTS_MAX_CONTENT_LENGTH
    }
  },
  computed: {
    article() {
      return this.$store.getters['articles/getOneArticleById'](this.$route.params.id)
    },
    requiredRule() {
      return v => !!v || 'Field is required'
    },
    authorRules() {
      return v => v.length <= COMMENTS_MAX_AUTHOR_LENGTH || 'Author name must be less than 10 characters'
    },
    titleRules() {
      return v => v.length <= COMMENTS_MAX_TITLE_LENGTH || 'Title must be less than 10 characters'
    },
    contentRules() {
      return v => v.length <= COMMENTS_MAX_CONTENT_LENGTH || 'Content must be less than 10 characters'
    }
  },
  mounted() {
    this.$store.dispatch(`articles/${FETCH_ARTICLES}`)
  },
  methods: {
    getDate(timestamp) {
      return timestamp.substring(0, timestamp.indexOf('T'))
    },
    onSubmit(event) {
      event.preventDefault()

      this.$store.dispatch(`articles/${CREATE_COMMENT}`, {
        articleId: this.article.id,
        comment: {
          title: this.newComment.title.trim(),
          author: this.newComment.author.trim(),
          content: this.newComment.content.trim()
        }
      })
    }
  }
}
</script>

<template>
  <Layout>
    <v-row>
      <v-col v-if="article" cols="12">
        <v-card class="mb-2">
          <v-img class="white--text align-end" height="500px" :src="article.picture">
            <v-card-title>{{ article.title }}</v-card-title>
          </v-img>
          <v-card-text>
            <p>{{ article.content }}</p>
            <p>Created At: {{ getDate(article.createdAt) }}</p>
            <p>Tags: {{ article.tags.join(', ') }}</p>
          </v-card-text>
        </v-card>
        <v-card class="mb-2">
          <v-card-title>Comments</v-card-title>
          <v-card-text>
            <v-list three-line>
              <v-list-item-group color="primary">
                <v-list-item v-for="(comment, index) in article.comments" :key="index">
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ comment.title }}
                      <small>
                        <i>by {{ comment.author }}</i>
                      </small>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>New Comment</v-card-title>
          <v-card-text>
            <v-form v-model="isValid" @submit="onSubmit">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newComment.author"
                    :rules="[requiredRule, authorRules]"
                    :counter="COMMENTS_MAX_AUTHOR_LENGTH"
                    label="Author name"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newComment.title"
                    :rules="[requiredRule, titleRules]"
                    :counter="COMMENTS_MAX_TITLE_LENGTH"
                    label="Title"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newComment.content"
                    :rules="[requiredRule, contentRules]"
                    :counter="COMMENTS_MAX_CONTENT_LENGTH"
                    label="Content"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn type="submit" color="primary" :disabled="!isValid">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
