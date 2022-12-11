<template>
  <h2 class="main-subtitle title" v-resize-text="{ratio:1.3, minFontSize: '18px', maxFontSize: '26px', delay: 200}">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'main-subtitle'
}
</script>

<style scoped>
.main-subtitle {
  color: var(--color-text);
}
</style>