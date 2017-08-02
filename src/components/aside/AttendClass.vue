<template>
  <div>
    <v-header></v-header>

    <div class="custom-container">
      <div class="custom-container-section">
        <div class="curriculumPractice" id="AttendClass">
          <!--信用数据库-->
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12 attendClass-title">
                  <h2>练习</h2>
                  <h3>
                    <span>课程内容 :</span>
                    <span>企业基本信息/基本面分析</span>
                  </h3>
                  <h3>
                    <span>班级 :</span>
                    <span>信用1701班</span>
                  </h3>
                  <h3>
                    <span>课程练习 :</span>
                  </h3>
                </div>
              </div>
              <div class="row attendClass-content">
                <div class="col-md-12">
                  <_AttendClassNav></_AttendClassNav>
                </div>
                <div class="row">
                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>

  import _AttendClassNav  from  './AttendClass/AttendClassNav'

  import vHeader from '../common/Header.vue'

  import vFooter from '../common/Footer.vue'

  export default {

    components: {
      _AttendClassNav,
      vHeader,
      vFooter
    },
    created: function () {

    }




  }
</script>

<style lang="scss" type="text/scss">
  #AttendClass{
    padding: 20px 40px;
    .attendClass-title{
      font-size: 16px;
      color: #8c8c8c;
      h2{
        padding:20px 0;
        font-size: 22px;
      }
      h3{
        padding:10px 0;
      }
    }
    .attendClass-content{
      box-shadow: 2px 2px 10px #ddd;
      padding: 15px;
      .attendClass-progress{
        height: 150px;
        width: 100%;
        /*border:1px solid #bf8e9f;*/
      }
      .coursePro{
        h2{
          margin: 20px 0;
        }
        .systemBox{
          width: 100%;
          height: auto;
          .systemTable{
            thead{
              tr:first-child{
                th{
                  border-bottom: 0px;
                }
              }
            }
            tbody{
              tr{
                td{
                  button{
                    padding:2px 12px;
                    font-size: 12px;
                    border:0;
                    margin:0px 6px;
                  }
                  button.btn-default{
                    background: #a1a1a1;
                    color: #ffffff;
                  }
                  button.btn-success{
                    background: #169bd5;
                  }
                }
              }
            }
          }
        }
        .btn-group {
          .dropdown-toggle {
            min-width: 200px;
            text-align: left;
            padding: 5px 10px;
            font-size: 14px;
          }
          .dropdown-menu {
            li {
              width: 200px;
              line-height: 30px;
              padding: 0 10px;
            }
          }
        }
        .conclusion{
          height: 265px;
          border:1px solid #ddd;
          border-radius: 4px;
          padding:10px;
          box-shadow: 2px 2px 2px #ddd;
        }
        button.btn-block{
          background: #7ad9d7;
          margin: 20px 0;
          color: #ffffff;
        }
      }
      .attendClass-interpretation{
        box-shadow: 2px 2px 10px #ddd;
        padding: 10px;
        border-radius: 4px;
        margin: 35px 0;
        h2{
          margin:10px 0;
          color: #8c8c8c;
        }
        a{
          padding: 2px;
          display: block;
          margin: 20px 0;
          color: #8c8c8c;
          line-height: 20px;
        }
        a:nth-child(even){
          background: #e4f7f7;
        }
      }
    }
    .attendClass-preparation{
      margin:20px 0 40px;
      p{
        padding:10px 0;
        color: #8c8c8c;
        span.addon{
          display: inline-block;
          height: 22px;
          width: 22px;
          vertical-align: bottom;
          margin: 0 0 0 10px;
          background: url("../../../static/img/add.png");
        }
      }
    }
  }
</style>

