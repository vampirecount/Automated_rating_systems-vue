<template>
  <div id="MyClassNav">
    <ul>
      <li>
        <router-link class="rLink" to="/course/MyClassKcb" tag="a">课程表</router-link>
      </li>
      <li>
        <router-link class="rLink" to="/course/MyClassLxpj" tag="a">课程实践</router-link>
      </li>
      <li>
        <router-link class="rLink" to="/course/MyClassWdlx" tag="a">我的练习</router-link>
      </li>
      <li>
        <router-link class="rLink" to="/course/MyClassPjbg" tag="a">评级报告</router-link>
      </li>
      <li>
        <router-link class="rLink" to="/course/MyClassPjffl" tag="a">评级方法论</router-link>
      </li>
      <li>
        <router-link class="rLink" to="/course/MyClassPjlc" tag="a">评级流程</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss">
  #MyClassNav{
    ul{
      //border:1px solid #cccccc;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #ddd;
      li{
        margin: 0px 10px;
        border-radius: 4px;
        text-align: center;
        a.rLink{
          color: #8c8c8c;
          display: inline-block;
          height:100%;
          width: 100%;
        }
        a.router-link-active{
          background: #73bcfa;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
</style>

