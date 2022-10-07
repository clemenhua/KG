<template>
    <!-- 顶部通栏 -->
    <AppTopnav/>
    <!-- 头部组件 -->
    <AppHeader/>
    <!-- 内容容器 -->
    <div class='main'>
    <!-- 二级路由 -->
    <RouterView />
  </div>
    <!-- 底部组件 -->
    <AppFooter />
    <!-- <footer>底部组件</footer> -->
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: { AppTopnav,AppHeader,AppFooter },
  //获取图谱数据
  setup(){
    const store = useStore()
    store.dispatch('chart/getList')
  }
}


</script>
<style lang="less" scoped>
</style>
