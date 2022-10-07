<template>
  <div class="particles">
    <div class="container">
      <div class="main_middle">
        <div class="titleTop">
          <p>基于大数据的教育知识图谱
          <div class="line"></div>
          </p>
          <div class="abstract">&nbsp &nbsp &nbsp &nbsp利用知识图谱可以改善搜索结果、进行基于语义的数据集成、以及提升智能问答的准确性。 在基础教育领域，如何构建高质量的知识图谱是一个重要挑战。<br />&nbsp &nbsp &nbsp &nbsp知识图谱是人工智能技术的集大成应用，通过将应用数学、图形学、信息可视化技术、信息科学等学科的理论与方法与计量学引文分析、共现分析等方法结合，并利用可视化的图谱形象地展示学科的
            核心结构、发展历史、前沿领域以及整体知识架构达到多学科融合。</div>
          <div class="twobutton">
            <RouterLink :to="`/charts`">图谱查询</RouterLink>
            <RouterLink :to="`/chatRobot`">图谱机器人</RouterLink>
            <RouterLink :to="`/chatRobot`">教育系统</RouterLink>
          </div>
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
export default {
  name: 'HomePage'
}
</script>
<style lang="less" scoped>
.container {
  color: @KGColor3;
  height: 820px;
}

.main_middle {
  position: absolute;
  top: 10%;
  left: 5%;
  height: 50%;
  width: 90%;
  // border: 1px solid;
}

.titleTop {
  position: relative;
  top: 30%;

  p {
    text-align: center;
    font-size: 80px;
    letter-spacing: 10px;

  }

  a {
    width: 270px;
    height: 60px;
    display: block;
    margin-top: 40px;
    font-size: 25px;
    text-decoration: none;
    text-align: center;
    line-height: 60px;
    background: @KGColor2;
    color: #1F375C;
    border-radius: 50px;
  }
}

.abstract {
  margin: 0% 10% ;
font-size: 20px;
color: @KGColor4;
}

.twobutton {
  display: flex;
  justify-content: space-between;
  // margin: 0% 20% 0% 20%;
}

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

.line {
  // width: 720px;
  height: 2px;
  background: #c7bcba;
  margin: 20px 0;
  left: 50%;
}
</style>
