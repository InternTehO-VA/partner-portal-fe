<template>
  <md-card class="newsfeed-card" md-theme="va-theme">
    <md-card class="twitter-card">
        <div class="timeline-wrapper">
            <Timeline id="VaInsight" sourceType="profile" 
                :options="{ theme: 'dark', chrome: 'nofooter transparent' }"
            />
        </div>
    </md-card>
  </md-card>
</template>

<script>
import  {Timeline} from 'vue-tweet-embed'
export default {
    name: 'NewsFeed',
    components: {
        Timeline
    }
}
</script>

<style>
.newsfeed-card {
  background: rgba(255, 254, 254, 0.5) !important;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px;
  width: 90%;
  padding: 1em;
}

.twitter-card {
    padding: 0.5em;
    border-radius: 10px;
    width: 45%;
    max-height: 800px;
}

.timeline-wrapper {
    max-height: 700px;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>