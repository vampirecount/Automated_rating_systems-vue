<template>
  <div id="AttendClassQyjbm">
    <div class="col-md-8 coursePro">
      <div class="attendClass-screen">
        <p class="active">
          <span>债项信息</span>
          <i></i>
        </p>
        <p>
          <span>股权结构</span>
          <i></i>
        </p>
        <p>
          <span>关联公司</span>
          <i></i>
        </p>
        <p>
          <span>企业高管</span>
          <i></i>
        </p>
        <p>
          <span>对外担保</span>
          <i></i>
        </p>
        <p>
          <span>银行授信</span>
          <i></i>
        </p>
        <p>
          <span>历史评级</span>
          <i></i>
        </p>
        <p>
          <span>财务数据</span>
          <i></i>
        </p>
      </div>
      <div class="systemBox">
        <table class="table systemTable">
          <tbody>
          <tr>
            <td>公司名称中文</td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td>企业国别</td>
            <td></td>
            <td>注册地址中文</td>
            <td></td>
          </tr>
          <tr>
            <td>工商登记机关</td>
            <td></td>
            <td>工商登记注册号</td>
            <td></td>
          </tr>
          <tr>
            <td>注册资本（万元）</td>
            <td></td>
            <td>注册成神</td>
            <td></td>
          </tr>
          <tr>
            <td>行业归属</td>
            <td></td>
            <td>从业人数（人）</td>
            <td></td>
          </tr>
          <tr>
            <td>电子邮件</td>
            <td></td>
            <td>联系电话</td>
            <td></td>
          </tr>
          <tr>
            <td>法定代表人</td>
            <td></td>
            <td>企业编码</td>
            <td></td>
          </tr>
          <tr>
            <td>法定代表人证件类型</td>
            <td></td>
            <td>法定代表人证件号码</td>
            <td></td>
          </tr>
          <tr>
            <td>税务登记机关</td>
            <td></td>
            <td>税务登记号码</td>
            <td></td>
          </tr>
          <tr>
            <td>发债规模（元）</td>
            <td></td>
            <td>公司性质</td>
            <td></td>
          </tr>
          <tr>
            <td>近三个会计年度均可分配利润（元）</td>
            <td></td>
            <td>公司债券一年的利息</td>
            <td></td>
          </tr>
          <tr>
            <td>股本总额（元）</td>
            <td></td>
            <td>股本币种</td>
            <td></td>
          </tr>
          <tr>
            <td>最近一期末净资产链的40%（元）</td>
            <td></td>
            <td>从事当前行业的经营期限</td>
            <td></td>
          </tr>
          </tbody>
        </table>
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
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss">
  #AttendClassQyjbm{
    .coursePro{
      .systemBox{
        height: 567px;
        table{
          tbody{
            tr{
              td{
                border: 1px solid #cccccc;
                vertical-align: inherit;
              }
              td:nth-child(odd){
                width:20%;
                background: #f7fafe;
                color: #8c8c8c;
              }
            }
          }
        }
      }
      .attendClass-screen{
        p{
          display: inline-block;
          position: relative;
          height: 35px;
          width: 105px;
          border:1px solid #05c4b8;
          padding: 5px 0;
          text-align: center;
          font-size: 16px;
          margin: 30px 10px;
          cursor: pointer;
          i{
            position: absolute;
            right: -1px;
            bottom: 0px;
            height: 19px;
            width: 19px;
            background: url("../../../../static/img/right.png");
            display: none;
          }
        }
        p.active{
          i{
            display: block;
          }
        }
      }
    }
  }
</style>

