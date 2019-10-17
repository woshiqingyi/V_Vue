import Vue from 'vue'
import Router from 'vue-router'

import homepage from '@/components/homepage'

import datalist from '@/components/nav-menu/basic/data-list'
import dialog from '@/components/nav-menu/basic/dialog'
import templateform from '@/components/nav-menu/basic/templateform'
import formstyle from '@/components/nav-menu/basic/formstyle'
import datapage from '@/components/nav-menu/basic/datapage'
import mydatapage from '@/components/nav-menu/basic/mydatapage'
import date from '@/components/nav-menu/basic/date'
import deletedata from '@/components/nav-menu/basic/deletedata'
import showimageassembly from '@/components/nav-menu/basic/showimageassembly'

import formchecklist from '@/components/nav-menu/advanced/formchecklist'
import verificationcode from '@/components/nav-menu/advanced/verificationcode'
import addcomponent from '@/components/nav-menu/advanced/addcomponent'
import component from '@/components/nav-menu/advanced/component'
import easymenu from '@/components/nav-menu/advanced/easymenu'
import accumulation from '@/components/nav-menu/advanced/accumulation'
import judge from '@/components/nav-menu/advanced/judge'
import changedatestructure from '@/components/nav-menu/advanced/changedatestructure'
import newobject from '@/components/nav-menu/advanced/newobject'
import test from '@/components/nav-menu/advanced/test'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      redirect: 'datalist',
      children: [
        {
          path: '/datalist',
          name: 'datalist',
          component: datalist
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: dialog
        },
        {
          path: '/templateform',
          name: 'templateform',
          component: templateform
        },
        {
          path: '/formstyle',
          name: 'formstyle',
          component: formstyle
        },
        {
          path: '/datapage',
          name: 'datapage',
          component: datapage
        },
        {
          path: '/mydatapage',
          name: 'mydatapage',
          component: mydatapage
        },
        {
          path: '/deletedata',
          name: 'deletedata',
          component: deletedata
        },
        {
          path: '/showimageassembly',
          name: 'showimageassembly',
          component: showimageassembly
        },
        {
          path: '/formchecklist',
          name: 'formchecklist',
          component: formchecklist
        },
        {
          path: '/verificationcode',
          name: 'verificationcode',
          component: verificationcode
        },
        {
          path: '/addcomponent',
          name: 'addcomponent',
          component: addcomponent
        },
        {
          path: '/component',
          name: 'component',
          component: component
        },
        {
          path: '/easymenu',
          name: 'easymenu',
          component: easymenu
        },
        {
          path: '/accumulation',
          name: 'accumulation',
          component: accumulation
        },
        {
          path: '/judge',
          name: 'judge',
          component: judge
        },
        {
          path: '/changedatestructure',
          name: 'changedatestructure',
          component: changedatestructure
        },
        {
          path: '/newobject',
          name: 'newobject',
          component: newobject
        },
        {
          path: '/test',
          name: 'test',
          component: test
        },
        {
          path: '/date',
          name: 'date',
          component: date
        }
      ]
    }
  ]
})
