// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from './axios'
import store from './store/index.js'

import qs from 'qs';



import echarts from 'echarts'

import 'iview/dist/styles/iview.css'    // 使用 CSS

Vue.use(iView);


Vue.config.productionTip = false;





//全局 http 请求方法

Vue.prototype.$http = function (url, data, callback) {

  this.$Loading.config({

    color: '#5cb85c',

    failedColor: 'red',

    height: 5

  });


  this.$Loading.start();//进度条

  var _this = this;


  axios.post(url, qs.stringify(data))

  .then(function (response) {

    _this.$Loading.finish();

    callback(response)

  })
  .catch(function (response) {

    _this.$Loading.error();

    console.log('error:',response);

  });

};


//封装cookie 方法

Vue.prototype.cookieFn = {

  //设置cookie

  setCookie: function (cname, cvalue, exdays) {

    var d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    var expires = "expires=" + d.toUTCString();

    // console.info(cname + "=" + cvalue + "; " + expires);

    document.cookie = cname + "=" + cvalue + "; " + expires;

    // console.info(document.cookie);

  },

  //获取cookie

  getCookie: function (cname) {

    var name = cname + "=";

    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {

      var c = ca[i];

      while (c.charAt(0) == ' ') c = c.substring(1);

      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);

    }

    return "";

  },
  //清除cookie
  clearCookie: function () {

    this.setCookie("username", "", -1);


  },
  checkCookie: function () {

    var user = this.getCookie("username");

    if (user != "") {

      alert("Welcome again " + user);

    } else {

      user = prompt("Please enter your name:", "");

      if (user != "" && user != null) {

        this.setCookie("username", user, 365);

      }

    }

  }

}

//图表

Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: {App}
})
