<template>
  <div class="contacts">
    <a href="https://github.com/olga-budickaja" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn" target="_blank">
      <icon-base width="16" height="16" icon-name="github-icon" fill="#ffffff">
        <GitHubIcon :fill="iconColor"/>
      </icon-base>
    </a>
    <a href="https://www.linkedin.com/in/olga-budickaja-a11871246/" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn" target="_blank">
      <icon-base width="16" height="16" icon-name="linkedin-icon" fill="#ffffff">
        <LinkedinIcon
            :fill="iconColor"
        />
      </icon-base>
    </a>
    <a href="https://telegram.me/olga27056" class="contacts__link waves-light btn btn-floating animate__animated animate__bounceIn" target="_blank">
      <icon-base width="16" height="16" icon-name="telegram-icon" fill="#ffffff">
        <TelegramIcon
            :fill="iconColor"
        />
      </icon-base>
    </a>
    <a href="#modal1" class="modal-trigger contacts__link waves-light btn btn-floating animate__animated animate__bounceIn">
      <icon-base width="16" height="16" icon-name="download-icon" fill="#ffffff">
        <DownloadIcon
            :fill="iconColor"
        />
      </icon-base>
    </a>

    <div id="modal1" class="modal" ref="modal">
      <div class="modal-content">
        <img src="../assets/img/resume.png" alt="resume">
      </div>
      <div class="modal-footer">
        <a href="../assets/Olga%20Budickaja(Frontend%20Java%20Script%20Developer).pdf" class="grey-text modal__download" download>
          DOWNLOAD
          <icon-base width="16" height="16" icon-name="download-icon" fill="#000000">
            <DownloadIcon
                :fill="iconBlackColor"
            />
          </icon-base>
        </a>
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";

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
    iconColor: '#ffffff',
    iconBlackColor: '#000000',
  }),
  mounted() {
    this.modal = M.Modal.init(this.$refs.modal)
  },
  destroyed() {
    if (this.modal && this.modal.destroy) {
      this.modal.destroy()
    }
  }
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
.modal {
  &__download {
    top: 3px;
  }
}
</style>