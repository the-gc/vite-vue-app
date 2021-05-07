<template>
    <header class="header">
        <!-- 左侧 logo 部分 -->
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <span class="project-name">vite-vue-app</span>
        </div>
        <div class="right-brand">
            <!-- 头部导航 -->
            <nav class="header-nav">

            </nav>
            <!-- 头部用户信息部分 -->
            <div class="user-panel">
                
            </div>
        </div>
    </header>    
</template>
<script>

</script>
<style scoped>
    .header{
        position: fixed;
        height: 50px;
        width: 100%;
        top: 0;
        border-bottom: 1px solid #e4e4e4;
        background-color: #fff;
        padding-left: 20px;
    }
    .logo{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .logo img{
        height: 30px;
    }
    .logo .project-name{
        margin-left: 10px;
        font-weight: bold;
    }
</style>