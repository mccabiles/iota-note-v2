import Vue from 'vue'
import Router from 'vue-router'
import App from './views/App.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'index',
          component: Index,
        },
        {
          path: 'notes/:id',
          name: 'view.note',
          component: () => import('./views/notes/_id.vue'),
          props: true,
        }
      ],
    },
    {
      path: 'formatting-guide',
      name: 'formatting-guide',
      // component: () => import('./views/Markdown.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})
