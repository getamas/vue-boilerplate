<script>
export default {
  props: {
    article: { type: Object, required: true }
  }
}
</script>

<template>
  <v-col cols="6">
    <v-card class="mb-2">
      <v-img class="white--text align-end" height="200px" :src="article.picture">
        <v-card-title>{{ article.title }}</v-card-title>
      </v-img>
      <v-card-text>
        <p>{{ article.short }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text :to="`/articles/${article.id}`">
          Read more
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
