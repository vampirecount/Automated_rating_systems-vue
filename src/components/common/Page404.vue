<template>

  <div class="m404">

    <div style="height: 100px;"></div>

    <a href="javascript:;">

      <img v-on:click="goBack" src="../../../static/img/page404.png"

           width="409" height="177"

           alt="“真的很抱歉，我们搞丢了页面……”要不去网站首页看看？" border="0">

    </a>

  </div>

</template>

<script>

  export default {

    name: '404',

    methods:{

      goBack () {

      	this.$router.push({path:'/'})

      }

    }

  }
</script>
<style>

  .m404 {
    margin:0 auto;
    vertical-align: middle;
    text-align: center
  }


</style>
