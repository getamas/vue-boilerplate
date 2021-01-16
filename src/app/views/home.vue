<script>
import { FETCH_ARTICLES } from '@/store/actions'

import Layout from '@/app/layouts/main.vue'
import Article from '@/app/components/article.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'The Home page' }]
  },
  components: {
    Layout,
    Article
  },
  computed: {
    articles() {
      return this.$store.getters['articles/getAllArticles']
    }
  },
  mounted() {
    this.$store.dispatch(`articles/${FETCH_ARTICLES}`)
  }
}
</script>

<template>
  <Layout>
    <v-row>
      <Article v-for="(article, index) in articles" :key="index" :article="article" />
    </v-row>
  </Layout>
</template>
