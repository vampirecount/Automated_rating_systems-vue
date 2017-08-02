<template>
  <div id="AttendClassHgzcfx">
    <div class="col-md-8 coursePro">
      <!--1-->
      <h2 style="margin-top: 0;">国内生产总值</h2>
      <div class="systemBox" style="height: 265px;" id="Gnsczz"></div>
      <!--2-->
      <h2>生产贡献率</h2>
      <div class="systemBox" style="height: 265px;" id="Scgxl"></div>
      <!--3-->
      <h2>工业增长率</h2>
      <div class="systemBox" style="height: 265px;" id="Gyzzl"></div>
      <!--4-->
      <h2>居民消费价格指数</h2>
      <div class="systemBox" style="height: 265px;" id="Jmxfjgzs"></div>
      <!--5-->
      <h2>货币供应量</h2>
      <div class="systemBox" style="height: 265px;" id="Hbgyl"></div>
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
       // 国内生产总值
       EchartsList._gnsczz(this.$echarts, 'Gnsczz');
       // 生产贡献率
       EchartsList._scgxl(this.$echarts, 'Scgxl');
        // 工业增长率
       EchartsList._gyzzl(this.$echarts, 'Gyzzl');
        // 居民消费价格指数
       EchartsList._jmxfjgzs(this.$echarts, 'Jmxfjgzs');
        // 货币供应量
       EchartsList._hbgyl(this.$echarts, 'Hbgyl');
     },
     methods: {
     },
     created: function () {

     }
   }
</script>

<style lang="scss" type="text/scss">
  #AttendClassHgzcfx{

  }
</style>

