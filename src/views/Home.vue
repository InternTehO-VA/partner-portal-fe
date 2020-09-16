<template>
  <div class="home md-scrollbar">
    <div class="content">
      <div class="announcements">
        <h1 style="text-align: left">Announcements</h1>
        <Carousel />
      </div>
      <div class="news-feed">
        <h1 style="text-align: left">News Feed</h1>
        <NewsFeed />
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
          <img src="../assets/profilePic.png" alt="Avatar" />
        </md-avatar>

        <md-card-content class="profile-card-greeting">
          <h1 style="margin-bottom: 0.3em;"><strong>Welcome, Samal</strong></h1>
          <div class="md-title">Client Executive</div>
        </md-card-content>

        <md-card-content class="profile-card-current-tasks">
          <h1><strong>Current Tasks</strong></h1>
          <div v-for="task in tasks" :key="task.taskId" class="task-wrapper">
            <Task :task=task />
          </div>
        </md-card-content>

        <md-card-content class="profile-card-quick-links">
          <h1><strong>Quick Links</strong></h1>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-raised md-accent">Edit Profile</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import NewsFeed from '../components/NewsFeed'
import Task from '../components/Task'

export default {
  name: 'Home',
  components: {
    Carousel,
    NewsFeed,
    Task
  },
  data: () => ({
    tasks: () => ({})
  }),
  async mounted () {
    const dotContainerElement = await document.getElementsByClassName('VueCarousel-dot-container')[0]
    dotContainerElement.removeAttribute('style')

    const dotElements = await document.getElementsByClassName('VueCarousel-dot')
    for (const dotElet of dotElements) {
      dotElet.style.marginTop = '0px'
    }

    await this.populateTasks()
  },
  methods: {
    populateTasks () {
      this.tasks = [
        { taskId: 1, classification: 'Resource', item: 'Sales Enablement', itemNumber: 3, progress: 60 },
        { taskId: 2, classification: 'VATracker', item: 'Quizsets', itemNumber: 2, progress: 38 }
      ]
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
.news-feed {
  padding-top: 2em;
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
.profile-card-greeting {
  color: #090B3A;
}
.profile-card-current-tasks, .profile-card-quick-links {
  text-align: left;
  padding: 1em 2rem;
}
.task-wrapper {
  padding: 1em 0;
}
.VueCarousel-dot-container {
  margin-top: -20px;
}
</style>