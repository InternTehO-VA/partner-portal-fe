<template>
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
</template>

<script>
export default {
}
</script>

<style scoped>
.announcements-carousel {
  width: 90%;
}
</style>