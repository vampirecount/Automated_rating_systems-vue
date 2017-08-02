<template>
  <div id="not-find-wrap">
    <h2 id="not-find">404该页面不存在！</h2>
    <a id="backhome" href="javascript:;" @click="backhome">点击返回首页</a>
  </div>

</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    methods:{
      backhome:function () {
          this.$router.push({path:'/home'})
      }

    },
    created: function () {
    	    	//that.$router.push({path:'/home'})
    }
  }
</script>
<style lang="scss" type="text/scss">
  #not-find-wrap {
    width: 100%;
    min-height: 300px;
    #not-find {
      margin-top: 100px;
      width: 100%;
      font-size: 40px;
      text-align: center;
    }
    a {
      display: block;
      text-align: center;
      font-size: 14px;
    }
  }
</style>
