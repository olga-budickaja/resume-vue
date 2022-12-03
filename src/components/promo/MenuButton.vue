<template>
  <a class="animate__animated animate__bounceIn btn-floating menu__button btn-large waves-effect waves-light pink"><i class="material-icons">menu</i></a>
</template>

<script>
export default {
  data: () => ({
    active: false,
  }),
}
</script>

<style scoped lang="scss">
.menu__button {
  animation-delay: 3.5s;
  //animation: bounceOut;
  //animation-duration: 2s;
}
</style>