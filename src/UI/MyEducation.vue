<template>
  <MainSubtitle>{{ ed.title }}</MainSubtitle>
  <div
      v-for="item in ed.description"
      :key="item.id"
      class="skills__education-description"
  >
    <div class="skills__education-icon"><i class="material-icons">{{ ed.icon }}</i></div>
    <div v-if="!item.subtitle" class="skills__education-text">{{ item.text }}</div>
    <div v-else class="skills__education-text"><span>{{ item.subtitle }}</span><br/>{{ item.text }}</div>
  </div>
</template>

<script>
import MainSubtitle from "@/UI/MainSubtitle";
export default {
  components: {MainSubtitle},
  props: {
    ed: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.skills {
  &__education {
    background: var(--color-grey-light);
    margin-bottom: 100px;
    &-description {
      display: flex;
      align-self: center;
      margin: 20px 0;
    }
    &-text {
      span {
        font-weight: 600;
      }
    }
    &-icon {
      margin-right: 20px;
      color: var(--color-text)
    }
  }
}
</style>