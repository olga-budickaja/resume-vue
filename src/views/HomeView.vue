<template>

  <section class="promo">
    <div class="slide"></div>
    <div class="promo__wrapper">
      <div class="container relative">
          <div class="promo__image animate__animated animate__bounceIn">
            <img
                src="../assets/img/olga-budytska.jpg"
                alt="My name Olga Budytska. I`m Frontend Developer"
                class="relative"
              >
            <MyContacts class="contacts"/>
          </div>
        <div class="promo__description relative">
          <MyTitle/>
        </div>
      </div>
    </div>
  </section>
  <div class="box"></div>

</template>

<script>
import MyTitle from "@/components/promo/MyTitle";
import MyContacts from "@/UI/MyContacts";

export default {
  components: {
    MyContacts,
    MyTitle,
  },
  data: () => ({
    iconColor: '#ffffff'
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
  &__image {
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    animation-delay: 4s;
    opacity: 0;
  }
  &__btns {
    position: absolute;
    bottom: -80px;
    left: calc(50% - 75px);
    animation-delay: 5s;
  }
  &__link {
    margin-right: 10px;
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
.contacts {
  position: absolute;
  bottom: 20px;
  right: 15px;
}
</style>