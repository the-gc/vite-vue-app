<template>
    <div class="block">
        <div class="block-header">
            <div class="block-title">{{title}}</div>
        </div>
        <div class="block-content">
            <slot/>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'vBlock',
    props: {
        title: String,
    }
})
</script>

<style lang="less" scoped>
    @import url('../style/variable.less');
    .block{
        border: 1px solid @border-color-gray;
        .block-header{
            display: flex;
            height: 50px;
            align-items: center;
            background-color: #fff;
            border-bottom: 1px solid @border-color-gray;
        }
        .block-title{
            padding-left: 20px;
        }
        .block-content{
            padding: 20px;
            background-color: #fff;
        }
    }
</style>
