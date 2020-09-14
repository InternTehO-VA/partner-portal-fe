<template>
  <md-toolbar md-theme="va-theme" md-elevation="1">
    <div class="md-title" style="flex: 1">
      <img alt="Logo" class="logo-item" src="../assets/VAPPPPLogo.png">
    </div>
    <div class="topbar-actions">
      <md-button>Home</md-button>
      <md-button>Resources</md-button>
      <md-button>VATracker</md-button>
      <md-button>Support</md-button>
      <md-button class="md-icon-button md-dense">
        <md-icon>person</md-icon>
      </md-button>
    </div>
  </md-toolbar>
</template>

<script>

export default {
  name: "TopBar"
}
</script>

<style scoped>
.topbar-actions {
  display: flex;
  align-items: center;
}
</style>