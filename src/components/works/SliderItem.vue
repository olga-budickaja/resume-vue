<template>
  <li>
    <img :src="require(`../../assets/img/works/${slide.src}.jpg`)" :alt="$emit('alt', slide.alt)">
  </li>
</template>

<script>
export default {
  props: {
    slide: {
      type: Object,
      required: true
    },
    data: () => ({
      src: '',
      alt: ''
    }),
  },
}
</script>

<style scoped>

</style>