<template>
  <section class="skills" >
    <div class="parallax-container">
      <div class="parallax">
        <video
            src="../../assets/video/background.mp4"
            autoplay
            muted
            loop
            class="video__media"
            ref="parallax"
        >
        </video>

      </div>
      <div class="skills__description" v-scroll="handleScroll" ref="description">
        <h2 class="title my-fadein" ref="title" v-resize-text="{ratio:1.3, minFontSize: '25px', maxFontSize: '43px', delay: 200}">Skills</h2>
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
          <div class="row">
            <div class="col s12 m6">
              <div class="card skills__card relative">
                <div class="card-content skills__card-content white-text">
                  <MyProgress
                      v-for="count in counters"
                      :key="count.id"
                      :count="count"
                      :v-bind="count.percent"
                  />
                  <div class="skills__card-description">
                    <div class="skills__card-wrapper">
                      <div class="skills__education-icon skills__card-icon"><i class="material-icons grey-text lighten-4">local_library</i></div>
                      <h2 class="skills__card-title subtitle" v-resize-text="{ratio:1.3, minFontSize: '12px', maxFontSize: '18px', delay: 200}">
                        see my certificates
                      </h2>
                      <router-link to="/certificates">
                        <div class="skills__card-btn btn-large btn-floating waves-effect white-text">
                          <i class="material-icons">play_arrow</i>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card skills__education">
                <div class="card-content skills__education-card">
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

export default {
  name: 'my-skills',
  components: {
    MyProgress,
    MyCarousel,
    MyEducation
  },
  data: () => ({
    show: false
  }),
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > (window.innerHeight / 5)){
        el.setAttribute(
            'style',
            'animation-duration: var(--animate-duration); ' +
            'animation-fill-mode: both; animation-delay: calc(1s * 3); ' +
            'animation-delay: calc(var(--animate-delay) * 3);' +
            'animation: secFadeIn 1s forwards; animation-delay: 3.2s;' +
            'animation: mainFadeIn 3.5s forwards;' +
            'animation-delay: 0.5s;'
        )
        this.visibleBlock(el)
      }
      return window.scrollY > window.innerHeight / 5
    },

    visibleBlock(el) {
      setTimeout(() => {
        el.setAttribute('style', 'opacity: 1;')
      }, 1000)
    }
  },
  computed: {
    ...mapState({
      counters: state => state.CountersModule.counters,
      educations: state => state.educationModule.educations
    })
  },
}
</script>

<style scoped lang="scss">
.skills {
  padding-bottom: 60px;
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
    &-description {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    &-wrapper {
      display: flex;
      align-self: center;
    }
    &-icon {
      padding-top: 16px;
    }
    &-btn {
      background: var(--color-background-light);
      left: 30px;
    }
  }
  &__education {
    background: var(--color-grey-light);
    &-title {
      color: var(--color-text);
    }
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
      color: var(--color-text);
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