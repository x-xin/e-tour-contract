import Base from '@/pages/Base'

import Home from '@/pages/Home'

import SignIn from '@/pages/login/SignIn'
import SignUp from '@/pages/login/SignUp'
import Password from '@/pages/login/Password'

import RegManage from '@/pages/page/RegManage'
import ContractManage from '@/pages/page/ContractManage'
import GroupManage from '@/pages/page/GroupManage'
import LineManage from '@/pages/page/LineManage'
import GuideMessManage from '@/pages/page/GuideMessManage'
import ContractCount from '@/pages/page/ContractCount'
import TeamCount from '@/pages/page/TeamCount'
import StoreManage from '@/pages/page/StoreManage'
import ContractShareManage from '@/pages/page/ContractShareManage'
import UserBankManage from '@/pages/page/UserBankManage'
import CompanyMess from '@/pages/page/CompanyMess'
import Roles from '@/pages/page/Roles'
import UserManage from '@/pages/page/UserManage'

const routes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    name: '登录',
    path: '/signin',
    component: SignIn,
    hidden: true
  },
  {
    name: '注册',
    path: '/signup',
    component: SignUp,
    hidden: true
  },
  {
    name: '找回密码',
    path: '/password',
    component: Password,
    hidden: true
  },
  {
    name: '首页',
    path: '/',
    component: Base,
    icon: 'e-icon-home',
    children: [
      {
        name: '首页部分',
        path: '/home',
        component: Home
      }
    ]
  },
  {
    name: '报名管理',
    path: '/',
    component: Base,
    icon: 'e-icon-name',
    children: [
      {
        name: '报名管理',
        path: '/regmanage',
        component: RegManage
      }
    ]
  },
  {
    name: '合同管理',
    path: '/',
    component: Base,
    icon: 'e-icon-contract',
    children: [
      {
        name: '合同管理',
        path: '/contractmanage',
        component: ContractManage
      }
    ]
  },
  {
    name: '线路管理',
    path: '/',
    component: Base,
    icon: 'e-icon-contract',
    children: [
      {
        name: '团期管理',
        path: '/groupmanage',
        component: GroupManage
      },
      {
        name: '线路及形成模板',
        path: '/linemanage',
        component: LineManage
      }
    ]
  },
  {
    name: '导游管理',
    path: '/',
    component: Base,
    icon: 'e-icon-contract',
    children: [
      {
        name: '导游信息管理',
        path: '/guidemessmanage',
        component: GuideMessManage
      }
    ]
  },
  {
    name: '统计管理',
    path: '/',
    component: Base,
    icon: 'e-icon-count',
    children: [
      {
        name: '合同使用统计',
        path: '/contractcount',
        component: ContractCount
      },
      {
        name: '团队信息统计',
        path: '/teamcount',
        component: TeamCount
      }
    ]
  },
  {
    name: '门店设置',
    path: '/',
    component: Base,
    icon: 'e-icon-set',
    children: [
      {
        name: '门店管理',
        path: '/storemanage',
        component: StoreManage
      }
    ]
  },
  {
    name: '系统管理',
    path: '/',
    component: Base,
    icon: 'e-icon-set',
    children: [
      {
        name: '合同份额管理',
        path: '/contractsharemanage',
        component: ContractShareManage
      },
      {
        name: '用户银行管理',
        path: '/userbankmanage',
        component: UserBankManage
      },
      {
        name: '企业信息',
        path: '/companymess',
        component: CompanyMess
      },
      {
        name: '角色列表',
        path: '/roles',
        component: Roles
      },
      {
        name: '用户管理',
        path: '/usermanage',
        component: UserManage
      }
    ]
  }
]
export default routes
