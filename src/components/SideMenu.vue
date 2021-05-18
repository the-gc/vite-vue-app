<template>
    <aside class="aside">
        侧边栏
        <ul class="menu">
            <li v-for="(item) in side_menu" :key="item.key">
                <div>
                    <!-- 图标 -->
                    <span class="menu-item-icon">

                    </span>

                    <router-link v-if="!item.children" :to="item.path">{{item.title}}</router-link>
                    <div v-if="!!item.children">
                        <span>{{item.title}}</span>
                        <div>
                            <ul>
                                <li v-for="(child) in item.children" :key="child.key">
                                    <router-link :to="child.path">{{child.title}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 展开、关闭图标 -->
                    <span class="menu-item-expend-icon">
                        
                    </span>
                </div>
            </li>
        </ul>
    </aside>
</template>
<script>
// 两层结构菜单栏
import {reactive, ref} from 'vue'

export default {
    props: {
        side_menu: Array,
        defaultActiveKeys: Array,
        defaultOpenKeys: Array
    },
    data() {

    },
    setup(props) {
        const state = reactive({
            activeKeys: props.defaultActiveKeys || [],
            openKeys: props.defaultOpenKeys || []
        })
        return {
            ...ref(state),
            side_menu: props.side_menu,
        }
    }
}
</script>
<style scoped>
    .aside{
        position: fixed;
        width: 200px;
        top: 50px;
        left: 0;
        bottom: 0;
        border-right: 1px solid #e4e4e4;
        background-color: #fff;
    }
</style>
