<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">知识图谱</RouterLink>
            </h1>
            <div class="nav">
                <ul>
                    <li><RouterLink :to="`/`" >首页</RouterLink></li>
                    <li><RouterLink :to="`/charts`" active-class="active">创建图谱</RouterLink></li>
                    <li><RouterLink :to="`/chatRobot`" active-class="active">图谱机器人</RouterLink></li>
                    <li><RouterLink :to="`/educationsys`" active-class="active">教育系统</RouterLink></li>
                    <li><a href="#">解决方案</a></li>
                    <li><a href="https://clemenhua.github.io/knowled-graph/" target="_blank">开发文档</a></li>
                    <div class="nav-box"></div>
                    <!-- 测试 -->
{{$store.state.chart.list}}
                </ul>
            </div>

        </div>
    </header>
</template>
  
<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped lang='less'>
.app-header {
    background: @KGColor3;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 80px;
            width: 100%;
            text-indent: -9999px;
            background: url(../assets/images/logo.png) no-repeat center 18px / contain;
        }
    }

    .nav {
        width: 70%;
        height: 70px;
        position: relative;
        top: 0;
        // box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        // border-radius: 10px;
        // background-color: #fff;
    }

    .nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        right: 5%;
    }

    .nav ul .nav-box {
        position: absolute;
        bottom: 0;
        left: 0;
        /* 如果导航栏就六个导航，那么每个导航的宽度都是整个导航
            的六分之一 */
        width: calc((100% / 6)*1);
        height: 10px;
        border-radius: 2px;
        transition: .5s;
    }

    .nav ul li {
        width: 100%;
        text-align: center;
    }

    .nav ul li a {
        // color: #000;
        font: 100 20px '优设标题黑';
        font-weight: bold;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 60px;
        // border: 1px solid #ccc;
    }
.active{
    color:blue;
}

    .nav ul li:nth-child(1):hover~.nav-box  {
        left: calc(100% / 6 *0);
        background-color: rgb(250, 190, 250);
    }

    .nav ul li:nth-child(2):hover~.nav-box {
        left: calc(100% / 6 *1);
        background-color: red;
    }

    .nav ul li:nth-child(3):hover~.nav-box {
        left: calc(100% / 6 *2);
        background-color: #d18df8;
    }

    .nav ul li:nth-child(4):hover~.nav-box {
        left: calc(100% / 6 *3);
        background-color: #ffb1b1;
    }

    .nav ul li:nth-child(5):hover~.nav-box {
        left: calc(100% / 6 *4);
        background-color: #8da1f8;
    }

    .nav ul li:nth-child(6):hover~.nav-box {
        left: calc(100% / 6 *5);
        background-color: #7df88e;
    }
}
</style>