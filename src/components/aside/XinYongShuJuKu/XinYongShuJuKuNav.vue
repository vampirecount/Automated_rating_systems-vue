<template>
  <div id="XinYongShuJuKuNav">
    <ul>
      <li v-on:click="onLiClick()"class>
        <span>企业评级</span>
      </li>
      <li>
        <div class="dpb">
          <router-link to="/database" tag="a"><span class="active">企业数据</span></router-link>
          <router-link to="/database/XinYongShuJuKuGnsczz" tag="a"><span>国内生产总值</span></router-link>
          <router-link to="/database/XinYongShuJuKuCzgdzctz" tag="a"><span>城镇固定资产投资</span></router-link>
          <router-link to="/database/XinYongShuJuKuGmysgyzz" tag="a"><span>规模以上工业增长</span></router-link>
          <router-link to="/database/XinYongShuJuKuJmxfjgzs" tag="a"><span>居民消费价格指数</span></router-link>
          <router-link to="/database/XinYongShuJuKuShxfplse" tag="a"><span>社会消费品零售额</span></router-link>
          <router-link to="/database/XinYongShuJuKuHbgyl" tag="a"><span>货币供应量</span></router-link>
          <router-link to="/database/XinYongShuJuKuGjczsr" tag="a"><span>国家财政收入</span></router-link>
        </div>
      </li>
      <li v-on:click="onLiClick()">
        <span>我的练习</span>
      </li>
      <li>
        <div class="dpb">
          <!--<router-link to="" tag="a"><span>数据1</span></router-link>-->
          <!--<router-link to="" tag="a"><span>数据1</span></router-link>-->
          <!--<router-link to="" tag="a"><span>数据1</span></router-link>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: 'XinYongShuJuKuNav',
      mounted: function () {

      },
      methods: {
         onLiClick: function () {
           $('.dpb').slideToggle(200);
         }
      }
    }
</script>

<style lang="scss" type="text/scss">

  #XinYongShuJuKuNav{
    ul{
      padding: 30px 0px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #ddd;
      li{
        text-align: left;
        line-height: 50px;
        margin: 20px 10px;
        border-radius: 4px;
        cursor: pointer;
        span{
          display: block;
          color: #8c8c8c;
          font-size: 22px;
        }
        div.dpb{
          line-height: 30px;
          a.router-link-exact-active{
            text-decoration: none;
            span{
              background: #5bc0de;
              color: #ffffff;
            }
          }
          span{
            font-size: 16px;
            padding-left: 5px;
            border-radius: 4px;
            margin: 5px 0;
          }
        }
      }
      li.active{
        background: #73bcfa;
        a{
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
  @media (max-width: 1440px) {
    #XinYongShuJuKuNav{
      ul{
        li{
          padding-left: 5px;
          span{
            font-size: 18px;
          }
          div.dpb{
            a{
              span{
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1441px) {
    #XinYongShuJuKuNav{
      ul{
        li{
          padding-left: 40px;
        }
      }
    }
  }

</style>

