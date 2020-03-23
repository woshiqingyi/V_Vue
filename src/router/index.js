import Vue from 'vue'
import Router from 'vue-router'

import homepage from '@/components/homepage'

import tree from '@/components/nav-menu/basic/tree'
import mydatapage from '@/components/nav-menu/basic/mydatapage'

import deletedata from '@/components/nav-menu/basic/deletedata'
import showimageassembly from '@/components/nav-menu/basic/showimageassembly'
import showimageassembly2 from '@/components/nav-menu/basic/showimageassembly2'


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

import center from '@/components/nav-menu/css/center'
import vertical from '@/components/nav-menu/css/vertical'
import verticalcenter from '@/components/nav-menu/css/verticalcenter'


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
          path: '/mydatapage',
          name: 'mydatapage',
          component: mydatapage
        },
        {
          path: '/tree',
          name: 'tree',
          component: tree
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
          path: '/showimageassembly2',
          name: 'showimageassembly2',
          component: showimageassembly2
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
          path: '/center',
          name: 'center',
          component: center
        },
        {
          path: '/vertical',
          name: 'vertical',
          component: vertical
        },
        {
          path: '/verticalcenter',
          name: 'verticalcenter',
          component: verticalcenter
        },
        
      ]
    }
  ]
})
