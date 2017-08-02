<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//  import vHeader  from './components/common/Header'
//
//  import vFooter  from './components/common/Footer'

  import jquery  from '../static/js/jquery-1.11.3.js'

  import bootstrap  from '../node_modules/bootstrap/dist/js/bootstrap.min'

  import Echarts  from '../static/js/echarts.min'


  export default {

    name: 'app',

    components: {
//      vHeader,
//      vFooter,
      jquery,
      bootstrap,
      Echarts
    }

  }
</script>


<style lang="scss" type="text/scss" >
  @import '/static/css/bootstrap.css';
  // 尾部沉底
  html {
    height: 100%;
  }
  body {
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: 120px;
  }
  .custom-container{
    width: 100%;
    padding: 0 50px;
    // 自定义容器 - header
    .custom-container-header{

    }
    // 自定义容器 - 主体内容
    .custom-container-section{
      background-color: #FFFFFF;
      margin:50px auto 40px;
      border-radius: 5px;
      /*padding-top: 20px;*/
      padding: 20px;
      /*overflow: hidden;*/
    }
    // 自定义容器 - 页尾
    .custom-container-footer{

    }
  }

  //提示文字
  .course-title{
    margin:40px 0 30px 15px;
    h4{
      font-size: 18px;
      color: #666;
      span{
        font-size: 13px;
        padding-left:2px;
      }
    }
    a{
      font-size: 16px;
      color: #666;
      text-decoration: none;
      span{
        font-size: 14px;
      }
    }
  }

  //我的课程
  .course{
    .courseBox{
    //width:500px;
      width: 100%;
      height:490px;
      border-radius: 5px;
      -webkit-box-shadow: 2px 2px 10px #ddd;
      -moz-box-shadow: 2px 2px 10px #ddd;
      box-shadow: 2px 2px 10px #ddd;
      img{
        width: 100%;
        height:100%;
      }
    }
  }

  //课程进度
  .coursePro{
    .proBox{
      width:100%;
      height:150px;
      border-radius: 5px;
      -webkit-box-shadow: 2px 2px 10px #ddd;
      -moz-box-shadow: 2px 2px 10px #ddd;
      box-shadow: 2px 2px 10px #ddd;
      clear: both;
      .c-progress{
        padding:20px 30px 0;
        span{
          color: #6F6F6F;
        }
        .proSpan{
          margin-left:10px;
        }
        p{
          width:530px;
          height: 25px;
          vertical-align: -6px;
          display: inline-block;
          border:1px solid #eaeff3;
          background-color: #fff9f9;
          position: relative;
          b{
            height: 25px;
            position: absolute;
            background: -webkit-linear-gradient(left, #79d5d8 , #6e83f8); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #79d5d8 , #6e83f8); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right,#79d5d8 , #6e83f8); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #79d5d8 , #6e83f8);
          }
        }

      }
      .progressOne b{
        width: 70%;
      }
      .progressTwo b{
        width: 50%;
      }
    }

  //系统公告
    .systemBox{
      width:100%;
      border-radius: 5px;
      -webkit-box-shadow: 2px 2px 10px #ddd;
      -moz-box-shadow: 2px 2px 10px #ddd;
      box-shadow: 2px 2px 10px #ddd;
      .systemTable{
        border-radius: 5px;
        thead{
          background-color: #7ad9d7;
          color: #fff;
          th{
            text-align: center;
          }
        }
        tbody{
          tr:hover td{
            color: #ECA8B2;
          }
          tr:hover a{
            color: #ECA8B2;
          }
          td{
            color:#6F6F6F;
            font-size: 14px;
            text-align: center;
            border-top: 1px solid #F1F1F1;
            a{
              color:#6F6F6F;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  //课程实践
  .practice{
    .practiceTable{
      border-radius: 5px;
      -webkit-box-shadow: 2px 2px 10px #ddd;
      -moz-box-shadow: 2px 2px 10px #ddd;
      box-shadow: 2px 2px 10px #ddd;
      thead{
        background-color: #7ad9d7;
        color: #fff;
        th{
          text-align: center;
        }
      }
      tbody{
        tr:hover td{
          color: #ECA8B2;
        }
        tr:hover a{
          color: #ECA8B2;
        }
        td{
          padding: 11px 8px;
          color:#6F6F6F;
          font-size: 14px;
          text-align: center;
          border-top: 1px solid #F1F1F1;
          a{
            color:#6F6F6F;
            text-decoration: none;
          }
        }
      }
    }
  }

  //待办事项
  .dealt{
    .dealtTable{
      border-radius: 5px;
      -webkit-box-shadow: 2px 2px 10px #ddd;
      -moz-box-shadow: 2px 2px 10px #ddd;
      box-shadow: 2px 2px 10px #ddd;
      thead{
        background-color: #7ad9d7;
        color: #fff;
        th{
          text-align: center;
        }
      }
      tbody{
        tr:hover td{
          color: #ECA8B2;
        }
        tr:hover a{
          color: #ECA8B2;
        }
        td{
          padding: 11px 8px;
          color:#6F6F6F;
          font-size: 14px;
          text-align: center;
          border-top: 1px solid #F1F1F1;
          a{
            color:#6F6F6F;
            text-decoration: none;
          }
        }
      }
    }
  }

  //我的结论
  .myConclusion{
    box-shadow: 2px 2px 10px #ddd;
    border: 1px solid #CCCCCC;
    padding: 10px;
    width:100%;
  }

  //按钮统一样式
  .btn-query{//查询
    background: #f2b45f;
    color: #ffffff;
    padding:4px 20px;
    border-radius: 7px;
  }
  .btn-search{//搜索
    background: #7386f9;
    color: #ffffff;
    padding:4px 20px;
    border-radius: 7px;
  }
  .btn-project{//立项
    background: #1bd49d;
    color: #ffffff;
    padding:4px 20px;
    border-radius: 7px;
  }
  .btn-reset{//重置
    background: #d0263a;
    color: #ffffff;
    padding:4px 20px;
    border-radius: 7px;
  }
  .btn:hover{
    color: #ffffff;
  }
  .input-text{
    border:1px solid #cccccc;
    border-radius: 4px;
    padding:3px 10px;
    width: 240px;
  }

  /*小胖子的媒体查询*/
  @media (max-width: 1440px) {
    body a { font-size: 14px; }
    body span { font-size: 12px; }
    body h2, body h3 { font-size: 16px; }
  }
  @media (min-width: 1441px) {
    /*body {overflow-x: visible; }*/
    body a { font-size: 16px; }
    body span { font-size: 14px; }
    body h2, body h3 { font-size: 18px; }
  }
</style>
