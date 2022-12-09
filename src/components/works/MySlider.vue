<template>
  <div class="slider" ref="slider">
    <ul class="slides">
      <SliderItem
          v-for="slide in slides"
          :key="slide.id"
          :slide="slide"
      />
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import SliderItem from "@/components/works/SliderItem";

export default {
  components: {SliderItem},
  data: () => ({

  }),
  computed: {
    ...mapState({
      slides: state => state.sliderModule.slides
    }),
  },
  mounted() {
    this.slider = M.Slider.init(this.$refs.slider)
  },
  destroyed() {
    if (this.slider && this.slider.destroy) {
      this.slider.destroy()
    }
  }
}
</script>

<style scoped>

</style>