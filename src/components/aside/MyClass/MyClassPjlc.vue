<template>
  <div id="MyClassPjlc">
    <div class="course-title">
      <h4 class="pull-left">评级流程 <span>Rating process</span></h4>
      <p class="clearfix"></p>
    </div>

    <div class="ratingProcess-wrap">
      <ul class="time-line-box">
        <li class="time-line-list"  v-for="(item,index) in stepData">
          <div class="time-line-msg"><p class="time-line-text">{{item.detail}}</p></div>
          <div class="time-line-icon"><div class="icon"></div></div>
          <div class="time-line-stage" v-if="index%2==0">{{item.title}} <span class="time-num">{{item.num<10?"0"+item.num:item.num}}</span></div>
          <div class="time-line-stage" v-if="index%2!=0">{{item.title}} <span class="time-num">{{item.num<10?"0"+item.num:item.num}}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  var data = [
    {
      num:1,
      title:"当期准备",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:2,
      title:"项目研究",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:3,
      title:"研究分析",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:4,
      title:"报告撰写",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:5,
      title:"级别评审",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:6,
      title:"级别确定",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:7,
      title:"级别调整",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    },
    {
      num:8,
      title:"级别发布",
      detail:"大公信软是全球领先的信用管理软件解决方案与服务供应商，专注于信用体系信息化建设领域，致力于通"
    }
  ];
  export default {
    data(){
      return {
        stepData:data
      }
    },
    computed:{

    }
  }
</script>

<style lang="scss" type="text/scss">
  // 评级流程
  .ratingProcess-wrap{
    /*border: thin solid red;*/
    // 时间轴
    .time-line-box{
      padding: 10px 15px 30px 15px;
      // 每一行
      .time-line-list{
        width: 100%;
        min-height: 100px;
        overflow: hidden;
        /*border: thin solid blue;*/
        // 每一行 - 阶段
        .time-line-stage{
          width: 150px;
          /*border: thin solid green;*/
          color: #888888;
          font-weight: 600;
          font-size: 14px;
          margin-top: 15px;
          .time-num{
            font-size: 18px;
            line-height: 1.5;
          }
        }
        // 每一行 - 图标
        .time-line-icon{
          width: 4%;
          height: 130px;
          position: relative;
          .icon{
            left: 50%;
            top: 0;
            margin-left: -1px;
            position: absolute;
            height: 100%;
            width: 3px;
            background-color: #B4B4B4;
            &:before{
              content: "";
              display: block;
              position: absolute;
              left: -14px;
              top: 15px;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 2px solid #E60112;
            }
            &:after{
              content: "";
              display: block;
              position: absolute;
              left: -5px;
              top: 24px;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: #E60112;
            }
          }
        }
        // 每一行 - 内容
        .time-line-msg{
          width: 48%;
          .time-line-text{
            text-indent: 2em;
            margin-top: 15px;
            background-color: #FFFAFA;
            color: #989898;
            border: 1px solid #E9E9E9;
            line-height: 1.5;
            padding: 5px;
            position: relative;
          }
        }
        // 奇数行  奇数odd 偶数even
        &:nth-child(odd){
          .time-line-stage{
            text-align: right;
            .time-num{
              padding-left: 10px;
            }
          }
          .time-line-msg{
            /*margin-left: 10px;*/
            padding-left: 10px;
            .time-line-text{
              &:before{
                content: "";
                display: block;
                position: absolute;
                left: -10px;
                top: 5px;
                width: 0;
                height: 0;
                border-top: 5px solid transparent;
                border-right: 10px solid #FFFAFA;
                border-bottom: 5px solid transparent;
                z-index: 12;
              }
              &:after{
                content: "";
                display: block;
                position: absolute;
                left: -12px;
                top: 4px;
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-right: 12px solid #E9E9E9;
                border-bottom: 6px solid transparent;
                z-index: 11;
              }
            }
          }
          .time-line-stage,
          .time-line-icon,
          .time-line-msg{
            float: right;
          }
        }
        // 偶数行  奇数odd 偶数even
        &:nth-child(even){
          .time-line-stage{
            .time-num{
              padding-right: 10px;
            }
          }
          .time-line-msg{
            /*margin-right: 10px;*/
            padding-right: 10px;
            .time-line-text{
              &:before{
                content: "";
                display: block;
                position: absolute;
                right: -10px;
                top: 5px;
                width: 0;
                height: 0;
                border-top: 5px solid transparent;
                border-left: 10px solid #FFFAFA;
                border-bottom: 5px solid transparent;
                z-index: 12;
              }
              &:after{
                content: "";
                display: block;
                position: absolute;
                right: -12px;
                top: 4px;
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-left: 12px solid #E9E9E9;
                border-bottom: 6px solid transparent;
                z-index: 11;
              }
            }
          }
          .time-line-stage,
          .time-line-icon,
          .time-line-msg{
            float: left;
          }
        }
      }

    }
  }
</style>

