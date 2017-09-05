<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from 'vue'
import '@/assets/scss/font-awesome.scss'
import '@/assets/scss/iconfont.css'
import '@/common/css/common.scss'
import router from '@/router'

export default {
    name: 'app',
    router,
    data () {
        return {
            msg: 'Welcome to Your mt App'
        }
    }
    
}
</script>

<style lang="scss" scoped>
    
</style>
