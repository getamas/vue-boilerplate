<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'home',
          title: 'Home'
        },
        {
          name: 'about',
          title: 'About'
        }
      ]
    }
  }
}
</script>

<template>
  <nav :class="$style.nav">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <RouterLink :to="{ name: route.name }" :exact-active-class="$style.active">
          {{ route.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" module>
.nav {
  ul {
    list-style-type: none;
  }
}

.active {
  font-weight: bold;
  text-decoration: none;
  color: #39a275;
  cursor: default;
}
</style>
