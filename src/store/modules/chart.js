import { findAllChart } from '@/api/chartApi'
// 分类模块
export default {
    namespaced: true,
    state() {
        return {
            // 图谱信息集合
            list: [123]
        }
    },
    //修改传入的参数
    mutations: {
        setList(state, payload) {
            state.list = payload
        }
    },
    //获取图谱函数
    action: {
        async getList({commit}) {
            const chartData = await findAllChart()
            //修改得到的数据
            commit('setList',chartData)
        }
    }
}