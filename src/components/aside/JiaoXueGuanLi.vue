
<template>
  <div>
    <v-header></v-header>
    <div class="custom-container">
      <div class="custom-container-section">
        <div class="coursePro" id="JiaoXueGuanLi">
          <div class="course-title">
            <h4 class="pull-left">成绩管理 <span>achievement management</span></h4>
            <p class="clearfix"></p>
          </div>
          <div class="course-operation">
            <ul>
              <li>
                <span>班级名称 ：</span>
                <input type="text" placeholder="请输入班级名称" class="input-text" />
              </li>
              <li>
                <button class="btn btn-query">查询</button>
              </li>
              <li>
                <button class="btn btn-reset">重置</button>
              </li>
              <li>
                <button class="btn btn-query">查询学生成绩</button>
              </li>
              <p class="clearfix"></p>
            </ul>
          </div>
          <!--表格-->
          <div class="systemBox">
            <table class="table systemTable">
              <thead>
              <tr>
                <th><input type="checkbox"></th>
                <th>教学计划名称</th>
                <th>学期</th>
                <th>班级名称</th>
                <th>负责教师</th>
                <th>班级人数</th>
                <th>选修课程</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><input type="checkbox"></td>
                <td>肥城市城市资产经营有限公司</td>
                <td>交通运输、仓储和邮政业</td>
                <td>国有企业</td>
                <td>2002-11-14</td>
                <td>非上市</td>
                <td>2002-11-14</td>
                <td><button class="btn btn-default">查看详情</button></td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xs1</td>
                <td>准备阶段</td>
                <td>2002-11-14</td>
                <td><button class="btn btn-default">查看详情</button></td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xs1</td>
                <td>准备阶段</td>
                <td>2002-11-14</td>
                <td><button class="btn btn-default">查看详情</button></td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xs1</td>
                <td>准备阶段</td>
                <td>2002-11-14</td>
                <td><button class="btn btn-default">查看详情</button></td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xs1</td>
                <td>准备阶段</td>
                <td>2002-11-14</td>
                <td><button class="btn btn-default">查看详情</button></td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xs1</td>
                <td>准备阶段</td>
                <td>2002-11-14</td>
                <td><button class="btn btn-default">查看详情</button></td>
              </tr>
              </tbody>
            </table>
            <div class="fenye text-right"></div>
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
    name: 'hello',
    components: {
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
<style lang="scss" type="text/scss">
  #JiaoXueGuanLi{
      padding: 0px 30px;
      .course-title{
        margin: 0 0 20px 0;
        /*padding:0 0 15px 0;*/
        border-bottom: 1px solid #CCCCCC;
      }
      .course-operation{
        ul{
          li{
            float: left;
            margin: 0 2% 0 0;
            input{
              border:1px solid #cccccc;
              border-radius: 4px;
              padding:3px 10px;
              width: 240px;
            }
            button.btn-default{
              background: #f2b45f;
              border:0;
              padding: 4px 12px;
            }
            button.btn-success{
              background: #d0263a;
              border:0;
              padding: 4px 12px;
            }
          }
        }
      }
      .systemBox{
        margin: 20px 0;
        width: 100%;
        border-radius: 5px;
        -webkit-box-shadow: 2px 2px 10px #ddd;
        box-shadow: 2px 2px 10px #ddd;
        .systemTable{
          thead{
            background-color: #7ad9d7;
            color: #fff;
          }
          /*button{*/
            /*padding: 0px 12px;*/
          /*}*/
        }
      }
    }
</style>
