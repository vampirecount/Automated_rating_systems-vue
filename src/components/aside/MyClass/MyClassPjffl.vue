<template>
  <div id="MyClassPjffl">
    <div class="course-title">
      <h4 class="pull-left">评级方法总论   <span>General rating method</span></h4>
      <p class="clearfix"></p>
    </div>
    <div class="curriculumPractice-3-top">
      <div class="curriculumPractice-3-div pull-left">
        <span>概 要</span>
      </div>
      <div class="curriculumPractice-3-div pull-left">
        <span>定性分析</span>
      </div>
      <div class="curriculumPractice-3-div pull-left">
        <span>定量分析</span>
      </div>
      <div class="curriculumPractice-3-div pull-left">
        <span>评级架构</span>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="curriculumPractice-3-content">
      <p>大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通过技术创新和产品创新全面、快速推动信用体系的发展与变革，为各类信用主体创造新的信用经济价值。</p>
      <p>公司自创立以来，一直秉承“以用户满意为依归”的经营理念，保持稳健经营、持续创新、开放合作的管理态度，作为全球知名信用评级机构大公国际集团的全资子公司，依托科学先进的大公信用评级原理，卓越的科研实力和雄厚的人才储备，坚定不移的追随集团走民族品牌国际化的发展道路，已成为中国最大的信用软件公司。</p>
    </div>
    <div class="curriculumPractice-3-bot">
      <h2>大公信用评级基本思路及基本框架</h2>
      <img src="../../../../static/img/Rating-5.png" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss" >
#MyClassPjffl {
  .curriculumPractice-3-top {
    .curriculumPractice-3-div {
      margin: 15px 1%;
      width: 22%;
      /*height: 175px;*/
      cursor: pointer;
      span {
        display: inline-block;
        color: #ffffff;
        margin: 19% 10%;
        font-size: 27px;
      }
    }
    .curriculumPractice-3-div:nth-child(1) {
      background: url("../../../../static/img/Rating-1.png") no-repeat;
      background-size:  100% 100%;
    }
    .curriculumPractice-3-div:nth-child(2) {
      background: url("../../../../static/img/Rating-2.png") no-repeat;
      background-size: 100% 100%;
    }
    .curriculumPractice-3-div:nth-child(3) {
      background: url("../../../../static/img/Rating-3.png") no-repeat;
      background-size:  100% 100%;
    }
    .curriculumPractice-3-div:nth-child(4) {
      background: url("../../../../static/img/Rating-4.png") no-repeat;
      background-size:  100% 100%;
    }
  }
  .curriculumPractice-3-content {
    p {
      text-indent: 2em;
      line-height: 30px;
      font-size: 16px;
      color: #8c8c8c;
    }
  }
  .curriculumPractice-3-bot {
    text-align: center;
    h2 {
      font-size: 22px;
      padding: 20px 0;
    }
  }
}
</style>

