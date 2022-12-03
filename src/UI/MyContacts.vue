<template>
  <div class="contacts">
    <a href="#" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn">
      <icon-base width="16" height="16" icon-name="github-icon" fill="#ffffff">
        <GitHubIcon :fill="iconColor"/>
      </icon-base>
    </a>
    <a href="#" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn">
      <icon-base width="16" height="16" icon-name="linkedin-icon" fill="#ffffff">
        <LinkedinIcon
            :fill="iconColor"
        />
      </icon-base>
    </a>
    <a href="#" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn">
      <icon-base width="16" height="16" icon-name="telegram-icon" fill="#ffffff">
        <TelegramIcon
            :fill="iconColor"
        />
      </icon-base>
    </a>
    <a href="#" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn">
      <icon-base width="16" height="16" icon-name="download-icon" fill="#ffffff">
        <DownloadIcon
            :fill="iconColor"
        />
      </icon-base>
    </a>
  </div>
</template>

<script>
import IconBase from "@/IconBase";
import GitHubIcon from "@/UI/GitHubIcon";
import LinkedinIcon from "@/UI/LinkedinIcon";
import TelegramIcon from "@/UI/TelegramIcon";
import DownloadIcon from "@/UI/DownloadIcon";

export default {
  name: 'my-contacts',
  components: {
    IconBase,
    GitHubIcon,
    LinkedinIcon,
    TelegramIcon,
    DownloadIcon
  },
  data: () => ({
    iconColor: '#ffffff'
  }),
}
</script>

<style scoped lang="scss">
.contacts {
  &__link {
    background: var(--color-background);
    margin: 0 10px;
    &:nth-child(4) {
      animation-delay: 4.5s;
      opacity: 0;
    }
    &:nth-child(3) {
      animation-delay: 4.7s;
      opacity: 0;
    }
    &:nth-child(2) {
      animation-delay: 4.9s;
      opacity: 0;
    }
    &:nth-child(1) {
      animation-delay: 5.1s;
      opacity: 0;
    }
  }
}
</style>