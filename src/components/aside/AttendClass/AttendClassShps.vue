<template>
  <div id="AttendClassShps">
    <div class="col-md-8 coursePro">
      <!--1-->
      <h2 style="margin-top: 0;font-size: 22px;color: #8c8c8c;">评审准备</h2>
      <div class="attendClass-preparation">
        <p>
          <span>评级报告所给级别 :</span>
          <span>AA</span>
        </p>
        <p>
          <span>评级报告所给展望 :</span>
          <span>正面</span>
        </p>
        <p>
          <span>评审小组成员:</span>
          <span>张三、张飞、张良、朱买臣、李逵</span>
          <span class="addon"></span>
        </p>
      </div>
      <!--2-->
      <!--<h2>生产贡献率</h2>-->
      <div class="systemBox">
        <table class="table systemTable">
          <thead>
          <tr>
            <th>评审人</th>
            <th>分数</th>
            <th>主体级别</th>
            <th>级别展望</th>
            <th>评审时间</th>
            <th>耗时(h)</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>肥城市城市资产</td>
            <td>交通运输、</td>
            <td>国有企业</td>
            <td>2002-11-14</td>
            <td>交通运输、</td>
            <td>国有企业</td>
            <td>
              <button class="btn btn-default" data-toggle="modal" data-target=".modalSubstitution">换人</button>
              <button class="btn btn-success See" data-toggle="modal" data-target=".modalSee">详情查看</button>
            </td>
          </tr>
          <tr>
            <td>PJ20170516-19</td>
            <td>烟台港集团有限</td>
            <td>2017-05-16</td>
            <td>xs1</td>
            <td>交通运输、</td>
            <td>国有企业</td>
            <td>
              <button class="btn btn-default" data-toggle="modal" data-target=".modalSubstitution">换人</button>
              <button class="btn btn-success See" data-toggle="modal" data-target=".modalSee">详情查看</button>
            </td>
          </tr>
          <tr>
            <td>PJ20170516-19</td>
            <td>烟台港集团</td>
            <td>2017-05-16</td>
            <td>xs1</td>
            <td>交通运输、</td>
            <td>国有企业</td>
            <td>
              <button class="btn btn-default" data-toggle="modal" data-target=".modalSubstitution">换人</button>
              <button class="btn btn-success See" data-toggle="modal" data-target=".modalSee">详情查看</button>
            </td>
          </tr>
          <tr>
            <td>PJ20170516-19</td>
            <td>烟台港集团</td>
            <td>2017-05-16</td>
            <td>xs1</td>
            <td>交通运输、</td>
            <td>国有企业</td>
            <td>
              <button class="btn btn-default" data-toggle="modal" data-target=".modalSubstitution">换人</button>
              <button class="btn btn-success See" data-toggle="modal" data-target=".modalSee">详情查看</button>
            </td>
          </tr>
          <tr>
            <td>PJ20170516-19</td>
            <td>烟台港</td>
            <td>2017-05-16</td>
            <td>xs1</td>
            <td>交通运输、</td>
            <td>国有企业</td>
            <td>
              <button class="btn btn-default" data-toggle="modal" data-target=".modalSubstitution">换人</button>
              <button class="btn btn-success See" data-toggle="modal" data-target=".modalSee">详情查看</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="fenye text-right"></div>
      </div>
      <h2>我的分析结论</h2>
      <textarea class="myConclusion" name="" id="" cols="130" rows="9"></textarea>
      <button class="btn btn-block">提交</button>
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

    <!--模态框-查看详情-->
    <div class="modal fade modalSee" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">当前练习内容：企业分析/企业基本面分析</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>序号</th>
                        <th>联系名称</th>
                        <th>所选企业</th>
                        <th>提交时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                       <td>1</td>
                       <td>练习1</td>
                       <td>A企业</td>
                       <td>2017-06-20 15:45</td>
                       <td>
                         <button class="btn btn-default">查看</button>
                         <button class="btn btn-danger">删除</button>
                       </td>
                     </tr>
                     <tr>
                       <td>2</td>
                       <td>练习2</td>
                       <td>A企业</td>
                       <td>2017-06-20 15:45</td>
                       <td>
                         <button class="btn btn-default">查看</button>
                         <button class="btn btn-danger">删除</button>
                       </td>
                     </tr>
                     <tr>
                       <td>3</td>
                       <td>练习3</td>
                       <td>A企业</td>
                       <td>2017-06-20 15:45</td>
                       <td>
                         <button class="btn btn-default">查看</button>
                         <button class="btn btn-danger">删除</button>
                       </td>
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!--模态框-换人-->
    <div class="modal fade modalSubstitution" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="gridSystemModalLabel">Modal title</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">.col-md-4</div>
              <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss">
  #AttendClassShps{
    .modal{
      table{
        text-align: center;
        thead{
          tr{
            th{
              text-align: center;
            }
          }
        }
        tbody{
          tr{
            td{
              vertical-align: middle;
              line-height: 30px;
              font-size: 16px;
              button{
                padding:2px 12px;
              }
            }
          }
        }
      }
    }
  }
</style>

