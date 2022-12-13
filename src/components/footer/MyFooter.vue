<template>
  <footer class="page-footer footer">
    <div class="container">
      <div class="row footer__row">
        <div class="col m8 s12">
          <h5 class="white-text">Olga Budytska</h5>
          <div class="grey-text text-lighten-4">You can leave your phone and I will call you back.</div>
          <MyForm />
        </div>
        <div class="col m4 s12">
          <h5 class="white-text">Category</h5>
          <ul class="footer__list">
            <li class="footer__link"><router-link to="/">Home</router-link></li>
            <li class="footer__link"><router-link to="/skills">Skills</router-link></li>
            <li class="footer__link"><router-link to="/certificates">Certificates</router-link></li>
            <li class="footer__link"><router-link to="/works">My work</router-link></li>
            <li class="footer__link"><router-link to="/about">About me</router-link></li>
            <li class="footer__link"><router-link to="/contacts">Contacts</router-link></li>
          </ul>
          <MyContacts class="footer__contacts"/>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container grey-text text-darken-1">
        © 2022 All rights reserved
        <a class="grey-text text-darken-1 right" href="mailto:olgabudickaja@gmail.com">olgabudickaja@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<script>

import MyContacts from "@/UI/MyContacts";
import MyForm from "@/UI/MyForm";
export default {
  components: {
    MyContacts,
    MyForm
  },
}
</script>

<style scoped lang="scss">
.footer {
  background: rgb(18, 42, 52);
  &__link {
    margin-top: 15px;
  }
  &__contacts {
    margin-top: 50px;
  }
}
.footer-copyright {
  background: var(--color-background);
}
</style>