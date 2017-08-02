<template>
  <div>
    <v-header></v-header>
    <div class="custom-container">
      <div class="custom-container-section">
        <div class="coursePro" id="MyGrades">
          <div class="course-title">
            <h4 class="pull-left">我的成绩管理 <span>（信用1701班：stu01）</span></h4>
            <a class="pull-right" href="">More <span> 》</span></a>
            <p class="clearfix"></p>
          </div>
          <!--表格-->
          <div class="systemBox">
            <table class="table systemTable">
              <thead>
              <tr>
                <th>教学计划名称</th>
                <th>学期</th>
                <th>周期（天）</th>
                <th>课程</th>
                <th>分数</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2017年企业信用评级计划一</td>
                <td>第一学期</td>
                <td>14</td>
                <td>课程A，课程B</td>
                <td>88</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>2017年企业信用评级计划一</td>
                <td>第一学期</td>
                <td>14</td>
                <td>课程A，课程B</td>
                <td>88</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>2017年企业信用评级计划一</td>
                <td>第一学期</td>
                <td>14</td>
                <td>课程A，课程B</td>
                <td>88</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>2017年企业信用评级计划一</td>
                <td>第一学期</td>
                <td>14</td>
                <td>课程A，课程B</td>
                <td>88</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>2017年企业信用评级计划一</td>
                <td>第一学期</td>
                <td>14</td>
                <td>课程A，课程B</td>
                <td>88</td>
                <td><a href="">查看</a></td>
              </tr>
              <tr>
                <td>2017年企业信用评级计划一</td>
                <td>第一学期</td>
                <td>14</td>
                <td>课程A，课程B</td>
                <td>88</td>
                <td><a href="">查看</a></td>
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

<script type="es6">
  import vHeader from '../common/Header.vue'

  import vFooter from '../common/Footer.vue'
  export default {

    name: 'MyGrades',
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
  #MyGrades{
    .course-title{
      margin: 0 0 0 0;
    }
  }
</style>

