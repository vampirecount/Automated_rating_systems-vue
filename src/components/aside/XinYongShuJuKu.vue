
<template>
<div>
  <v-header></v-header>
  <div class="custom-container">
    <div class="custom-container-section">
      <div id="XinYongShuJukU">
        <div class="row">
          <div class="col-md-2">
            <XinYongShuJukUNav></XinYongShuJukUNav>
          </div>
          <div class="col-md-10 coursePro">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
  <v-footer></v-footer>
</div>


</template>
<script>
  import XinYongShuJukUNav from './XinYongShuJuKu/XinYongShuJuKuNav.vue'
  import vHeader from '../common/Header.vue'

  import vFooter from '../common/Footer.vue'
  export default {
    name: 'hello',
    components: {

      XinYongShuJukUNav,
      vHeader,
      vFooter

    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  #XinYongShuJukU{
    .coursePro{
      padding: 0px 30px;
      .course-title{
        margin: 0 0 20px 0;
        /*padding:0 0 15px 0;*/
        border-bottom: 1px solid #CCCCCC;
      }
      .course-operation{
        ul{
          li{
            float: left;
            margin: 0 2% 0 0;
            /*input{*/
              /*border:1px solid #cccccc;*/
              /*border-radius: 4px;*/
              /*padding:3px 10px;*/
              /*width: 240px;*/
            /*}*/
            /*button.btn-default{*/
              /*background: #f2b45f;*/
              /*border:0;*/
              /*padding: 4px 12px;*/
            /*}*/
            /*button.btn-success{*/
              /*background: #d0263a;*/
              /*border:0;*/
              /*padding: 4px 12px;*/
            /*}*/
          }
        }
      }
      .systemBox{
        margin: 20px 0;
        .systemTable{
          thead{
            tr:nth-child(2){
              background: #ffffff;
              color: #8c8c8c;
              th{
                border-bottom: 0px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
</style>
