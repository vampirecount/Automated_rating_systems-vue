<style>
  #login-wrap {

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: url("../../assets/body-bg.jpg") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

  }

  #login-keep {

    position: relative;
    width: 1100px;
    height: 100%;
    margin: 0 auto;

  }

  #login-form {

    position: absolute;
    top: 150px;
    right: 0;
    width: 300px;
    height: 250px;
    /*border: 1px solid #fff;*/
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(255, 255, 255, .3);
    padding-right: 20px;
    padding-left: 20px;
    background: rgba(255, 255, 255, .3);

  }
</style>

<template>
  <div id="login-wrap">
    <div id="login-keep">
      <div style="height: 30px;"></div>
      <h1 style="color:#ff6700;">自动化教学系统</h1>
      <div id="login-form">
        <div style="height: 50px;"></div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="60">
          <Form-item label="用户名" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
          </Form-item>
          <Form-item label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
          </Form-item>

          <Form-item>
            <Button id="login-submit" type="primary" @keyup.enter.native="handleSubmit('formValidate')"
                    @click="handleSubmit('formValidate')">提交
            </Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          </Form-item>
        </Form>

      </div>

    </div>
  </div>

</template>
<script>


  import * as types from '../../store/types'

  export default {

    data () {

      //      验证用户名的正则
      const checkUsername = (rule, value, callback) => {

        if (!value) {

          return callback(new Error('用户名不能为空'));

        }
        setTimeout(() => {

          if (!/^[a-z][a-z\d]{4,14}$/.test(value)) {

            callback(new Error('用户名为5-15位数字、字母组成'));

          } else {

            callback();

          }

        }, 200);

      };

      //      验证密码的正则
      const checkPassword = (rule, value, callback) => {

        if (!value) {

          return callback(new Error('密码不能为空'));

        }
        setTimeout(() => {

          if (!/^[a-z][a-z\d]{4,14}$/.test(value)) {

            callback(new Error('密码为5-15位数字、字母组成'));

          } else {

            callback();

          }

        }, 200);

      };

      return {

        formValidate: {//form 表单请求参数

          username: '',

          password: ''

        },

        ruleValidate: {//验证规则

          username: [

            {required: true, message: '用户名不能为空', trigger: 'blur'},
            {validator: checkUsername, trigger: 'blur'}

          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {validator: checkPassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {

      handleSubmit (name) {

        const _this = this;

        this.$refs[name].validate((valid) => {

          if (valid) {

            _this.$http('/DG-JEESITE/a/sys/system/login', _this.formValidate, function (d) {

              d = d.data;

              if (d.result == 0) {

                _this.$Message.success('登陆成功!');

                const token = JSON.stringify(d.token);

                const username = JSON.stringify(d.data);

                const sessionID = d.sessionID;

//                console.log(JSON.stringify(_this.cookieFn));

                _this.cookieFn.setCookie('sessionID', sessionID);//存储sessionID

                _this.$store.dispatch('UserLogin', token);

                _this.$store.dispatch('UserName', username);

                _this.formValidate.username = '';

                _this.formValidate.password = '';

                let redirect = decodeURIComponent(_this.$route.query.redirect || '/');

                _this.$router.push({

                  path: redirect

                })

              } else {

                _this.$Message.error('用户名或密码错误!');

              }


            })

          } else {

            _this.$Message.error('请输入正确的用户名或密码!');

          }
        })
      },
      handleReset (name) {

        this.$refs[name].resetFields();

      }

    },
    created: function () {

      const _this = this;

      document.onkeypress = function (event) {

        if (event.which == 13) {

          _this.handleSubmit('formValidate')

        }

      }

    }
  }
</script>
