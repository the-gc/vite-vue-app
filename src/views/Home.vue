<template>
    <div class="wrapper">
        <v-header/>
        <v-sideMenu/>
        <div class="main-container">
            <router-view/>
        </div>
    </div>
</template>
<script>
    import vHeader from '../components/Header.vue'
    import vSideMenu from '../components/SideMenu.vue'
    export default {
        components: {
            'v-header': vHeader,
            'v-sideMenu': vSideMenu
        }
    }
</script>
<style scoped>
    .wrapper{
        height: 100%;
        overflow: auto;
    }
    .main-container{
        margin-top: 50px;
        margin-left: 200px;
        padding: 20px;
    }
</style>
