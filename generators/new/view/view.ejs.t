---
to: "src/app/views/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const titleName = h.changeCase.title(name)
%><script>
import Layout from '@/app/layouts/main.vue'

export default {
  page: {
    title: '<%= titleName %>',
    meta: [{ name: 'description', content: 'The <%= titleName %> page.' }],
  },
  components: { Layout }
}
</script>

<template>
  <Layout>
    <h1><%= titleName %></h1>
  </Layout>
</template>
<%

if (useStyles) { %>
<style lang="scss" module>
</style>
<% } %>
