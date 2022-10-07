import request from "@/utils/request";

// 获取实体图谱数据
// @returns Promise

//获取搜索的接口
export const findAllChart = ()=>{
    return  request('/knowledge', 'get', { entity: '苹果' })
}