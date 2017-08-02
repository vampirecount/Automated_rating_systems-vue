<template>
  <div id="AttendClassQyxx">
    <div class="col-md-8">
      <div class="curriculumPractice-project">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" style=" width: 30%;" role="tablist">
          <li role="presentation" class="active"><a href="#project" aria-controls="home" role="tab" data-toggle="tab">项目信息</a></li>
          <li role="presentation"><a href="#debt" aria-controls="profile" role="tab" data-toggle="tab">债项信息</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="project">
            <!--表格-->
            <div class="systemBox">
              <table class="table systemTable">
                <tbody>
                <tr>
                  <td>项目编码</td>
                  <td>pl2022012034512</td>
                  <td>项目名称</td>
                  <td>pl2022012034512</td>
                </tr>
                <tr>
                  <td>当前负责班级</td>
                  <td>信用1701班</td>
                  <td>受评主体</td>
                  <td>烟台港集团有限公司</td>
                </tr>
                <tr>
                  <td>项目阶段</td>
                  <td>准备阶段</td>
                  <td>当前负责人</td>
                  <td>呵呵哒</td>
                </tr>
                <tr>
                  <td>项目开始时间</td>
                  <td>2017-05-16</td>
                  <td>项目结束日</td>
                  <td>2017-05-18</td>
                </tr>
                <tr>
                  <td height="100">项目描述</td>
                  <td colspan="3"></td>
                </tr>
                <tr>
                  <td>我的结论</td>
                  <td colspan="3">
                    <textarea class="myConclusion" name="" cols="130" rows="9"></textarea>
                  </td>
                </tr>
                </tbody>
              </table>
              <button class="btn btn-success btn-block">提交</button>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="debt">
            <!--表格-->
            <div class="systemBox">
              <table class="table systemTable pull-left">
                <tbody>
                <tr>
                  <td>债项名称</td>
                  <td></td>
                  <td>债券期限</td>
                  <td></td>
                </tr>
                <tr>
                  <td>发行利率</td>
                  <td></td>
                  <td>发行市场</td>
                  <td></td>
                </tr>
                <tr>
                  <td>发债规模</td>
                  <td></td>
                  <td>融资劵面值</td>
                  <td></td>
                </tr>
                <tr>
                  <td>还款方式</td>
                  <td></td>
                  <td>债券类别</td>
                  <td></td>
                </tr>
                <tr>
                  <td>首次发行方式</td>
                  <td></td>
                  <td>付息频率（月）</td>
                  <td></td>
                </tr>
                <tr>
                  <td>剩余本机值</td>
                  <td></td>
                  <td>信用等级</td>
                  <td></td>
                </tr>
                <tr>
                  <td>担保性质</td>
                  <td></td>
                  <td>担保金额</td>
                  <td></td>
                </tr>
                <tr>
                  <td>我的分析结论</td>
                  <td colspan="3">
                    <textarea class="myConclusion" name="" id="0" cols="130" rows="9"></textarea>
                  </td>
                </tr>
                </tbody>
              </table>
              <button class="btn btn-success btn-block">提交</button>
            </div>
          </div>
        </div>
      </div>
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
      </div>
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss">
  #AttendClassQyxx{
    .curriculumPractice-project{
      margin: 20px 0;
      .nav-tabs{
        li{
          a{
            border:0;
            color: #8c8c8c;
          }
        }
        li.active{
          a{
            border:0;
            background: #7bd9d9;
          }
        }
      }
      .systemBox{
        margin: 20px 0;
        table{
          tbody{
            tr{
              td{
                text-align: center;
                color: #8c8c8c;
                border: 1px solid #cccccc;
                vertical-align: inherit;
              }
              td:nth-child(odd){
                width:20%;
                background: #f7fafe;
              }
              td:nth-child(even){
                padding:0;
                input{
                  height: 100%;
                  width: 100%;
                  padding: 5px;
                  border: 0;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .notes{
        box-shadow: 2px 2px 10px #ddd;
        padding: 20px;
        height:275px;
        width: 175px;
        margin: 0 20px;
        border-radius: 4px;
        ul{
          li{
            line-height: 30px;
          }
        }
      }
    }
  }
</style>

