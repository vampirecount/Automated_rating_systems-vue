<template>


  <!--页尾-->
  <div class="footer site-footer">
      <p class="first-p">ICP XXXX 大公信用软件有限公司 版权所有</p>
      <p>Copyright 1994-2016 All R</p>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  .site-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    /*height: 100px;*/
    /*width: 100%;*/
  }
  .footer {
    width: 100%;
    /*margin-top: 100px;*/
    background: url("../../../static/img/footer-bg.png") no-repeat bottom;
    background-size: 100% 100%;
    height: 120px;
    /*border: thin solid black;*/
    p {
      text-align: center;
      color: #fff;
      font-size: 14px;
      line-height: 30px;
      &.first-p {
        padding-top: 30px;
      }
    }
  }

</style>
