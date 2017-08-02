
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

import Home from '@/components/aside/Home'
import Login from '@/components/common/login'
import AttendClass from '@/components/aside/AttendClass'

import AttendClassQyxx from '@/components/aside/AttendClass/AttendClassQyxx'
import AttendClassQyjbm from '@/components/aside/AttendClass/AttendClassQyjbm'
import AttendClassHgzcfx from '@/components/aside/AttendClass/AttendClassHgzcfx'
import AttendClassHyqyfx from '@/components/aside/AttendClass/AttendClassHyqyfx'
import AttendClassCwfx from '@/components/aside/AttendClass/AttendClassCwfx'
import AttendClassMxfx from '@/components/aside/AttendClass/AttendClassMxfx'
import AttendClassPjbg from '@/components/aside/AttendClass/AttendClassPjbg'
import AttendClassShps from '@/components/aside/AttendClass/AttendClassShps'
import AttendClassPsgl from '@/components/aside/AttendClass/AttendClassPsgl'
import JiaoXueGuanLi from '@/components/aside/JiaoXueGuanLi'
import JiaoXueJiHua from '@/components/aside/JiaoXueJiHua'
import MyClass from '@/components/aside/MyClass'
import MyClassKcb from '@/components/aside/MyClass/MyClassKcb'
import MyClassPjlc from '@/components/aside/MyClass/MyClassPjlc'
import MyClassIndex from '@/components/aside/MyClass/MyClassIndex'
import MyClassPjbg from '@/components/aside/MyClass/MyClassPjbg'
import MyClassWdlx from '@/components/aside/MyClass/MyClassWdlx'
import MyClassLxpj from '@/components/aside/MyClass/MyClassLxpj'
import MyClassPjffl from '@/components/aside/MyClass/MyClassPjffl'
import TongJiFenXi from '@/components/aside/TongJiFenXi'
import XinYongShuJuKu from '@/components/aside/XinYongShuJuKu'
import XinYongShuJuKuCzgdzctz from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuCzgdzctz'
import XinYongShuJuKuGjczsr from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuGjczsr'
import XinYongShuJuKuGmysgyzz from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuGmysgyzz'
import XinYongShuJuKuGnsczz from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuGnsczz'
import XinYongShuJuKuHbgyl from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuHbgyl'
import XinYongShuJuKuJmxfjgzs from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuJmxfjgzs'
import XinYongShuJuKuQysj from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuQysj'
import XinYongShuJuKuShxfplse from '@/components/aside/XinYongShuJuKu/XinYongShuJuKuShxfplse'
import MyGrades from '@/components/aside/MyGrades'

import page404 from '@/components/common/Page404'



Vue.use(Router);


// 添加该字段，表示进入这个路由是需要登录的 requireAuth: true,

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },

    {
      path: '/AttendClass',
      meta: {
        requireAuth: true
      },
      component: AttendClass,
      children: [//子路由
        {path: '/AttendClass', meta: {requireAuth: true},component: AttendClassQyxx},
        {path: '/AttendClass/AttendClassQyjbm',meta: {requireAuth: true}, component: AttendClassQyjbm},
        {path: '/AttendClass/AttendClassHgzcfx',meta: {requireAuth: true}, component: AttendClassHgzcfx},
        {path: '/AttendClass/AttendClassHyqyfx',meta: {requireAuth: true}, component: AttendClassHyqyfx},
        {path: '/AttendClass/AttendClassCwfx',meta: {requireAuth: true}, component: AttendClassCwfx},
        {path: '/AttendClass/AttendClassMxfx',meta: {requireAuth: true}, component: AttendClassMxfx},
        {path: '/AttendClass/AttendClassPjbg',meta: {requireAuth: true}, component: AttendClassPjbg},
        {path: '/AttendClass/AttendClassShps',meta: {requireAuth: true}, component: AttendClassShps},
        {path: '/AttendClass/AttendClassPsgl',meta: {requireAuth: true}, component: AttendClassPsgl}
      ]
    },
    {
      path: '/teach',
      meta: {
        requireAuth: true
      },
      component: JiaoXueGuanLi
    },
    {
      path: '/plan',
      meta: {
        requireAuth: true
      },
      component: JiaoXueJiHua
    },
    {
      path: '/course',
      meta: {
        requireAuth: true
      },
      component: MyClass,
      children: [//子路由
        {path: '/course',meta: {requireAuth: true}, component: MyClassIndex},
        {path: '/course/MyClassKcb',meta: {requireAuth: true}, component: MyClassKcb},
        {path: '/course/MyClassPjlc',meta: {requireAuth: true}, component: MyClassPjlc},
        {path: '/course/MyClassLxpj',meta: {requireAuth: true}, component: MyClassLxpj},
        {path: '/course/MyClassPjbg',meta: {requireAuth: true}, component: MyClassPjbg},
        {path: '/course/MyClassWdlx', meta: {requireAuth: true},component: MyClassWdlx},
        {path: '/course/MyClassPjffl',meta: {requireAuth: true}, component: MyClassPjffl}
      ]
    },
    {
      path: '/analyze',
      meta: {
        requireAuth: true
      },
      component: TongJiFenXi
    },
    {
      path: '/MyGrades',
      meta: {
        requireAuth: true
      },
      component: MyGrades
    },
    {
      path: '/database',
      meta: {
        requireAuth: true
      },
      component: XinYongShuJuKu,
      children: [//子路由
        {path: '/database',meta: {requireAuth: true}, component: XinYongShuJuKuQysj},
        {path: '/database/XinYongShuJuKuCzgdzctz',meta: {requireAuth: true}, component: XinYongShuJuKuCzgdzctz},
        {path: '/database/XinYongShuJuKuGjczsr',meta: {requireAuth: true}, component: XinYongShuJuKuGjczsr},
        {path: '/database/XinYongShuJuKuGmysgyzz',meta: {requireAuth: true}, component: XinYongShuJuKuGmysgyzz},
        {path: '/database/XinYongShuJuKuGnsczz',meta: {requireAuth: true}, component: XinYongShuJuKuGnsczz},
        {path: '/database/XinYongShuJuKuHbgyl',meta: {requireAuth: true}, component: XinYongShuJuKuHbgyl},
        {path: '/database/XinYongShuJuKuJmxfjgzs',meta: {requireAuth: true}, component: XinYongShuJuKuJmxfjgzs},
        {path: '/database/XinYongShuJuKuShxfplse',meta: {requireAuth: true}, component: XinYongShuJuKuShxfplse}
      ]
    },
    {
      path: '*',
      component: page404
    }
  ]
})



// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {

  let token = sessionStorage.getItem('token')

  if(to.meta.requireAuth) {
    if(token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})



//根据用户状态值判断是否有该模块登录权限

/*
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})
*/

export default router
