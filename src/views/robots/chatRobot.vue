<template>
  <div class="particles">
    <div class="section">
      <div id="robot">
        <div class="wrap">
          <!-- 头部 Header 区域 -->
          <div class="header">
            <h3>基于图谱的智能问答系统</h3>
            <img src="../../assets/images/person02.png" alt="icon" />
          </div>
          <!-- 中间 聊天内容区域 -->
          <div class="main">
            <ul class="talk_list" style="top: 0px;" id="talk_list">
              <li class="left_word">
                <img src="../../assets/images/person01.png" /> <span>你好，基于图谱的智能问答系统</span>
              </li>
              <!-- <li class="right_word">
                                <img src="img/person02.png" /> <span>你好哦</span>
                              </li> -->
            </ul>
            <div class="drag_bar" style="display: none;">
              <div class="drager ui-draggable ui-draggable-handle" style="display: none; height: 412.628px;"></div>
            </div>
          </div>
          <!-- 底部 消息编辑区域 -->
          <div class="footer">
            <img src="../../assets/images//person02.png" alt="icon" />
            <input type="text" placeholder="说的什么吧..." class="input_txt" id="ipt" />
            <input type="button" value="发 送" class="input_sub" id="btnSend" />
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
  name: 'TopCategory'
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

.wrap {
  position: absolute;
  width: 60%;
  left: 20%;
  /* margin-left: -225px; */
  top: 20%;
  bottom: 15%;
  border: 1px solid #ebebeb;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  height: 55px;
  /* background: linear-gradient(90deg, rgba(247, 6, 174, 0.6), rgba(177, 189, 217, 0.6)); */
  background: rgb(44, 8, 246);
  overflow: hidden;
}

.header h3 {
  color: #faf3fc;
  line-height: 55px;
  font-weight: normal;
  float: left;
  letter-spacing: 2px;
  margin-left: 25px;
  font-size: 18px;
  text-shadow: 0px 0px 5px #944846;
}

.header img {
  float: right;
  margin: 7px 25px 0 0;
  border-radius: 20px;
  box-shadow: 0 0 5px #f7f2fe;
}

.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 55px;
  bottom: 55px;
  background-color: #f4f3f3;
  box-sizing: border-box;
  padding: 10px 0;
  overflow: hidden;
}

.talk_list {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
}

.talk_list li {
  overflow: hidden;
  margin: 20px 0px 30px;
}

.talk_list .left_word img {
  float: left;
  margin-left: 20px;
}

.talk_list .left_word span {
  float: left;
  /* background-color: #fe9697; */
  background-color: #2e1cf7;
  padding: 10px 15px;
  max-width: 290px;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  margin-left: 13px;
  position: relative;
  line-height: 24px;
}

.talk_list .left_word span:before {
  content: '';
  position: absolute;
  left: -8px;
  top: 3px;
  width: 13px;
  height: 12px;
  background: url(../../assets/images/corner01.png) no-repeat;
}

.talk_list .right_word img {
  float: right;
  margin-right: 20px;
}

.talk_list .right_word span {
  float: right;
  background-color: #fff;
  padding: 10px 15px;
  max-width: 290px;
  border-radius: 12px;
  font-size: 16px;
  color: #000;
  margin-right: 13px;
  position: relative;
  line-height: 24px;
}

.talk_list .right_word span:before {
  content: '';
  position: absolute;
  right: -8px;
  top: 3px;
  width: 13px;
  height: 12px;
  background: url(../../assets/images/corner02.png) no-repeat;
}

.drag_bar {
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: #fff;
  height: 100%;
  width: 6px;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f3f3;
}

.drager {
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: #cdcdcd;
  height: 100px;
  width: 6px;
  border-radius: 3px;
  cursor: pointer;
}

.footer {
  width: 100%;
  height: 55px;
  left: 0px;
  bottom: 0px;
  background-color: #fff;
  position: absolute;
  padding: 0px 60px;
}

.footer img {
  float: left;
  margin: 8px 0 0 20px;
}

.input_txt {
  float: left;
  width: 70%;
  height: 37px;
  border: 0px;
  background-color: #f4f3f3;
  margin: 9px 0 0 20px;
  border-radius: 8px;
  padding: 0px;
  outline: none;
  text-indent: 15px;
}

.input_sub {
  float: left;
  width: 10%;
  height: 37px;
  border: 0px;
  /* background-color: #fe9697; */
  background-color: #2e1cf7;
  margin: 9px 0 0 15px;
  border-radius: 8px;
  padding: 0px;
  outline: none;
  color: #fff;
  cursor: pointer;
}
</style>