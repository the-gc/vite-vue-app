<template>
    <div class="login-wrapper">
        登录页
        <div class="login-form">
            <div class="input-box">
                <div class="prefix-icon"></div>
                <input v-model="username" placeholder="请输入用户名"/>
            </div>
            <div class="input-box">
                <div class="prefix-icon"></div>
                <input v-model="password" type="password" placeholder="请输入密码"/>
            </div>
            <div class="login-submit">
                <button @click="onSubmit(username, password)">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRef } from 'vue'
    export default {
        props: {},
        data() {
            return {
                username: '',
                password: ''
            }
        },
        setup(props) {
            const state = reactive({
                username: '',
                password: ''
            })
            const onSubmit = (username, password) => {
                if (username === '') {
                    alert('请输入用户名');
                }
                if (password === '') {
                    alert('请输入密码');
                }
                window.location.href = '/'
            }
            return {
                ...toRef(state),
                onSubmit,
            }
        }
    }
</script>
<style scoped>
    .login-wrapper{
        height: 100%;
        width: 100%;
        background-color: #fff;
        padding-top: 150px;
    }
    .login-form{
        margin-top: 40px;
    }
    .input-box{
        margin-bottom: 20px;
    }
</style>