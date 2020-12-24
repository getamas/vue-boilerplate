<script>
import VFragment from '@/app/components/global/VFragment'

export default {
  components: { VFragment }
}
</script>

<template>
  <v-fragment>
    <v-app-bar app color="primary" dark />
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-fragment>
</template>
