<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <li><a href="javascript:;">通知：
                    **********此页面为知识图谱测试**********
                </a></li>
            </ul>
            <ul>
                <template v-if="profile.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{profile.account}}</a></li>
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;">请先登录</a></li>
                    <li><a href="javascript:;">注册账号</a></li>
                </template>
                <li><a href="javascript:;">个人中心</a></li>
                <li><a href="javascript:;">教育中心</a></li>
                <li><a href="javascript:;">帮助中心</a></li>
                <li><a href="javascript:;">关于我们</a></li>
                <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'AppTopnav',
    setup() {
        //获取用户信息登录切换导航菜单
        const store = useStore()
        const profile = computed(() => {
            return store.state.user.profile
        }) // 需要加入计算属性
        return { profile }
    }
}
</script>
<style scoped lang="less">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 30px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: @KGColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
.container {
        display: flex;
        justify-content: space-between
    }
</style>