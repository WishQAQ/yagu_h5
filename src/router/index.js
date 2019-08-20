import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

const Exclusive = () => import('@/views/home/exclusive');  // 新手专享
const SimulationProject = () => import('@/views/home/simulationProject');  // 模拟项目
// const MyMessage = () => import('@/views/messages/myMessage');  // 我的信息
// const Notice = () => import('@/views/messages/notice');  // 我的信息
const Activity = () => import('@/views/messages/activity');  // 活动公告
const Preferential = () => import('@/views/messages/preferential');  // 优惠信息
const DataDisclosure = () => import('@/views/my/dataDisclosure');  // 数据披露
const RiskAssessment = () => import('@/views/my/riskAssessment');  // 风险评测
const RiskPrompt = () => import('@/views/my/prompt');  // 风险提示
const About = () => import('@/views/my/about');  // 关于我们
const Integral = () => import('@/views/my/integral');  // 积分规则
const Service = () => import('@/views/my/service');  // 我的客服
const ServiceList = () => import('@/components/ServiceList');  // 客服问题列表
const Project = () => import('@/views/my/project');  // 项目合作
const Problem = () => import('@/views/my/problem');  // 常见问题
const BrandStory = () => import('@/views/project/brandStory');  // 品牌故事
const ProjectDetails = () => import('@/views/project/details');  // 项目详情
const LoginProtocol = () => import('@/views/login/protocol');  // 登录注册协议

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/exclusive',
      name: 'Exclusive',
      component: Exclusive
    },{
      path: '/simulationProject',
      name: 'SimulationProject',
      component: SimulationProject
    },{
      path: '/activity',
      name: 'Activity',
      component: Activity
    },{
      path: '/preferential',
      name: 'Preferential',
      component: Preferential
    },{
      path: '/dataDisclosure',
      name: 'DataDisclosure',
      component: DataDisclosure
    },{
      path: '/riskAssessment',
      name: 'RiskAssessment',
      component: RiskAssessment
    },{
      path: '/riskPrompt',
      name: 'RiskPrompt',
      component: RiskPrompt
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/integral',
      name: 'Integral',
      component: Integral
    },{
      path: '/service',
      name: 'Service',
      component: Service
    },{
      path: '/serviceList',
      name: 'ServiceList',
      component: ServiceList
    },{
      path: '/problem',
      name: 'Problem',
      component: Problem
    },{
      path: '/project',
      name: 'Project',
      component: Project
    },{
      path: '/brandStory',
      name: 'BrandStory',
      component: BrandStory
    },{
      path: '/projectDetails',
      name: 'ProjectDetails',
      component: ProjectDetails
    },{
      path: '/loginProtocol',
      name: 'LoginProtocol',
      component: LoginProtocol
    }
    // ,{
    //   path: '/message',
    //   name: 'MyMessage',
    //   component: MyMessage
    // },{
    //   path: '/notice',
    //   name: 'Notice',
    //   component: Notice
    // }
  ]
})
