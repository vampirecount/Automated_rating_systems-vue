<template>
  <div id="MyClassIndex">
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
      <div class="coverDiv">
        <h2 class="title">企业评级实践教学系统</h2>
        <div class="lock"></div>
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
      <div class="coverDiv">
        <h2 class="title">企业评级实践教学系统</h2>
        <div class="lock" style="background-position:top right; "></div>
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <img src="../../../../static/img/biao.png" alt="">
      </div>
    </div>
    <div class="curriculumPractice-2-div pull-left">
      <div class="curriculumPractice-2-div-content">
        <!--<img src="img/biao.png" alt="">-->
      </div>
      <div class="coverDiv" style="background: none;">
        <div class="lock" style="background: none; text-align: center;">MORE</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyClassIndex',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  #MyClassIndex{
    .curriculumPractice-2-div{
      background: url("../../../../static/img/cpt-2.png") no-repeat center;
      height:333px;
      width:455px;
      padding:75px 0;
      margin: 10px 9px;
      cursor: pointer;
      position: relative;
      .curriculumPractice-2-div-content{
        height: 240px;
        width:90%;
        background: #ffffff;
        margin: 0 auto;
        img{
          width: 100%;
          height:100%;
        }
      }
      .coverDiv{
        width: 100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        z-index: 10;
        background: rgba(0,0,0,0.4);
        h2.title{
          margin: 75px auto -20px;
          line-height: 40px;
          width: 240px;
          background: #ff9100;
          color: #FFFFFF;
          font-size: 20px;
          text-align: center;
        }
        .lock{
          height: 88px;
          width: 88px;
          background: url("../../../../static/img/lock.png");
          margin: 14% auto;
        }
      }
    }
  }
</style>

