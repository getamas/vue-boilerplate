<script>
import appConfig from '@/app/app.config.json'

export default {
  page: {
    titleTemplate(title) {
      const pageTitle = typeof title === 'function' ? title(this.$store) : title
      return pageTitle ? `${pageTitle} | ${appConfig.title}` : appConfig.title
    }
  }
}
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
</style>
