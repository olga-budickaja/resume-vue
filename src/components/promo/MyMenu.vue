<template>
  <div class="fixed-action-btn myMenu click-to-toggle" ref="fixed-action-btn" @click="showMenu">
    <a class="animate__animated animate__bounceIn btn-floating myMenu__button btn-large waves-effect waves-light pink">
      <i class="material-icons">menu</i>
    </a>
    <ul class="myMenu__list">
      <li class="myMenu__item white-text relative pointer">
        <router-link to="/" class="btn-floating myMenu__item-btn waves-effect yellow darken-1 white-text">
          <i class="material-icons">home</i>
        </router-link>
        <div class="chip white-text blue-grey darken-4 myMenu__item-chip">Home</div>
      </li>
      <li class="myMenu__item white-text relative pointer">
        <router-link to="/skills" class="btn-floating myMenu__item-btn waves-effect yellow darken-1 white-text">
          <i class="material-icons">star</i>
        </router-link>
        <div class="chip white-text blue-grey darken-4 myMenu__item-chip">Skills</div>
      </li>
      <li class="myMenu__item white-text relative pointer">
        <router-link to="/certificates" class="btn-floating myMenu__item-btn waves-effect yellow darken-1 white-text">
          <i class="material-icons">school</i>
        </router-link>
        <div class="chip white-text blue-grey darken-4 myMenu__item-chip">Certificates</div>
      </li>
      <li class="myMenu__item white-text relative pointer">
        <router-link to="/works" class="btn-floating myMenu__item-btn waves-effect yellow darken-1 white-text">
          <i class="material-icons">streetview</i>
        </router-link>
        <div class="chip white-text blue-grey darken-4 myMenu__item-chip">My•work</div>
      </li>
      <li class="myMenu__item white-text relative pointer">
        <router-link to="/about" class="btn-floating myMenu__item-btn waves-effect yellow darken-1 white-text">
          <i class="material-icons">tag_faces</i>
        </router-link>
        <div class="chip white-text blue-grey darken-4 myMenu__item-chip">About•mi</div>
      </li>
      <li class="myMenu__item white-text relative pointer">
        <router-link to="/contacts" class="btn-floating myMenu__item-btn waves-effect yellow darken-1 white-text">
          <i class="material-icons">sms</i>
        </router-link>
        <div class="chip white-text blue-grey darken-4 myMenu__item-chip">Contacts</div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data: () => ({
    active: false,
    direction: '',
    hoverEnabled: false,
  }),
  methods: {
    showMenu() {
      this.direction = 'bottom'
      this.hoverEnabled = false
    }
  },
  computed: {

  },
  mounted() {
    M.FloatingActionButton.init(this.$refs["fixed-action-btn"], {
      direction: '',
      hoverEnabled: false
    });
  }
}
</script>

<style scoped lang="scss">
.myMenu {
  top: -17px;
  &__button {
    animation-delay: 3.5s;
  }
  &__list {
    height: 100vh;
    top: 40%;
  }
  &__item {
    &-chip {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }
    &:hover &-chip {
      display: block;
    }
    &-btn {
      position: relative;
    }
  }

}
</style>