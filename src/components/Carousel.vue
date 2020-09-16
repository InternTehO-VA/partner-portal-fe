<template>
    <md-card class="announcements-card" md-theme="va-theme">
        <carousel
            class="announcements-carousel"
            :per-page="1" 
            :navigate-to="0" 
            :mouse-drag="false" 
            :autoplay="true"
            :loop="true"
            :autoplayTimeout=4000
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
    </md-card>
</template>

<script>
export default {
}
</script>

<style scoped>

.announcements-card {
  background: rgba(255, 254, 254, 0.5) !important;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px;
  width: 90%;
  padding: 1em;
  display: flex;
  justify-content: center;
}
.announcements-carousel {
  width: 93%;
}
</style>