<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <TopBar class="topbar"/>
    <router-view :style="backgroundStyle" class="main-content" name="toolbarRouter" :key="$route.fullPath"/>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  components: {
    TopBar
  },
  data: () => ({
    backgroundStyle: {
      backgroundImage: `url(${require('@/assets/mainBG.png')})`
    }
  })
}
</script>

<style scoped>
.topbar {
  width: 100%;
  position: fixed;
  top: 0;
}
.main-content {
  margin-top: 60px;
  height: 150%;
} 
</style>