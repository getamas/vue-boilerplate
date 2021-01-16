<script>
import VFragment from '@/app/components/global/VFragment'

export default {
  components: { VFragment }
}
</script>

<template>
  <v-fragment>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vue Boilerplate</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-fragment>
</template>
