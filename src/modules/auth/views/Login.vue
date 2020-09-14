<template>
  <div class="login">
    <md-field>
      <label>Password toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field :md-toggle-password="false">
      <label>Password field without toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: null,
    password: null
  })
}
</script>

<style scoped>

</style>
