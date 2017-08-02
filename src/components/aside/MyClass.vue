
<template>
    <div>
      <v-header></v-header>
      <div class="custom-container">
        <div class="custom-container-section">
          <!--我的课程-->
          <div class="row" id="MyClass">
            <div class="col-md-2">
              <MyClassNav></MyClassNav>
            </div>
            <div class="col-md-10 coursePro">
              <!--<MyClassIndex></MyClassIndex>-->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
</template>
<script type="es6">
  import MyClassIndex  from './MyClass/MyClassIndex'

  import MyClassNav  from './MyClass/MyClassNav'
  import vHeader from '../common/Header.vue'

  import vFooter from '../common/Footer.vue'
  export default {
    name: 'hello',
    components: {

      MyClassIndex,
      MyClassNav,
      vHeader,
      vFooter

    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss" type="text/scss" >
  #MyClass{
    .col-md-2{
      ul{
        border-radius: 10px;
        box-shadow: 2px 2px 10px #ddd;
        li{
          line-height: 70px;
          margin: 0px 10px;
          border-radius: 4px;
          text-align: center;
          font-size: 22px;
          a{
            color: #8c8c8c;
          }
        }
        li.active{
          background: #73bcfa;
          a{
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
    .coursePro{
      padding:0 30px;
      .course-title{
        margin: 0 0 20px 0;
      }
      .course-operation{
        ul{
          li{
            float: left;
            margin: 0 2% 0 0;
          }
        }
      }
      .systemBox{
        margin: 80px 0;
        width: 100%;
        height:auto;
      }
    }
  }


  @media (max-width: 1440px) {
    .MyClassTopHr{
      width:65%;
    }
    .MyClassTopHrLc{
      width:73.9%;
    }
    #MyClassNav ul{
      padding: 10px;
    }
    #MyClassNav ul li{
      line-height: 45px;
      a.rLink{
        font-size: 16px;
      }
    }
    #MyClassKcb ul li .curriculumPractice-div ul li{
      padding: 10px 20px;
    }
  }
  @media (min-width: 1441px) {
    body { overflow-x: visible; }
    .MyClassTopHr{
      width:75%;
    }
    .MyClassTopHrLc{
      width:81%;
    }
    #MyClassNav ul{
      padding: 10px 30px;
    }
    #MyClassNav ul li{
      line-height: 70px;
      a.rLink{
        font-size: 22px;
      }
    }
    #MyClassKcb ul li .curriculumPractice-div ul li{
      padding: 10px 70px 10px 40px;
    }
  }
</style>
