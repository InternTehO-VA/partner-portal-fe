<template>
    <div class="overview md-scrollbar">
        <ModuleDrawer class="drawer" :drawerItems="drawerItems"/>
        <router-view class="router-view-content"/>
    </div>
</template>

<script>
import ModuleDrawer from '../../../components/ModuleDrawer'
export default {
    name: 'Index',
    components: {
        ModuleDrawer
    },
    data: () => ({
        drawerItems: [
            { icon: 'home', name: 'Overview', routeName: 'overview'},
            { icon: 'record_voice_over', name: 'Sales Enablement', routeName: 'sales-enablement'},
            { icon: 'screen_share', name: 'Technical Enablement', routeName: 'technical-enablement'},
            { icon: 'book', name: 'Guides', routeName: 'guides'},
            { icon: 'perm_media', name: 'Slide Decks', routeName: 'slide-decks'},
            { icon: 'pages', name: 'Marketing Materials', routeName: 'marketing-materials'}
        ]
    })
}
</script>

<style>
.overview {
    width: 100%;
    display: flex;
}
.drawer {
    height: 100%;
    width: 230px;
    max-width: calc(100vw - 125px);
    float: left;
}
.router-view-content {
    float: right;
}
</style>