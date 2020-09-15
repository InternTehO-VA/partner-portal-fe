<template>
  <div class="home">
    <div class="content">
      <div class="announcements">
        <h1 style="text-align: left">Announcements</h1>
        <carousel :per-page="1" :navigate-to="0" :mouse-drag="false">
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
  name: 'Home'
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
</style>