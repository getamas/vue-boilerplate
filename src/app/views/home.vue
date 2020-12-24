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
    <h1>Home Page</h1>
    <img src="@/app/assets/images/logo.png" alt="Logo" />
  </Layout>
</template>
