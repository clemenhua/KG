<template>
  <!-- 一级路由 -->
  <RouterView />
  <!-- <button @click="fn">测试请求工具</button> -->
  <!-- <p style="color: white;">{{fn}}</p> -->
</template>

<!-- 请求路由 -->
<script>
import request from './utils/request';
export default {
  name: "App",
  setup() {
    // const fn = () => {
    //   // const aaa = request('/knowledge', 'get', { entity: '苹果' })
    //   request('/knowledge', 'get', { entity: '苹果' })
    // }
    function fn() {
      let aaa = request('/knowledge', 'get', { entity: '苹果' })
      return aaa
    }
    // console.log(fn())
    return { fn }
  }
}

</script>
