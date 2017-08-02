<template>

  <div>
    <v-header></v-header>
    <div class="custom-container">
      <div class="custom-container-section">
        <div id="home">
          <!--我的课程-->
          <div class="row">
            <!--左侧-->
            <div class="col-md-5 course">
              <!--提示文字-->
              <div class="course-title">
                <h4 class="pull-left">我的课程 <span>My course</span></h4>
                <a class="pull-right" href="">More <span> 》</span></a>
                <p class="clearfix"></p>
              </div>
              <!--内容-->
              <div class="courseBox">
                <img src="../../../static/img/biao.png" class="img-responsive">
                <router-link to="/AttendClass" tag="a">上课</router-link>
              </div>
            </div>
            <!--右侧-->
            <div class="col-md-7 coursePro">
              <!--课程进度提示文字-->
              <div class="course-title">
                <h4 class="pull-left">课程进度 <span>Curriculum schedule</span></h4>
                <a class="pull-right" href="">More <span> 》</span></a>
                <p class="clearfix"></p>
              </div>
              <!--进度-->
              <div class="proBox">
                <div class="c-progress progressOne">
                  <span>课程进度</span>
                  <span class="proSpan">20%</span>
                  <p><b></b></p>
                </div>
                <div class="c-progress progressTwo">
                  <span>作业完成</span>
                  <span class="proSpan">50%</span>
                  <p><b></b></p>
                </div>
                <p class="c-progress">开课情况<span class="proSpan"> 已开课1节课/共12节课</span></p>
              </div>

              <!--系统公告提示文字-->
              <div class="course-title">
                <h4 class="pull-left">系统公告 <span>System announcement</span></h4>
                <a class="pull-right" href="">More <span> 》</span></a>
                <p class="clearfix"></p>
              </div>
              <!--进度-->
              <div class="systemBox">
                <table class="table systemTable">
                  <thead>
                  <tr>
                    <th>公告内容</th>
                    <th>发布人</th>
                    <th>发布时间</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>公告：同学们，下节课我们把作业交一下。</td>
                    <td>朱险峰</td>
                    <td>2017-06-14 07:30</td>
                    <td>未读</td>
                    <td><a href="">查看</a></td>
                  </tr>
                  <tr>
                    <td>公告：同学们，下节课我们把作业交一下。</td>
                    <td>朱险峰</td>
                    <td>2017-06-14 07:30</td>
                    <td>未读</td>
                    <td><a href="">查看</a></td>
                  </tr>
                  <tr>
                    <td>公告：同学们，下节课我们把作业交一下。</td>
                    <td>朱险峰</td>
                    <td>2017-06-14 07:30</td>
                    <td>未读</td>
                    <td><a href="">查看</a></td>
                  </tr>
                  <tr>
                    <td>公告：同学们，下节课我们把作业交一下。</td>
                    <td>朱险峰</td>
                    <td>2017-06-14 07:30</td>
                    <td>未读</td>
                    <td><a href="">查看</a></td>
                  </tr>
                  <tr>
                    <td>公告：同学们，下节课我们把作业交一下。</td>
                    <td>朱险峰</td>
                    <td>2017-06-14 07:30</td>
                    <td>未读</td>
                    <td><a href="">查看</a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!--课程实践-->
          <div class="practice">
            <!--提示文字-->
            <div class="course-title">
              <h4 class="pull-left">课程实践 <span>My course</span></h4>
              <a class="pull-right" href="">More <span> 》</span></a>
              <p class="clearfix"></p>
            </div>
            <table class="table practiceTable">
              <thead>
              <tr>
                <th>项目编码</th>
                <th>项目名称</th>
                <th>立项时间</th>
                <th>项目负责人</th>
                <th>项目阶段</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xsl</td>
                <td>准备阶段</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xsl</td>
                <td>准备阶段</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xsl</td>
                <td>准备阶段</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xsl</td>
                <td>准备阶段</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xsl</td>
                <td>准备阶段</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>烟台港集团有限公20170516162236（xs1）</td>
                <td>2017-05-16</td>
                <td>xsl</td>
                <td>准备阶段</td>
                <td><a href="">查看</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <!--待办事项-->
          <div class="dealt">
            <!--提示文字-->
            <div class="course-title">
              <h4 class="pull-left">待办事项 <span>My course</span></h4>
              <a class="pull-right" href="">More <span> 》</span></a>
              <p class="clearfix"></p>
            </div>
            <table class="table dealtTable">
              <thead>
              <tr>
                <th>项目编码</th>
                <th>项目名称</th>
                <th>当前立项班级</th>
                <th>立项时间</th>
                <th>当前负责人</th>
                <th>项目阶段</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>PJ20170516-19</td>
                <td>洛阳栾川钼业集团股份有限公司20170511115546（b1）</td>
                <td>班级1</td>
                <td>2017-05-16</td>
                <td>b1</td>
                <td>上会评审</td>
                <td><a href="">处理</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>洛阳栾川钼业集团股份有限公司20170511115546（b1）</td>
                <td>班级1</td>
                <td>2017-05-16</td>
                <td>b1</td>
                <td>上会评审</td>
                <td><a href="">处理</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>洛阳栾川钼业集团股份有限公司20170511115546（b1）</td>
                <td>班级1</td>
                <td>2017-05-16</td>
                <td>b1</td>
                <td>上会评审</td>
                <td><a href="">处理</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>洛阳栾川钼业集团股份有限公司20170511115546（b1）</td>
                <td>班级1</td>
                <td>2017-05-16</td>
                <td>b1</td>
                <td>上会评审</td>
                <td><a href="">处理</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>洛阳栾川钼业集团股份有限公司20170511115546（b1）</td>
                <td>班级1</td>
                <td>2017-05-16</td>
                <td>b1</td>
                <td>上会评审</td>
                <td><a href="">处理</a></td>
              </tr>
              <tr>
                <td>PJ20170516-19</td>
                <td>洛阳栾川钼业集团股份有限公司20170511115546（b1）</td>
                <td>班级1</td>
                <td>2017-05-16</td>
                <td>b1</td>
                <td>上会评审</td>
                <td><a href="">处理</a></td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>

  import vHeader from '../common/Header.vue'

  import vFooter from '../common/Footer.vue'

  export default {

    name: 'home',

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

</style>
