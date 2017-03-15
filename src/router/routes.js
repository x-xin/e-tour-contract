const routes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    name: '登录',
    path: '/signin',
    component: resolve => require(['@/pages/login/SignIn'], resolve),
    hidden: true
  },
  {
    name: '注册',
    path: '/signup',
    component: resolve => require(['@/pages/login/SignUp'], resolve),
    hidden: true
  },
  {
    name: '找回密码',
    path: '/password',
    component: resolve => require(['@/pages/login/Password'], resolve),
    hidden: true
  },
  {
    name: '首页',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-home',
    children: [
      {
        name: '首页引导',
        path: '/home',
        component: resolve => require(['@/pages/Home'], resolve)
      }
    ]
  },
  {
    name: '报名管理',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-name',
    children: [
      {
        name: '管理报名',
        path: '/regmanage',
        component: resolve => require(['@/pages/page/RegManage'], resolve)
      }
    ]
  },
  {
    name: '合同管理',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-contract',
    children: [
      {
        name: '管理合同',
        path: '/contractmanage',
        component: resolve => require(['@/pages/page/ContractManage'], resolve)
      }
    ]
  },
  {
    name: '线路管理',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-contract',
    children: [
      {
        name: '团期管理',
        path: '/groupmanage',
        component: resolve => require(['@/pages/page/GroupManage'], resolve)
      },
      {
        name: '线路及形成模板',
        path: '/linemanage',
        component: resolve => require(['@/pages/page/LineManage'], resolve)
      }
    ]
  },
  {
    name: '导游管理',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-contract',
    children: [
      {
        name: '导游信息管理',
        path: '/guidemessmanage',
        component: resolve => require(['@/pages/page/GuideMessManage'], resolve)
      }
    ]
  },
  {
    name: '统计管理',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-count',
    children: [
      {
        name: '合同使用统计',
        path: '/contractcount',
        component: resolve => require(['@/pages/page/ContractCount'], resolve)
      },
      {
        name: '团队信息统计',
        path: '/teamcount',
        component: resolve => require(['@/pages/page/TeamCount'], resolve)
      }
    ]
  },
  {
    name: '门店设置',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-set',
    children: [
      {
        name: '门店管理',
        path: '/storemanage',
        component: resolve => require(['@/pages/page/StoreManage'], resolve)
      }
    ]
  },
  {
    name: '系统管理',
    path: '/',
    component: resolve => require(['@/pages/Base'], resolve),
    icon: 'e-icon-set',
    children: [
      {
        name: '合同份额管理',
        path: '/contractsharemanage',
        component: resolve => require(['@/pages/page/ContractShareManage'], resolve)
      },
      {
        name: '用户银行管理',
        path: '/userbankmanage',
        component: resolve => require(['@/pages/page/UserBankManage'], resolve)
      },
      {
        name: '企业信息',
        path: '/companymess',
        component: resolve => require(['@/pages/page/CompanyMess'], resolve)
      },
      {
        name: '角色列表',
        path: '/roles',
        component: resolve => require(['@/pages/page/Roles'], resolve)
      },
      {
        name: '用户管理',
        path: '/usermanage',
        component: resolve => require(['@/pages/page/UserManage'], resolve)
      }
    ]
  }
]
export default routes
