<template>
  <section class="hobby">
    <MainTitle>My hobby</MainTitle>
    <div class="row hobby__wrapper">
      <div class="container">
        <div class="col s12 m6 hobby__block">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="../../assets/img/olga-budytska-1.jpg" alt="My photo">
            </div>
            <div class="card-reveal">
              <div class="video activator">
                <video
                    src="../../assets/video/travel.mp4"
                    autoplay
                    muted
                    loop
                    class="video__media activator"
                    ref="parallax"
                >
                </video>
              </div>
              <span class="card-title bold grey-text text-darken-4">My passion for travel<i class="material-icons right">close</i></span>
              <p class="bold">I love mountains very much. I love travel and nature. Whenever possible, my friends and I travel and explore new places. After all, there are so many amazing things in the world :)</p>
            </div>
          </div>

        </div>
        <div class="col s12 m6 hobby__block">
          <div class="row">
            <div class="col m6 s6 hobby__image">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="../../assets/img/hobby/puppy-3.jpg" alt="Puppy">
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Helping animals<i class="material-icons right">close</i></span>
                  <p>It so happened that I once helped these babies, whose mothers died, to find loving families. I got to know the volunteers. But I try to help our smaller brothers ♥</p>
                </div>
              </div>
            </div>
            <div class="col m6 s6 hobby__image">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="../../assets/img/hobby/sew-1-1.jpg" alt="sew">
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">I love to sew<i class="material-icons right">close</i></span>
                  <p>I sew everything except shoes. Bags, covers for upholstered furniture, all kinds of clothes, unloading and armor for our defenders, even covers for boats and under skewers for barbecue) But my passion is couture clothes for animals :)</p>
                </div>
              </div>
            </div>
            <div class="col m6 s6 hobby__image">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="../../assets/img/hobby/sew-4-1.jpg" alt="sew">
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">A small contribution to victory<i class="material-icons right">close</i></span>
                  <p>Since the attack on my country Ukraine by aggressive russia (this is not a mistake...I will not capitalize such an evil country), I have been sewing clothes for the military since 2014...</p>
                </div>
              </div>
            </div>
            <div class="col m6 s6 hobby__image">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="../../assets/img/hobby/sport-1.jpg" alt="sport">
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">In a healthy lifestyle<i class="material-icons right">close</i></span>
                  <p>I do non-professional sports for myself and health. I also try to eat right. It doesn't always work for me, to be honest :)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import MainTitle from "@/UI/MainTitle";
export default {
  components: {MainTitle}
}
</script>

<style scoped lang="scss">
.hobby {
  background: var(--color-background);
  padding: 0 0 100px 0;
  &__block {
    margin-top: 80px;
  }
}
.card-blue {
  color: var(--color-background)
}
.bold {
  font-weight: 600;
}
.video {
  &__media {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: -1;
  }
}
.card {
  position: relative;
  i {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>