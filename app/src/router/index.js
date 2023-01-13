import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      isShow: true,
      title: "首页"
    },
    children: [
      {
        path: '/Recommendations',
        name: 'recommendations',
        component: () => import(/* webpackChunkName: "about" */ '../views/RecommendView.vue'),
        meta: {
          isShow: true,
          title: "首页"
        },
      },
      {
        path: '/ClassicMusic',
        name: 'classicmusic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ClassicMusicView.vue'),
        meta: {
          isShow: true,
          title: "古典"
        }
      },
      {
        path: '/PopluarMusic',
        name: 'popluarmusic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PopularMusicView.vue'),
        meta: {
          isShow: true,
          title: "流行"
        }
      },
      {
        path: '/Study',
        name: 'study',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/StudyView.vue'),
        meta: {
          isShow: true,
          title: "考研"
        }
      },
    ]
  },
  {
    path: '/Login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: {
      isShow: false,
      title: "登录"
    }
  },
  {
    path: '/WritePost',
    name: 'writepost',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue'),
    meta: {
      isShow: false,
      title: "分享"
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
