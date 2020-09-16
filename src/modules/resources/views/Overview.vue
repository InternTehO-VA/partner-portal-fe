<template>
    <div class="overview">
        <ModuleDrawer :drawerItems="drawerItems"/>
    </div>
</template>

<script>
import ModuleDrawer from '../../../components/ModuleDrawer'
export default {
    name: 'Overview',
    components: {
        ModuleDrawer
    },
    data: () => ({
        drawerItems: [
            { icon: 'home', name: 'Overview', routeName: 'resources'},
            { icon: 'record_voice_over', name: 'Sales Enablement', routeName: 'sales_enablement'},
            { icon: 'screen_share', name: 'Technical Enablement', routeName: 'techical_enablement'},
            { icon: 'book', name: 'Guides', routeName: 'guides'},
            { icon: 'perm_media', name: 'Slide Decks', routeName: 'slide_decks'},
            { icon: 'pages', name: 'Marketing Materials', routeName: 'marketing_materials'}
        ]
    })
}
</script>

<style>

</style>