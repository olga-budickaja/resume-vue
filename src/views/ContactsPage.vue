<template>
  <section class="contacts">
    <MainTitle>My Contacts</MainTitle>
    <div class="container">
      <div class="row">
        <div class="col m6 s12">
          <div class="card contacts__face">
            <div class="col m7">
              <div class="card-image">
                <div class="contacts__image">
                  <img src="../assets/img/olga-budytska-2.jpg" alt="Olga Budytska" class="contacts__img">
                </div>
              </div>
            </div>
            <div class="col m5 contacts__text">
              <div
                  class="card-text grey-text darken-text-1
                  contacts__text-text my-fadein"
                  v-resize-text="{ratio:1.3, minFontSize: '23px', maxFontSize: '43px', delay: 200}"
              >
                Contact mi about work.
              </div>
            </div>
          </div>

        </div>
        <div class="col m6 s12">
          <div class="card contacts__card">
            <div class="card-content">
              <MainSubtitle>My contacts</MainSubtitle>
              <div class="contacts__card-description">
                <div class="contacts__card-icon">
                  <i class="material-icons">email</i>
                </div>
                <div class="contacts__card-text">
                  <span>My email: </span>
                  <a class="contacts__card-link pink-text" href="mailto:olgabudickaja@gmail.com">olgabudickaja@gmail.com</a>
                </div>
              </div>
              <div class="contacts__card-description">
                <div class="contacts__card-icon">
                  <i class="material-icons">phone</i>
                </div>
                <div class="contacts__card-text">
                  <span>My Kievstar: </span>
                  <a class="contacts__card-link pink-text" href="tel:+380961213826">+38-096-121-38-26</a>
                </div>
              </div>
              <div class="contacts__card-description">
                <div class="contacts__card-icon">
                  <i class="material-icons">phone</i>
                </div>
                <div class="contacts__card-text">
                  <span>My Vodafone: </span><a class="contacts__card-link pink-text" href="tel:+380990832316"> +38-099-083-23-16</a>
                </div>
              </div>
              <MyContacts class="contacts__card-social"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainTitle from "@/UI/MainTitle";
import MainSubtitle from "@/UI/MainSubtitle";
import IconBase from "@/components/icons/IconBase";
import TelegramIcon from "@/components/icons/TelegramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MyContacts from "@/UI/MyContacts";
export default {
  name: 'contacts-page',
  components: {
    MyContacts,
    LinkedinIcon,
    TelegramIcon,
    IconBase,
    MainSubtitle,
    MainTitle
  }
}
</script>

<style scoped lang="scss">
.contacts {
  padding: 130px 0;
  &__card {
    background: var(--color-grey-light);
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
    &-social {
      padding: 0;
      margin-top: 50px;
    }
  }
  &__face {
    background: var(--color-background);
  }
  &__image {
    max-width: 300px;
    max-height: 300px;
  }
  &__text {
    text-align: center;
    padding: 20% 0;
  }
}
.container {
  margin-top: 60px;
}
</style>