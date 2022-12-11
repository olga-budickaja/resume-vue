<template>
  <section class="about animate__animated animate__bounceIn">
    <MyHobby />
  </section>
</template>

<script>
import MyHobby from "@/components/hobby/MyHobby";
export default {
  name: 'hobby-page',
  components: {MyHobby}
}
</script>

<style scoped>
.about {
  padding: 130px 0;
}
</style>