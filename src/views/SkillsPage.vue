<template>
  <section class="skills">
    <div class="parallax-container">
      <div class="parallax">
        <video
            src="../assets/video/background.mp4"
            autoplay
            muted
            loop
            class="video__media"
        >
        </video>

      </div>
      <div class="skills__description my-fadein">
        <MainTitle>Skills</MainTitle>
        <div class="subtitle my-fadein" ref="subtitle" v-resize-text="{ratio:1.3, minFontSize: '10px', maxFontSize: '18px', delay: 200}">
          I work to improve my skills every day.
        </div>
        <div class="skills__icons my-fadein" ref="icons">
          <MyCarousel />
        </div>
      </div>
    </div>
    <div class="skills-counter">
      <div class="skills__table">
        <div class="row flex">
          <div class="col s12 m6">
            <div class="card skills__card">
              <div class="card-content skills__card-content white-text">
                <MyProgress
                    v-for="count in counters"
                    :key="count.id"
                    :count="count"
                />
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card skills__education">
              <div class="card-content">
                <MyEducation
                    v-for="ed in educations"
                    :key="ed.id"
                    :ed="ed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyCarousel from "@/UI/MyCarousel";
import {mapState} from "vuex";
import MyProgress from "@/UI/MyProgress";
import MyEducation from "@/UI/MyEducation";
import MainTitle from "@/UI/MainTitle";

export default {
  name: 'skills-page',
  components: {
    MainTitle,
    MyEducation,
    MyCarousel,
    MyProgress
  },
  computed: {
    ...mapState({
      counters: state => state.CountersModule.counters,
      educations: state => state.educationModule.educations
    })
  }
}
</script>

<style scoped lang="scss">
.skills {
  padding-top: 50px;
  &__description {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    opacity: 0;
  }
  &__title, &__subtitle, &__icons {
    opacity: 0;
  }
  &__card {
    background: var(--color-background);
  }
  &__table {
    .row {
      flex-wrap: wrap;
    }
    &-header {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
    }
  }
}
.parallax {
  position: fixed;

}
.video {
  &__media {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
}
@media (max-width: 768px) {
  .skills-counter {
    margin-top: -200px;
  }
}
</style>