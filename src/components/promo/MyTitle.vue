<template>
  <div class="wrapper">
    <div class="promo__title">
      <span class="promo__block"></span>
      <h1
          class="promo__h1 my-fadein"
          v-resize-text="{ratio:1.3, minFontSize: '25px', maxFontSize: '43px', delay: 200}"
      >
        Olga Budytska
        <span></span>
      </h1>
    </div>
    <div class="promo__subtitle">
      <div class="promo__block"></div>
      <div
          v-resize-text="{ratio:1.3, minFontSize: '10px', maxFontSize: '18px', delay: 200}"
          class="promo__h2"
      >
        Frontend Developer <br/> from Ukraine
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.promo {
  &__h1 {
    font-weight: 800;
    color: white;
    margin: 0;
    opacity: 0;
    display: flex;
    align-items: baseline;
    position: relative;
    text-align: left;
    span {
      width:0;
      height: 0;
      border-radius: 50%;
      background: var(--color-yelow);
      animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
      animation-delay: 2s;
      margin-left: 5px;
      margin-top: -50px;
      position: absolute;
      bottom: -40px;
      right: -12px;
    }
  }
  &__subtitle {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    text-align: left;
  }
  &__h2 {
    color: var(--color-subtitle);
    margin-top: 25px;
    text-transform: uppercase;
    animation: secFadeIn 2s forwards;
    animation-delay: 3.2s;
    opacity: 0;
  }
  &__block {
    width: 0;
    height: inherit;
    background: var(--color-pink);
    position: absolute;
    animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 2s;
    display: flex;
  }
}


</style>