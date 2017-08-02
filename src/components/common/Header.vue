<template>
  <!--导航条-->
  <!--<div class="custom-container custom-header">-->
  <!--<div class="custom-container-header">-->
  <!--<v-header></v-header>-->
  <!--</div>-->
  <!--</div>-->
  <div class="custom-container custom-header">
    <div class="header-bg"></div>
    <div class="custom-container-header">
      <div class="navbars">
        <div class="container containers">
          <!--左侧-->
          <div class="nav-left pull-left">
            <a class="navbar-brand navbarLogo" href="javascript:;">
              <img class="pull-left" src="../../../static/img/nav-logo.png" alt="信用评级实践教学平台">
            </a>
          </div>

          <!--右侧-->
          <div class="nav-right pull-left">
            <ul class="nav-ul" id="nav-router">
              <!--active-->
              <li>
                <router-link to="/home" tag="a" active-class="v-link-active">首页</router-link>
              </li>

              <li>
                <router-link to="/plan" tag="a" active-class="v-link-active">教学计划</router-link>
              </li>

              <li>
                <router-link to="/course" tag="a" active-class="v-link-active">我的课堂</router-link>
              </li>

              <li>
                <router-link to="/database" tag="a" active-class="v-link-active">信用数据库</router-link>
              </li>

              <li>
                <router-link to="/teach" tag="a" active-class="v-link-active">教学管理</router-link>
              </li>
              <li>
                <router-link to="/analyze" tag="a" active-class="v-link-active">统计分析</router-link>
              </li>
              <li>
                <router-link to="/MyGrades" tag="a" active-class="v-link-active">我的成绩</router-link>
              </li>
            </ul>
          </div>

          <div class="nav-user pull-right">
            <img src="../../../static/img/user.png" alt="">
            <a href="javascript:;">{{user.username}}({{user.remarks}})</a>
            <span>/</span>
            <img src="../../../static/img/exit.png" alt="">
            <a href="javascript:;" id="logout" v-on:click="logOut">退出</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>


  export default {
    name: 'header',
    data () {
      return {
        user: {
          username: '--',
          remarks: '--'
        }
      }
    },

    created: function () {

      this.user.username = JSON.parse(window.sessionStorage.getItem('username')).name;

      this.user.remarks = JSON.parse(window.sessionStorage.getItem('username')).remarks;

    },

    methods: {

      logOut () { // UserLogout

        this.$store.dispatch('UserLogout');

        this.$router.push({path: '/login'})

      }

    }
  }
</script>


<style lang="scss" type="text/scss">
  // 自定义容器
  .custom-container {
    width: 100%;
    padding: 0 50px;
    position: relative;
    .header-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 300px;
      z-index: -1;
      background: url("../../../static/img/header-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    // 自定义容器 - header
    .custom-container-header {

    }
  }

  body {
    /*background: url("../../../static/img/header-bg.png") no-repeat;*/
    /*background-size: 100% 100%;*/
    background-color: #eaeff3;
    /*!*height: 585px;*!*/
    /*height: 300px;*/
    /*border: thin solid red;*/
  }

  .navbars {
    /*margin-top: 10px;*/
    .containers {
      /*width: 1280px;*/
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      /*左侧*/
      .nav-left {
        width: 350px;
        .navbarLogo {
          height: 90px;
          display: inline-block;
          padding-left: 0;
          margin-top: 10px;
          img {
            width: 92%;
          }
        }
      }
      /*右侧*/
      .nav-right {
        height: 90px;
        .nav-ul {
          height: 90px;
          line-height: 90px;
          display: inline-block;
          li {
            float: left;
            margin: 0 1px;
            a {
              font-size: 16px;
              color: #fff;
              height: 30px;
              padding: 5px 15px;
              text-decoration: none;
              &.v-link-active {
                border-bottom: 2px solid #7ad9d7;
                color: #fff;
                text-decoration: none;
              }
            }
            &:hover {
              a {
                border-bottom: 2px solid #7ad9d7;
                color: #fff;
                text-decoration: none;
              }
            }

          }
        }
      }
      /*用户*/
      .nav-user {
        height: 90px;
        line-height: 90px;
        margin-left: 1%;
        img {
          width: 10%;
          vertical-align: -2px;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
        }
        span {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 1480px) {
    .navbars {
      .containers {
        .nav-left {
          .navbarLogo {

          }
        }
        .nav-right {
          .nav-ul {
            li {
              a {
                padding: 5px 25px;
              }
            }
          }
        }
      }
    }
  }
</style>
