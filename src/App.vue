<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <TopBar />
    <router-view :style="backgroundStyle" class="main-content" :key="$route.fullPath"/>
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
.main-content {
  height: 150%;
} 
</style>