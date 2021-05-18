<template>
    <div class="wrapper">
        <v-header/>
        <v-sideMenu :side_menu="side_menu"/>
        <div class="main-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import vHeader from '../components/Header.vue'
    import vSideMenu from '../components/SideMenu.vue'
    import side_menu from '../app/sideMenu'
    export default {
        data() {
            return {
                side_menu: side_menu
            }
        },
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
