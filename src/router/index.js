import { createRouter, createWebHashHistory } from 'vue-router'
// 懒加载
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')
const Chart = () => import('@/views/charts/chartmain')
const chatRobot = () => import('@/views/robots/chatRobot')
const educationsys = () => import('@/views/education/educationsys')

// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/charts', component: Chart },
      { path: '/chatRobot', component: chatRobot },
      { path: '/educationsys', component: educationsys },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'is-active',
  routes
})

export default router
