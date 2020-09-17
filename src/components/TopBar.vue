<template>
  <md-toolbar md-theme="va-theme" md-elevation="1">
    <div class="md-title" style="flex: 1">
      <img alt="Logo" class="logo-item" src="../assets/VAPPPPLogo.png">
    </div>
    <div class="topbar-actions" v-if="!isLogin">
      <md-button :to="{ name: 'home'}" :class="isHomeActive ? 'md-accent active-class': 'md-default'">Home</md-button>
      <md-button :to="{ name: 'overview'}" :class="isResourcesActive ? 'md-accent active-class': 'md-default'">Resources</md-button>
      <md-button :class="isVATrackerActive ? 'md-accent active-class': 'md-default'">VATracker</md-button>
      <md-button :class="isSupportActive ? 'md-accent active-class': 'md-default'">Support</md-button>
      <md-menu md-align-trigger md-size="medium" md-direction="bottom-end">
        <md-button class="md-icon-button md-dense" md-menu-trigger>
          <md-icon>person</md-icon>
        </md-button>
        <md-menu-content>
          <md-button class="md-dense" :to="{ name: 'login'}">
            <md-menu-item>
              <md-icon>exit_to_app</md-icon>
              <span>Logout</span>
            </md-menu-item>
          </md-button>
        </md-menu-content>
      </md-menu>
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
      return this.$route.path?.includes('resources')
    },
    isVATrackerActive () {
      return this.$route.path?.includes('vatracker')
    },
    isSupportActive () {
      return this.$route.path?.includes('support')
    },
    isLogin () {
      return this.$route.path?.includes('login')
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