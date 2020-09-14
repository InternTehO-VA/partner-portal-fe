<template>
  <md-toolbar md-theme="va-theme" md-elevation="1">
    <div class="md-title" style="flex: 1">
      <img alt="Logo" class="logo-item" src="../assets/VAPPPPLogo.png">
    </div>
    <md-button>Home</md-button>
    <md-button>Resources</md-button>
    <md-button>VATracker</md-button>
    <md-button>Support</md-button>
    <md-button class="md-icon-button md-dense">
      <md-icon>person</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>