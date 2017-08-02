<template>
  <div id="AttendClassHyqyfx">
    <div class="col-md-8 coursePro">
      <!--1-->
      <h2 style="margin-top: 0;">地区生产总值</h2>
      <div class="systemBox" style="height: 265px;" id="Dqsczz"></div>
      <!--2-->
      <h2>地方财政预算内收入</h2>
      <div class="systemBox" style="height: 265px;" id="Dfczysnsr"></div>
      <!--3-->
      <h2>进出口总值</h2>
      <div class="systemBox" style="height: 265px;" id="Jckzz"></div>
      <!--4-->
      <h2>工业增加值</h2>
      <div class="systemBox" style="height: 265px;" id="Gyzzz"></div>
      <!--5-->
      <h2>社会消费品零售总额</h2>
      <div class="systemBox" style="height: 265px;" id="Shxfplsze"></div>
      <h2>我的分析结论</h2>
      <textarea class="myConclusion" name="" id="" cols="130" rows="9"></textarea>
      <button class="btn btn-block">提交</button>
    </div>
    <div class="col-md-4">
      <div class="attendClass-interpretation">
        <h2>业务解读：</h2>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
      </div>
      <div class="attendClass-interpretation">
        <h2>业务解读：</h2>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
      </div>
      <div class="attendClass-interpretation">
        <h2>业务解读：</h2>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
        <a href="">
          <span>（1）</span>
          <span>项目名称格式：受评主体+评级类型+时间+(立项人)</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import EchartsList  from '../../../../static/js/echartsList'
  export default {
    name: 'AttendClassHgzcfx',
    components: {
      EchartsList
    },
    mounted: function () {
      // 地区生产总值
      EchartsList._dqsczz(this.$echarts, 'Dqsczz');
      // 地方财政预算内收入
      EchartsList._dfczysnsr(this.$echarts, 'Dfczysnsr');
      // 进出口总值
      EchartsList._jckzz(this.$echarts, 'Jckzz');
      // 工业增加值
      EchartsList._gyzzz(this.$echarts, 'Gyzzz');
      // 社会消费品零售总额
      EchartsList._shxfplsze(this.$echarts, 'Shxfplsze');



    },
    methods: {
    },
    created: function () {
      window.resize=function () {
        // 地区生产总值
        EchartsList._dqsczz(this.$echarts, 'Dqsczz');
        // 地方财政预算内收入
        EchartsList._dfczysnsr(this.$echarts, 'Dfczysnsr');
        // 进出口总值
        EchartsList._jckzz(this.$echarts, 'Jckzz');
        // 工业增加值
        EchartsList._gyzzz(this.$echarts, 'Gyzzz');
        // 社会消费品零售总额
        EchartsList._shxfplsze(this.$echarts, 'Shxfplsze');
      }
    }
  }
</script>

<style>

</style>

