<template>
  <div id="AttendClassNav">
    <div class="attendClass-progress">
      <div class="mainProgress">
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="0" to="/AttendClass" tag="a"><i></i> <span>企业信息</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="1" to="/AttendClass/AttendClassQyjbm"tag="a"><i></i> <span>企业基本面</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="2" to="/AttendClass/AttendClassHgzcfx" tag="a"><i></i> <span>宏观政策分析</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="3" to="/AttendClass/AttendClassHyqyfx" tag="a"><i></i> <span>行业区域分析</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"> <router-link data-num="4" to="/AttendClass/AttendClassCwfx"  tag="a"><i></i> <span>财务分析</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="5" to="/AttendClass/AttendClassMxfx" tag="a"><i></i> <span>模型分析</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="6" to="/AttendClass/AttendClassPjbg" tag="a"><i></i> <span>评级报告</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="7" to="/AttendClass/AttendClassShps" tag="a"><i></i> <span>上会评审</span></router-link></a>
        <p></p>
        <a href="javascript:void(0);" v-on:click="onLink()"><router-link data-num="8" to="/AttendClass/AttendClassPsgl" tag="a"><i></i> <span>评审管理</span></router-link></a>
      </div>
    </div>
    <div class="attendClass-operation">
      <input type="text">
      <button class="btn">请选择分析的企业</button>
      <button class="btn">历史练习</button>
    </div>
  </div>
</template>

<script>

  export default {
    mounted: function () {
      this.onLink();

    },
    methods: {
      onLink: function () {
        var _index= $('.mainProgress').find('.router-link-exact-active').attr('data-num');
        var aAll=$('.mainProgress').find('i').parent();
        $.each(aAll, function (index, item) {
          if(index <= _index){
            $(aAll[index]).css('background','#247e8f');
            $(aAll[index]).find('i').css('background','#91c255');

          }else {
            $(aAll[index]).css('background','#f0f0f0');
            $(aAll[index]).find('i').css('background','#f0f0f0');
          }
        });

      }
    },
    created: function () {

    }


  }
</script>

<style lang="scss" type="text/scss">
  #AttendClassNav{
    .attendClass-operation{
      height: 50px;
      width: 100%;
      margin: 20px 0 0 0;
      button{
        background: #169bd5;
        color: #ffffff;
        margin: 0 20px;
        border:0;
      }
      input{
        vertical-align: middle;
        margin: 0 20px 0 0 ;
        border:0;
        width: 16%;
        padding: 5px 10px;
        background: #fafafa;
        height: 30px;
      }
    }
    .mainProgress{
      margin: 10px auto;
      width: 100%;
      height: 100px;
      line-height: 30px;
      font-size: 0;
      text-align: center;
      padding: 20px 0;
      p{
        border:1px solid #f0f0f0;
        background: #f0f0f0;
        height: 10px;
        width: 9%;
        margin:0;
        vertical-align: middle;
        display: inline-block;
      }
      a{
        border:1px solid #f0f0f0;
        height: 30px;
        width: 30px;
        padding: 0px;
        border-radius: 50%;
        display: inline-block;
        margin: 0;
        font-size: 16px;
        vertical-align: top;
        text-decoration: none;
        background: #f0f0f0;
        box-shadow: 0 0 10px #f0f0f0;
        position: relative;
        i{
          height: 15px;
          width: 15px;
          border-radius: 50%;
          display: inline-block;
          background: #f0f0f0;
          position: absolute;
          top:24%;
          left:24%;
        }
        span{
          margin: 60px 0 0 -35px;
          width: 100px;
          display: inline-block;
        }
      }
    }
  }
</style>

