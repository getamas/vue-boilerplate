<script>
import Layout from '@/app/layouts/main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'The Home page' }]
  },
  components: {
    Layout
  }
}
</script>

<template>
  <Layout>
    <v-row>
      <v-col>
        <h1>Home Page</h1>
      </v-col>
    </v-row>
  </Layout>
</template>
