<template>
  <md-card class="newsfeed-card" md-theme="va-theme">
    <md-card class="twitter-card md-scrollbar">
        <md-card-header class="twitter-card-header">
            <table>
                <tr style="padding: 0px;">
                    <td><img class="twitterLogo" src="../assets/twitterIcon.png" alt="twitter"/></td>
                    <td>
                        <a href="https://twitter.com/VaInsight" target="_blank"><h2>@VaInsight</h2></a>
                        <md-tooltip md-direction="top" class="tooltip-custom">View Twitter Profile</md-tooltip>
                    </td>
                </tr>
            </table>
        </md-card-header>
        <md-card-content class="timeline-wrapper">
            <Timeline id="VaInsight" sourceType="profile" 
                :options="{ theme: 'dark', chrome: 'nofooter noheader transparent' }"
            />
        </md-card-content>
    </md-card>

    <md-card class="linkedin-card md-scrollbar">
        <md-card-header class="linkedin-card-header ">
            <table>
                <tr style="padding: 0px;">
                    <td><img class="linkedinLogo" src="../assets/linkedinIcon.png" alt="linked in"/></td>
                    &nbsp;
                    <td>
                        <a href="https://www.linkedin.com/company/vainsight/" target="_blank"><h2>VA Insight Software</h2></a>
                        <md-tooltip md-direction="top" class="tooltip-custom">View LinkedIn Profile</md-tooltip>
                    </td>
                </tr>
            </table>
        </md-card-header>
        <md-card-content class="timeline-wrapper">
            linkedin embedded profile goes here
        </md-card-content>
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
  display: flex;
  justify-content: space-between;
}

.twitter-card, .linkedin-card {
    padding: 0.5em;
    border-radius: 10px;
    width: 48%;
    max-height: 800px;
}

.timeline-wrapper {
    max-height: 700px;
    overflow-y: auto;
    overflow-x: hidden;
}

.twitter-card-header, .linkedin-card-header {
    vertical-align: middle;
}

.twitterLogo, .linkedinLogo {
    width: 35px;
    height: 35px;
}

.tooltip-custom {
    background: #F2994A !important;
    font-size: 14px;
}
</style>