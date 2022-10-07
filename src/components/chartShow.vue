<template>
    <e-charts :option="option" />
</template>

<script setup>
import { ref, computed } from 'vue';

// const data = ref([ ref能监听数据变化
//   { value: 50, name: 'A' },
//   { value: 40, name: 'B' },
//   { value: 30, name: 'C' },
//   { value: 55, name: 'D' },
//   { value: 120, name: 'E' },
// ]);

// const nodes = [
//     {
//         "name": "苹果",
//         "id": "1",
//         "draggable": true,
//         "itemStyle": {
//             "color": "red"
//         }
//     },
//     {
//         "name": "苹果",
//         "id": "3"
//     },
//     {
//         "name": "LostinBeijing",
//         "id": "4"
//     },
//     {
//         "name": "迷失北京",
//         "id": "5"
//     },
//     {
//         "name": "2007年",
//         "id": "6"
//     },
//     {
//         "name": "FilmDistribution",
//         "id": "7"
//     },
//     {
//         "name": "中国内地",
//         "id": "8"
//     },
//     {
//         "name": "内地",
//         "id": "9"
//     },
//     {
//         "name": "2007",
//         "id": "10"
//     },
//     {
//         "name": "李玉",
//         "id": "11"
//     },
//     {
//         "name": "李玉",
//         "id": "12"
//     },
//     {
//         "name": "方砺",
//         "id": "13"
//     },
//     {
//         "name": "剧情/故事",
//         "id": "14"
//     },
//     {
//         "name": "梁家辉，佟大为，范冰冰，金燕玲",
//         "id": "15"
//     },
//     {
//         "name": "112分钟",
//         "id": "16"
//     },
//     {
//         "name": "2007年5月18日（中国大陆）",
//         "id": "17"
//     },
//     {
//         "name": "4000万港元（香港）",
//         "id": "18"
//     },
//     {
//         "name": "普通话",
//         "id": "19"
//     },
//     {
//         "name": "彩色",
//         "id": "20"
//     },
//     {
//         "name": "tt0949489",
//         "id": "21"
//     },
//     {
//         "name": "李玉、方励",
//         "id": "22"
//     },
//     {
//         "name": "剧情",
//         "id": "23"
//     },
//     {
//         "name": "范冰冰，佟大为，梁家辉，金燕玲",
//         "id": "24"
//     },
//     {
//         "name": "迷失北京",
//         "id": "25"
//     },
//     {
//         "name": "2007年",
//         "id": "26"
//     },
//     {
//         "name": "梁家辉、佟大为、范冰冰、金燕玲",
//         "id": "27"
//     }
// ];
// const links = [
//     {
//         "source": "1",
//         "target": 1,
//         "relation": {
//             "name": "中文名"
//         }
//     },
//     {
//         "source": "1",
//         "target": 2,
//         "relation": {
//             "name": "外文名"
//         }
//     },
//     {
//         "source": "1",
//         "target": 3,
//         "relation": {
//             "name": "其它译名"
//         }
//     },
//     {
//         "source": "1",
//         "target": 4,
//         "relation": {
//             "name": "出品时间"
//         }
//     },
//     {
//         "source": "1",
//         "target": 5,
//         "relation": {
//             "name": "发行公司"
//         }
//     },
//     {
//         "source": "1",
//         "target": 6,
//         "relation": {
//             "name": "制片地区"
//         }
//     },
//     {
//         "source": "1",
//         "target": 7,
//         "relation": {
//             "name": "拍摄地点"
//         }
//     },
//     {
//         "source": "1",
//         "target": 8,
//         "relation": {
//             "name": "拍摄日期"
//         }
//     },
//     {
//         "source": "1",
//         "target": 9,
//         "relation": {
//             "name": "导演"
//         }
//     },
//     {
//         "source": "1",
//         "target": 10,
//         "relation": {
//             "name": "编剧"
//         }
//     },
//     {
//         "source": "1",
//         "target": 11,
//         "relation": {
//             "name": "制片人"
//         }
//     },
//     {
//         "source": "1",
//         "target": 12,
//         "relation": {
//             "name": "类型"
//         }
//     },
//     {
//         "source": "1",
//         "target": 13,
//         "relation": {
//             "name": "主演"
//         }
//     },
//     {
//         "source": "1",
//         "target": 14,
//         "relation": {
//             "name": "片长"
//         }
//     },
//     {
//         "source": "1",
//         "target": 15,
//         "relation": {
//             "name": "上映时间"
//         }
//     },
//     {
//         "source": "1",
//         "target": 16,
//         "relation": {
//             "name": "票房"
//         }
//     },
//     {
//         "source": "1",
//         "target": 17,
//         "relation": {
//             "name": "对白语言"
//         }
//     },
//     {
//         "source": "1",
//         "target": 18,
//         "relation": {
//             "name": "色彩"
//         }
//     },
//     {
//         "source": "1",
//         "target": 19,
//         "relation": {
//             "name": "imdb编码"
//         }
//     },
//     {
//         "source": "1",
//         "target": 20,
//         "relation": {
//             "name": "编剧"
//         }
//     },
//     {
//         "source": "1",
//         "target": 21,
//         "relation": {
//             "name": "类型"
//         }
//     },
//     {
//         "source": "1",
//         "target": 22,
//         "relation": {
//             "name": "主演"
//         }
//     },
//     {
//         "source": "1",
//         "target": 23,
//         "relation": {
//             "name": "其他译名"
//         }
//     },
//     {
//         "source": "1",
//         "target": 24,
//         "relation": {
//             "name": "拍摄日期"
//         }
//     },
//     {
//         "source": "1",
//         "target": 25,
//         "relation": {
//             "name": "主演"
//         }
//     }
// ];
const nodes=[]
const links=[]
const option = computed(() => {
    return {
        title: {
            text: '    图谱搜索结果'
        },
        tooltip: {},
        series: [{
            // symbol:'roundRect',
            draggable: true,
            roam: 'scale',
            type: 'graph', //类型
            layout: 'force', //一定要设置这个，不然节点无法拖动
            nodes: nodes,
            links: links,
            symbolSize: function (value, params) { //改变节点大小
                return 50
            },
            itemStyle: {
                color: "#ffdc60"
            },
            // 设置文本信息
            label: {
                show: true,
                // position: [25, 20],
                distance: 5,
                fontSize: 10,
                // align: "center",
                color: "#000"
            },
            edgeLabel: { //边的设置
                show: true,
                position: "middle",
                fontSize: 12,
                formatter: (params) => {
                    return params.data.relation.name;
                },
            },
            edgeSymbol: ["circle", "arrow"], //边两边的类型
            force: {
                repulsion: 2000,
                gravity: 0.01,
                edgeLength: 100,
                friction: 0.05,
                layoutAnimation: true,
            }
        },],
    }
});


</script>

<style scoped>

</style>