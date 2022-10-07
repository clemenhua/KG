<template>
  <div class="particles">
    <div class="main">
      <div class="mainShow">
        <!-- 搜索框 -->
      <div class="search-box">
        <input class="search-txt" type="text" placeholder="输入实体以搜索图谱信息">
        <a class="search-btn">
          <svg class="icon" viewBox="0 0 1024 1024" width="50px">
            <path
              d="M424.024 766.098c-91.619 0-177.754-35.679-242.538-100.464-133.735-133.737-133.735-351.344 0-485.078 64.784-64.784 150.919-100.462 242.538-100.462s177.754 35.677 242.539 100.462c133.733 133.735 133.735 351.34 0 485.078-64.785 64.783-150.922 100.464-242.539 100.464zM424.024 196.085c-60.637 0-117.643 23.613-160.523 66.489-88.512 88.51-88.51 232.53 0 321.040 42.876 42.876 99.885 66.491 160.523 66.491s117.643-23.614 160.523-66.491c88.51-88.51 88.51-232.53 0-321.040-42.876-42.876-99.885-66.489-160.523-66.489z"
              fill="#e94118" p-id="1176"></path>
            <path
              d="M886.838 943.904c-14.842 0-29.684-5.663-41.010-16.986l-261.286-261.285c-22.647-22.649-22.647-59.369 0-82.018 22.647-22.647 59.37-22.647 82.018 0l261.286 261.286c22.647 22.649 22.647 59.369 0 82.018-11.325 11.322-26.167 16.985-41.010 16.985z"
              fill="#e94118" p-id="1177"></path>
          </svg>
        </a>
      </div>
      

      <div class="chartsShow">
        <chartShow class="charts"/>
      </div>
    </div>
    </div>
  </div>
  <vue-particles class="index-bg" color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle"
    :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
    :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
  </vue-particles>
</template>
<script>
import chartShow from '@/components/chartShow.vue'
export default {
  name: 'TopCategory',
  components: { chartShow }
}
</script>
<style scoped lang="less">
.index-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #272643;
  z-index: -100;
  //   position: relative;
}
.mainShow{
  position: absolute;
  left:20%;
  width: 60%;
  height: 80%;
  top:15%;
  // background-color: pink;
}
.mainShow:hover>.search-box{
  top:15%
}
.mainShow:hover>.chartsShow{
  opacity: 1;
  transition: 0.5s 0.25s ;
}
// .mainShow:hover>.charts{
//   opacity: 1
// }

// 搜索框
.search-box{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    height: 65px;
    border-radius: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    transition: 0.25s;
}

.search-btn{
    float: right;
    width: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-txt{
    float: left;
    color: rgb(0, 0, 0);
    font-size: 16px;
    line-height: 40px;
     width: 800px;
    padding: 0 20px;
}
//图谱展示
.chartsShow{
  opacity: 0;
  height: 70%;
  width: 80%;
  // border:1px solid #000;
  // background-color: pink;
  position:absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);

}

.charts{
  height: 100%;
  width: 100%;
  background-color:#e4e9f7;
  border-radius: 3%;
}
</style>