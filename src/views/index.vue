<template>
  <div class="index">
    <router-link to="/exclusive">新手专享 /exclusive</router-link>
    <router-link to="/activity">活动公告 /activity</router-link>
    <router-link to="/preferential">优惠详情 /preferential</router-link>
    <router-link to="/dataDisclosure">数据披露 /dataDisclosure</router-link>
    <router-link to="/riskAssessment">风险评测 /riskAssessment</router-link>
    <router-link to="/riskPrompt">风险提示 /riskPrompt</router-link>
    <router-link to="/about">关于我们 /about</router-link>
    <router-link to="/integral">积分规则 /integral</router-link>
    <router-link to="/service">我的客服 /service</router-link>
    <router-link to="/Project">项目合作详情 /Project</router-link>
    <router-link to="/problem">常见问题 /problem</router-link>
    <router-link to="/brandStory">品牌故事 /brandStory</router-link>
    <router-link to="/projectDetails">项目详情 /projectDetails</router-link>
    <router-link to="/loginProtocol">登录协议 /loginProtocol</router-link>
    <!--<router-link to="/message">我的信息 /message</router-link>-->


  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="less">
  .index{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: .8rem;
    width: 100%;
    height: 100vh;
  }
</style>
