<template>
  <div>
    <v-header></v-header>
    <div class="custom-container">
      <div class="custom-container-section">
    <div id="JiaoXueJiHua">
      <div class="col-md-10">
        <div class="JiaoXueJiHuaDiv">
          <a href="">
            <div class="JiaoXueJiHuaDiv-top">
              <img src="../../../static/img/jxjh.png" alt="" class="jxjhTitle">
            </div>
            <div class="JiaoXueJiHuaDiv-bottom">
              <h3>2016年下学期北京大学实训教学</h3>
              <p>
                <img src="../../../static/img/jiangshi.png" alt="">
                <span>讲师:</span>
                <span>刘靖宇</span>
                <span class="pull-right">共6个课</span>
              </p>
            </div>
          </a>
        </div>
        <div class="JiaoXueJiHuaDiv">
          <a href="">
            <div class="JiaoXueJiHuaDiv-top">
              <img src="../../../static/img/jxjh.png" alt="" class="jxjhTitle">
            </div>
            <div class="JiaoXueJiHuaDiv-bottom">
              <h3>2016年下学期北京大学实训教学</h3>
              <p>
                <img src="../../../static/img/jiangshi.png" alt="">
                <span>讲师:</span>
                <span>刘靖宇</span>
                <span class="pull-right">共6个课</span>
              </p>
            </div>
          </a>
        </div>
        <div class="JiaoXueJiHuaDiv">
          <a href="">
            <div class="JiaoXueJiHuaDiv-top">
              <img src="../../../static/img/jxjh.png" alt="" class="jxjhTitle">
            </div>
            <div class="JiaoXueJiHuaDiv-bottom">
              <h3>2016年下学期北京大学实训教学</h3>
              <p>
                <img src="../../../static/img/jiangshi.png" alt="">
                <span>讲师:</span>
                <span>刘靖宇</span>
                <span class="pull-right">共6个课</span>
              </p>
            </div>
          </a>
        </div>
        <div class="JiaoXueJiHuaDiv">
          <a href="">
            <div class="JiaoXueJiHuaDiv-top">
              <img src="../../../static/img/jxjh.png" alt="" class="jxjhTitle">
            </div>
            <div class="JiaoXueJiHuaDiv-bottom">
              <h3>2016年下学期北京大学实训教学</h3>
              <p>
                <img src="../../../static/img/jiangshi.png" alt="">
                <span>讲师:</span>
                <span>刘靖宇</span>
                <span class="pull-right">共6个课</span>
              </p>
            </div>
          </a>
        </div>
        <div class="JiaoXueJiHuaDiv">
          <a href="">
            <div class="JiaoXueJiHuaDiv-top">
              <img src="../../../static/img/jxjh.png" alt="" class="jxjhTitle">
            </div>
            <div class="JiaoXueJiHuaDiv-bottom">
              <h3>2016年下学期北京大学实训教学</h3>
              <p>
                <img src="../../../static/img/jiangshi.png" alt="">
                <span>讲师:</span>
                <span>刘靖宇</span>
                <span class="pull-right">共6个课</span>
              </p>
            </div>
          </a>
        </div>
        <div class="JiaoXueJiHuaDiv">
          <div class="JiaoXueJiHuaDiv-top">
            <img src="../../../static/img/jqqd.png" alt="" class="jxjhJqqd">
          </div>
          <div class="JiaoXueJiHuaDiv-bottom">
            <h3>2016年下学期北京大学实训教学</h3>
            <p>
              <img src="../../../static/img/jiangshi.png" alt="">
              <span>讲师:</span>
              <span>刘靖宇</span>
              <span class="pull-right">共6个课</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="JiaoXueJiHuaR">
          <img src="../../../static/img/jxjhR.png" alt="">
        </div>
      </div>
    </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="es6">
  import vHeader from '../common/Header.vue'
  import vFooter from '../common/Footer.vue'
  export default {

    name: 'JiaoXueJiHua',
    components: {
      vHeader,
      vFooter
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  #JiaoXueJiHua {
    overflow: hidden;
    .JiaoXueJiHuaDiv {
      width: 29%;
      float: left;
      margin: 20px;
      box-shadow: 0px 0px 5px #aaa;
      border-bottom: 2px solid #FCAF49;
      div.JiaoXueJiHuaDiv-top {
        width: 100%;
        height: 243px;
        box-shadow: 2px 2px 2px #eee;
        img.jxjhTitle {
          width: 100%;
          height: 100%;
        }
        img.jxjhJqqd {
          display: block;
          position: relative;
          top: 45%;
          margin: 0 auto;
        }
      }
      div.JiaoXueJiHuaDiv-bottom {
        padding: 10px 5px;
        h3 {
          padding: 5px 0;
        }
        img {
          margin-right: 10px;
        }
      }
    }
    .JiaoXueJiHuaR {
      border: 1px solid #eee;
      box-shadow: 2px 2px 2px #eee;
      padding: 20px;
      margin-top: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

