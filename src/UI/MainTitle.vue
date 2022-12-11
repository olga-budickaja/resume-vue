<template>
  <h2 class="main-title title my-fadein" v-resize-text="{ratio:1.3, minFontSize: '25px', maxFontSize: '43px', delay: 200}"><slot/></h2>
</template>

<script>
export default {
  name: 'main-title'
}
</script>

<style scoped>
.main-title {
  text-align: center;
}
</style>