<template>
  <form class="form" method="post" @submit.prevent="submitHandler">
    <div class="input-field">
      <i class="material-icons grey-text text-lighten-4 prefix">account_circle</i>
      <input
          id="icon_prefix"
          type="text"
          class="white-text"
          v-model="name"
          :class="{ invalid: v$.name.$dirty && !v$.name.required  && !v$.name.minLength}"
      >
      <label for="icon_prefix">Name</label>
      <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
        <span class="error-msg red-text">{{ error.$message }}</span>
      </div>
    </div>
    <div class="input-field">
      <i class="material-icons grey-text text-lighten-4 prefix">phone</i>
      <input
          id="icon_telephone"
          type="tel"
          v-model="phone"
          class="white-text"
          :class="{ invalid: v$.phone.$dirty && !v$.phone.required  && !v$.phone.minLength && !v$.phone.numeric}"
      >
      <label for="icon_telephone">Telephone</label>
      <div class="input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
        <span class="error-msg red-text">{{ error.$message }}</span>
      </div>
    </div>
    <div class="input-checked">
      <label class="form__checked">
        <input
            v-model="agree"
            type="checkbox"
            checked="checked"
            :class="{ invalid: v$.agree.required }"
        />
        <span class="white-text">I agree with</span>
        <div class="input-errors" v-for="error of v$.agree.$errors" :key="error.$uid">
          <span class="error-msg red-text">{{ error.$message }}</span>
        </div>
        <router-link class="form__link" to="/policy">private policy</router-link>
      </label>
    </div>

    <button class="btn form__btn waves-effect waves-light" type="submit" name="action">Submit
      <i class="material-icons white-text right">send</i>
    </button>
  </form>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, minLength, numeric,   } from '@vuelidate/validators'
import axios from "axios";

export default {
  name: 'my-input',
  setup() {
    return { v$: useVuelidate() }
  },
  data: () => ({
    name: '',
    phone: '',
    agree: '',
    //Telegram bot
    token: '5819997919:AAGz0sV3_P-el-kufjGTm8bIB6t-M49giCo',
    chatId: '674088279'
  }),
  validations() {
    return {
      name: {required, minLength: minLength(2)},
      phone: {required,  minLength: minLength(10), numeric},
      agree: {required}
    }
  },
  // mounted() {
  //   M.toast({html: 'I am a toast'})
  // },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      this.visibleTooltips()
      const requestTelegramPost = async (url, data) => {
        try {
          return await axios.post(url, data)
        }catch (e) {
          console.log(e)
        }
      }
      requestTelegramPost(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
      })
          .then((res) => {
            console.log(res.data)
          })
      // const fullMessage = `Full name: ${this.name}\nTelephon: ${this.phone}`
      // console.log(fullMessage)
      // this.$http.post(`The message was sent successfully Sending url: https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`)
    },
    visibleTooltips() {
      M.toast({html: 'Data send!', displayLength: 2000})
    }
  },
}
</script>

<style scoped lang="scss">
.form {
  max-width: 400px;
  margin-top: 50px;
  &__btn {
    background: var(--color-background);
    margin-top: 30px;
  }
  &__checked {
    position: relative;
  }
  &__link {
    position: absolute;
    bottom: -2px;
    left: calc(100% + 10px);
    width: 100%;
    font-size: 1rem;
  }
}
.error-msg {
  font-size: 0.7rem;
}
</style>