<template>
  <md-toolbar md-theme="va-theme" md-elevation="1">
    <div class="md-title" style="flex: 1">
      <img alt="Logo" class="logo-item" src="../assets/VAPPPPLogo.png">
    </div>
    <div class="topbar-actions">
      <md-button :class="isHomeActive ? 'md-accent active-class': 'md-default'">Home</md-button>
      <md-button :class="isResourcesActive ? 'md-accent active-class': 'md-default'">Resources</md-button>
      <md-button :class="isVATrackerActive ? 'md-accent active-class': 'md-default'">VATracker</md-button>
      <md-button :class="isSupportActive ? 'md-accent active-class': 'md-default'">Support</md-button>
      <md-button class="md-icon-button md-dense">
        <md-icon>person</md-icon>
      </md-button>
    </div>
  </md-toolbar>
</template>

<script>

export default {
  name: "TopBar",
  computed: {
    isHomeActive () {
      return this.$route.name?.includes('home')
    },
    isResourcesActive () {
      return this.$route.name?.includes('resources')
    },
    isVATrackerActive () {
      return this.$route.name?.includes('vatracker')
    },
    isSupportActive () {
      return this.$route.name?.includes('support')
    }
  }
}
</script>

<style scoped>
.topbar-actions {
  display: flex;
  align-items: center;
}

.active-class {
  font-weight: bolder;
}
</style>