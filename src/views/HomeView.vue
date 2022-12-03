<template>

  <section class="promo">
    <div class="slide"></div>
    <div class="promo__wrapper">
      <div class="container relative">
          <div class="promo__image animate__animated animate__bounceIn">
            <img
                src="../assets/img/olga-budytska.jpg"
                alt="My name Olga Budytska. I`m Frontend Developer"
            >
          </div>
        <div class="promo__description">
          <MyTitle/>
        </div>

      </div>
      <!--    <aside class="side-panel">-->
      <!--      <div class="side-panel__link">-->
      <!--        <i class="tiny material-icons">insert_emoticon</i>-->
      <!--      </div>-->
      <!--      <div class="side-panel__link">-->
      <!--        <i class="tiny material-icons">account_box</i>-->
      <!--      </div>-->
      <!--      <div class="side-panel__link">-->
      <!--        <i class="tiny material-icons">camera</i>-->
      <!--      </div>-->
      <!--      <div class="side-panel__divider"></div>-->
      <!--      <div class="side-panel__text"><span>Socials</span></div>-->

      <!--      <div class="promo__btns">-->
      <!--        <a class="waves-effect waves-light btn light-blue darken-4"><i class="material-icons right white-text">file_download</i>Save resume</a>-->
      <!--      </div>-->
      <!--    </aside>-->
    </div>

  </section>
  <div class="box"></div>

</template>

<script>
import MyTitle from "@/components/promo/MyTitle";

export default {
  components: {
    MyTitle
  },
  data: () => ({

  }),
  methods: {
    colorBackground() {

    }
  }
}
</script>

<style scoped lang="scss">
.promo {
  background: var(--color-background);
  height: 100vh;
  &__wrapper {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    z-index: 3;
  }
  &__description {
    padding: 40px;
    background: var(--color-background);
    margin: 0 auto;
    z-index: 5;
  }
  &__btns {
    text-align: center;
    margin-top: 20px;
  }
  &__image {
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    animation-delay: 4s;
    opacity: 0;
  }
  .container {
    height: calc(100vh - 20px);
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 5;
  }
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  white-space: nowrap;
  animation: anim-color 2.4s ease-in-out 0.8s normal none running,
  opacitySlide 2.4s ease-in-out 0.8s normal none running;
  z-index: 1;
}
.slide {
  position: relative;
  top: 70px;
  height: calc(100vh - 70px);
  width: 0;
  left: 0;
  z-index: 1;
  animation: animSlide 2.4s ease-in-out 0.8s normal none running;
  background: var(--color-background-light);
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 230px;
  right: 40px;
  height: 340px;
  color: #fff;
  &__link {
    transform: rotate(90deg);
    //svg {
    //  fill: rgba(255, 255, 255, 1);
    //  &:hover {
    //    fill: rgba(255, 255, 255, .7);
    //  }
    //}
  }
  &__divider {
    width: 2px;
    height: 70px;
    background-color: #000;
  }
  &__text {
    width: 25px;
    height: 150px;
    span {
      display: block;
      transform: rotate(90deg) translate(-30%, -260%);
      width: 0;
      margin-left: -43px;
      font-weight: 600;
    }
  }
  i {
    width: 20px;
    height: 20px;
  }
}
</style>