<template>
  <md-drawer md-permanent="clipped" :md-active.sync="menuShrink" md-persistent="mini" class="module-drawer">
        <md-list class="drawer-list">
            <md-list-item class="drawer-item" @click="toggleMenu()">
                <md-icon>menu</md-icon>
                <span class="md-list-item-text" />
            </md-list-item>
            <md-list-item 
                v-for="item in drawerItems" 
                :key="item.name" 
                :class="isActiveMenuItem(item.routeName) ? 'drawer-item-active' : 'drawer-item'"
                @click="navigate()"
            >
                <md-icon>{{item.icon}}</md-icon>
                <span class="md-list-item-text">{{item.name}}</span>
            </md-list-item>
        </md-list>
    </md-drawer>
</template>

<script>
export default {
    name: 'ModuleDrawer',
    props: {
        drawerItems: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        menuShrink: false 
    }),
    methods: {
        toggleMenu () {
            this.menuShrink = !this.menuShrink
        },
        isActiveMenuItem (itemRouteName) {
            return this.$route.name.includes(itemRouteName)
        },
        navigate () {
            return
        }
    }
}
</script>

<style>
.module-drawer {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5) !important;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25) !important;
}

.drawer-list {
    padding: 0;
    background-color: transparent !important;
}

.drawer-item {
    color: #4F4F4F;
}

.drawer-item-active {
    background: rgba(255, 255, 255, 0.79);
    color: #4F4F4F;
}
</style>