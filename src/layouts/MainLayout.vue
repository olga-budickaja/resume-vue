<template>
  <section class="main">
    <header class="main__header">
      <nav class="main__nav navbar-fixed">
        <router-link to="/">
          <div class="main__logo relative">
            <div class="first animate__bounceIn animate__animated">B</div>
            <div class="second animate__bounceIn animate__animated">o</div>
            <div class="third animate__bounceIn animate__animated">a</div>
            <div class="fourth animate__bounceIn animate__animated">.</div>
          </div>
        </router-link>
        <MyMenu/>
      </nav>
    </header>
    <router-view />
  </section>
</template>

<script>
import MyMenu from "@/components/promo/MyMenu";

export default {
  name: 'main-layout',
  components: {MyMenu}
}
</script>

<style scoped lang="scss">
.main {
  height: 100vh;
  &__nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    background: var(--color-background);
  }
  &__logo {
    display: flex;
    font-family: 'Indie Flower', cursive;
    font-size: 26px;
    padding-left: 20px;
    div {
      color: white;
    }
  }
}
.first {
  animation-delay: 5.3s;
}
.second {
  animation-delay: 5.4s;
}
.third {
  animation-delay: 5.5s;
}
.fourth {
  animation-delay: 5.6s;
}
</style>