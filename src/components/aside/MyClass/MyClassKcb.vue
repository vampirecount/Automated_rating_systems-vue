<template>
  <div id="MyClassKcb">
    <div class="col-md-5">
      <ul>
        <li v-for="item, liIndex in msg" :class="'curriculumPractice-div-'+liIndex">
          <span class="glyphicon glyphicon-triangle-bottom"></span>
          <span>{{item.name}}</span>
          <div class="marginDiv"></div>
          <ul>
            <li class="curriculumPractice-div" v-for="itemSemester, i in item.dataSemester" :class="'curriculumPractice-ul-'+i">
              <span class="glyphicon glyphicon-triangle-bottom"></span>
              <span>{{itemSemester.name}}</span>
              <div class="marginDiv"></div>
              <ul class="curriculumPractice-ul" >
                <li v-for="itemGrade, index in itemSemester.data" :class="'curriculumPractice-li-'+index" >
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-triangle-right rb" v-on:click="onLink($event)"></span>
                  <span>{{index+1}}</span>
                  <span class="title">{{itemGrade.title}}</span>
                  <span>{{itemGrade.hour}}课时 </span>
                  <span>{{itemGrade.state}}</span>
                  <p>
                    <span>讲师 :</span>
                    <span>{{itemGrade.lecturer || '--' }} </span>
                    <span>时间 :</span>
                    <span>{{itemGrade.time || '--' }} </span>
                    <span>地点 :</span>
                    <span>{{itemGrade.address || '--' }}</span>
                    <button class="btn btn-primary pull-right">查看</button>
                    <button class="btn btn-warning">开始上课</button>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-7 coursePro">
      <div class="curriculumPractice-1-6-top">
        <p class="pull-left">
          <span>课时名称 : </span>
          <span>模型分析</span>
        </p>
        <p class="pull-right text-left">
          <span>课时 : </span>
          <span>3</span>
        </p>
        <div class="clearfix"></div>
        <p class="pull-left">
          <span>讲师 : </span>
          <span>刘老师</span>
        </p>
        <p class="pull-right text-left">
          <span>开课时间 : </span>
          <span>2017/6/20</span>
        </p>
        <div class="clearfix"></div>
        <p class="pull-left">
          <span>开课状态 : </span>
          <span>已开始</span>
        </p>
        <div class="clearfix"></div>
      </div>
      <div class="curriculumPractice-1-6-content">
        <h3>资料列表</h3>
        <!--表格-->
        <div class="systemBox">
          <table class="table systemTable">
            <thead>
            <tr>
              <th>序号</th>
              <th>资料名称</th>
              <th>格式</th>
              <th>时间</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>0</td>
              <td>模型分析资料</td>
              <td>txt</td>
              <td><a href="">下载</a></td>
            </tr>
            <tr>
              <td>1</td>
              <td>模型分析资料</td>
              <td>txt</td>
              <td><a href="">下载</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>模型分析资料</td>
              <td>txt</td>
              <td><a href="">下载</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>模型分析资料</td>
              <td>txt</td>
              <td><a href="">下载</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td>模型分析资料</td>
              <td>txt</td>
              <td><a href="">下载</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td>模型分析资料</td>
              <td>txt</td>
              <td><a href="">下载</a></td>
            </tr>
            </tbody>
          </table>
          <div class="fenye text-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyClassKcb',
    data () {
      return {
          msg: '',
          dlApiData:''
      }
    },

    mounted: function () {
//      this.onLink();

    },
    methods: {
      onLink: function (e) {
        var _this=e.currentTarget; // 当前元素
        if($(_this).attr('class') == 'glyphicon glyphicon-triangle-right rb'){
           $(_this).attr('class','glyphicon glyphicon-triangle-bottom rb');
           $(_this).parent().find('p').slideDown(200);
         }else {
           $(_this).attr('class','glyphicon glyphicon-triangle-right rb');
           $(_this).parent().find('p').slideUp(200);
         }
      }
    },
    created: function () {
      this.$ajax.get('/api/MyClassKcb').then((response) => {
        this.msg = response.data.data.MyClassKcbData;
        console.log(this.msg);
      });
    },
    watch:{

    }



  }
</script>

<style lang="scss" type="text/scss">
  #MyClassKcb{
    ul{
      li{
        margin: 20px 0;
        color: #8a8a8a;
        .curriculumPractice-div{
          box-shadow: 2px 2px 10px #ddd;
          min-height: 330px;
          padding: 20px;
          margin: 0;
          ul{
            li{
            margin: 0;
            span{
              display: inline-block;
              margin: 0 3% 0 0;
            }
            span.glyphicon{
              margin: 0 0px 0 0;
            }
            span.title{
              width:40%;
              vertical-align: middle;
              overflow:hidden;
              white-space:nowrap;
              text-overflow:ellipsis;
            }
            span.glyphicon-star{
              margin:0 5px 0 -15px;
              color: #f9c310;
            }
            span:last-child{
              margin: 0;
            }
            p{
              padding: 10px 0 0 30px;
              display: none;
              span{
                color: #bbbbbb;
                font-size: 12px;

              }
              span:nth-child(3){
                width:auto;
              }
              button{
                padding: 1px 10px;
                font-size: 12px;
                margin-right: 10px;
                background: #73bcfa;
                border:0;
              }
              button.btn-warning{
                background: #fac917;
                margin-top: 10px;
              }
            }
          }
          }
          /*li.active{*/
            /*box-shadow: 2px 2px 10px #ddd;*/
          /*}*/
          li:hover{
            box-shadow: 2px 2px 10px #ddd;
          }
          li.curriculuming{
            color: #ff4848;
            span:first-child{
              color: #8a8a8a;
            }
            p{
              span:first-child{
                color: #cccccc;
              }
            }
          }
        }
      }
      li:first-child{
      margin-top: 0;
    }
    }
    .marginDiv{
      height: 15px;
    }
    .col-md-7{
      box-shadow: 2px 2px 10px #ddd;
      padding:15px 30px;
      margin-top: 33px;
      p{
        padding:15px 10px;
        width: 50%;
      }

      .curriculumPractice-1-6-content{
        .systemBox{
          margin: 20px 0;
        }
        margin: 20px 0;
      }
    }
  }
</style>

