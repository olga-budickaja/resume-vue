<template>
  <section class="main">
      <nav class="main__nav">
        <router-link to="/">
          <div class="main__logo animate__bounceIn animate__animated">
            Boa.
          </div>
        </router-link>
        <MenuButton/>
      </nav>
      <router-view />
  </section>
</template>

<script>
import MenuButton from "@/components/promo/MenuButton";

export default {
  name: 'main-layout',
  components: {MenuButton}
}
</script>

<style scoped lang="scss">
.main {
  height: 100vh;
  &__nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    background: var(--color-background);
    height: 70px;
    box-shadow: none;
    border: none;
  }
  &__logo {
    font-family: 'Indie Flower', cursive;
    color: white;
    font-size: 26px;
    animation-delay: 3s;
  }
}
</style>