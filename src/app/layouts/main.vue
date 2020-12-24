<script>
import NavBar from '@/app/components/nav-bar.vue'
import VFragment from '@/app/components/global/VFragment'

export default {
  components: { NavBar, VFragment }
}
</script>

<template>
  <v-fragment>
    <NavBar />
    <main>
      <div :class="$style.container">
        <slot />
      </div>
    </main>
  </v-fragment>
</template>

<style lang="scss" module>
.container {
  min-width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
