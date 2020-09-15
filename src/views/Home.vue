<template>
  <div class="home">
    <div class="content">
      <div class="announcements">
        <h1 style="text-align: left">Announcements</h1>
        <carousel ref="vaCarousel"
          :per-page="1" 
          :navigate-to="0" 
          :mouse-drag="false" 
          :autoplay="true"
          :loop="true"
          paginationActiveColor="#F2994A"
          paginationColor="#FFFFFF"
        >
          <slide>
            <img src="../assets/Banner_Item_1.png" alt="Banner Item 1"/>
          </slide>
          <slide>
            <img src="../assets/Banner_Item_2.png" alt="Banner Item 2"/>
          </slide>
        </carousel>
      </div>
      <div class="news-feed">

      </div>
    </div>
    <div class="profile">

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  async mounted () {
    const dotContainerElement = await document.getElementsByClassName('VueCarousel-dot-container')[0]
    dotContainerElement.removeAttribute('style')

    const dotElements = await document.getElementsByClassName('VueCarousel-dot')
    for (const dotElet of dotElements) {
      dotElet.style.marginTop = '0px'
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2em 2em;
  color: #FFFFFF;
}
.content {
  width: 60%;
}
.profile {
  width: 40%
}
.VueCarousel-dot-container {
  margin-top: -20px;
}
</style>