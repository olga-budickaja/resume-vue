<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

import MainLayout from "@/layouts/MainLayout";

export default {
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return 'main-layout'
    }
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/css/index.css';
@import "assets/css/my-root.css";
@import "assets/css/my-animation.css";
</style>
