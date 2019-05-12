import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage'
import DataList from '@/components/nav-menu/data-list'
import Dialog from '@/components/nav-menu/dialog'
import Form from '@/components/nav-menu/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      redirect: 'datalist',
      children: [
        {
          path: '/datalist',
          name: 'datalist',
          component: DataList
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: Dialog
        },
        {
          path: '/form',
          name: 'form',
          component: Form
        }
      ]
    }
  ]
})
