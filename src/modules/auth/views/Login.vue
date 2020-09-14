<template>
  <div class="login" :style="backgroundStyle">
    <md-card md-theme="va-theme" class="login-box">
      <md-card-media>
        <img src="../../../assets/VAPPPPLogo_bigger.png" alt="Logo">
      </md-card-media>

      <md-card-header>
        <div class="md-title login-title"><strong>Login</strong></div>
      </md-card-header>
      <form @submit.prevent="loginSubmit()">
        <md-card-content style="text-align: left">
          <md-field md-clearable>
            <label>Email</label>
            <md-input v-model="$v.email.$model" type="email"/>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input v-model="$v.password.$model" type="password"/>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-raised md-accent" type="submit">Login</md-button>
        </md-card-actions>
      </form>
    </md-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import TokenService from "@/modules/auth/services/token.service";

export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    backgroundStyle: {
      backgroundImage: `url(${require('@/assets/loginBG.png')})`
    }
  }),
  mixins: [validationMixin],
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    ...mapActions('auth', {
      setAccessToken: 'setAccessToken'
    }),
    loginSubmit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        TokenService.saveToken(1)
        this.$router.push('/')
      }
    },
    clear () {
      this.email = null
      this.password = null
    }
  }
}
</script>

<style scoped>
.login {
  height: 93%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 25%;
  height: 55%;
  min-width: 355px;
  background: rgba(255, 254, 254, 0.5);
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  padding: 1em;
}

.login-title {
  text-align: left;
  font-size: 30px;
  color: #090B3A;
}

.md-card-header {
  padding-top: 0px;
}
</style>
