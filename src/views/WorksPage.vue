<template>
  <section class="work top70">
    <MainTitle>My works</MainTitle>
    <div class="work__table">
      <div class="row">
        <div class="col s12 m6">
          <div class="card work__git-card">
            <div class="card-content work__git-content white-text">
              <div class="work__git-title relative">
                <h2 class="title work__git-h2 relative my-fadein" ref="title" v-resize-text="{ratio:1.3, minFontSize: '43px', maxFontSize: '43px', delay: 200}">
                  GitHub
                  <span></span>
                </h2>

                <div class="work__git-icon my-fadein">
                  <icon-base width="56" height="56" icon-name="telegram-icon" fill="#ffffff">
                    <GitHubIcon :fill="iconColor"/>
                  </icon-base>
                </div>

              </div>
              <div>
                <div class="work__git-subtitle my-fadein subtitle" v-resize-text="{ratio:1.3, minFontSize: '10px', maxFontSize: '18px', delay: 200}">
                  see my works on GitHub
                </div>
              </div>
              <a href="https://github.com/olga-budickaja" class="work__git-btn btn-large btn-floating waves-effect white-text">
                <i class="material-icons">play_arrow</i>
              </a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card slider__card">
            <div class="work__card-content white-text">
              <div class="slider">
                <MySlider/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GitHubIcon from "@/components/icons/GitHubIcon";
import IconBase from "@/components/icons/IconBase";
import MySlider from "@/components/works/MySlider";
import MainTitle from "@/UI/MainTitle";

export default {
  name: 'works-page',
  components: {MainTitle, GitHubIcon, IconBase, MySlider},
  data: () => ({
    slides: null,
    iconColor: '#ffeb3b'
  }),
}
</script>

<style scoped lang="scss">
.work {
  background: var(--color-background);
  &__table {
    margin-top: 60px;
  }
  &__git {
    &-card {
      background: var(--color-background);
      text-align: center;
      padding-top: 70px;
    }
    &-title {
      display: inline-block;
    }
    &-h2 {
      opacity: 0;
      display: flex;
      align-items: baseline;
      position: relative;
      span {
        width:0;
        height: 0;
        border-radius: 50%;
        background: var(--color-pink);
        animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        margin-left: 5px;
        margin-top: -50px;
        position: absolute;
        bottom: -40px;
        right: -12px;
      }
    }
    &-subtitle {
      width: 100%;
      position: relative;
      margin: 0 auto;
      text-align: center;
      align-items: center;
      height: 30px;
      opacity: 0;
    }
    &-block {
      width: 0;
      height: inherit;
      background: var(--color-pink);
      position: absolute;
      display: flex;
    }
    &-icon {
      position: absolute;
      display: block;
      top: 50%;
      left: -38%;
      transform: translateY(-50%);
      opacity: 0;
    }
    &-btn {
      margin-top: 80px;
      background: var(--color-yelow-light);
    }
  }
}
</style>