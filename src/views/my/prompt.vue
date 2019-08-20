<template>
  <div class="riskPrompt">
    <Header-Div :title="'风险提示'"></Header-Div>
    <div class="view_main">
      <div class="riskPrompt_main">
        <p>1.风险提示</p>
        <p>2.风险提示</p>
        <p>3.风险提示</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "riskPrompt",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .riskPrompt{
    .riskPrompt_main{
      height: 100%;
      background: #fff;
      padding: .4rem .3rem;
      p{
        font-size: .24rem;
        line-height: .6rem;
        color:rgba(51,51,51,1);
      }
    }
  }
</style>
