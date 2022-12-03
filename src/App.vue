<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

import MainLayout from "@/layouts/MainLayout";
import VueResizeText from "vue3-resize-text";

export default {
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return 'main-layout'
    }
  },
  directives: {
    ResizeText: VueResizeText.ResizeText
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import "assets/css/my-animation.css";
@import "assets/css/my-root.css";
@import 'assets/css/index.css';
</style>
