<template>
  <div class="home md-scrollbar">
    <div class="content">
      <div class="announcements">
        <h1 style="text-align: left">Announcements</h1>
        <carousel
          class="announcements-carousel"
          :per-page="1" 
          :navigate-to="0" 
          :mouse-drag="false" 
          :autoplay="true"
          :loop="true"
          autoplayTimeout="4000"
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
        <h1 style="text-align: left">News Feed</h1>
      </div>
    </div>
    <div class="profile">
      <h1 style="text-align: left">My Profile</h1>
      <md-card class="profile-card" md-theme="va-theme">
        <md-card-header class="profile-card-header">
          <md-card-media class="profile-card-header-partner-logo">
            <img src="../assets/partnerLogo.png" alt="People">
          </md-card-media>
        </md-card-header>
        <md-avatar class="profile-card-avatar md-large md-accent md-avatar-icon">
          <img src="../assets/profilePic.png" alt="Avatar">
        </md-avatar>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
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
  padding: 2em 3em;
  color: #FFFFFF;
}
.content {
  width: 55%;
  float: left;
}
.announcements-carousel {
  width: 90%;
}
.profile {
  width: 45%;
  float: right;
}
.profile-card {
  background: rgba(255, 254, 254, 0.5);
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.profile-card-header {
  background: #F2994A;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px 16px;
}
.profile-card-avatar {
  margin-top: -56px;
  z-index: 1;
  width: 100px;
  height: 100px;
}
.profile-card-header-partner-logo {
  margin-left:auto; 
  margin-right:0px;
}
.VueCarousel-dot-container {
  margin-top: -20px;
}
</style>