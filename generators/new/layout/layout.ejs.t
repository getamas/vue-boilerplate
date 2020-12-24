---
to: "src/app/layouts/<%= h.changeCase.kebab(name) %>.vue"
---
<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  min-width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
