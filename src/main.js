import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ECharts from 'vue-echarts';
import 'echarts';

import 'normalize.css'
import '@/assets/styles/common.less'

// vue-particles
import VueParticles from 'vue-particles'


createApp(App)
.use(store)
.use(router)
.use(VueParticles)
.component('ECharts', ECharts)
.mount('#app')
