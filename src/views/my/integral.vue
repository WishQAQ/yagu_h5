<template>
  <div class="integral">
    <Header-Div :title="'积分规则'"></Header-Div>
    <div class="view_main">
      <div class="integral_main">
        <div class="integral_list">
          <div class="title">所有积分如何兑换？</div>
          <div class="content">所有的积分可以兑换，所有的积分可以兑换所有的积分可以兑换所有的积分可以兑换所有的积</div>
        </div>

        <div class="integral_list">
          <div class="title">邀请好友可得积分？</div>
          <div class="content">平台邀请好友积分获取逻辑：成功邀请一名好友注册成功后获得200积分</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "integral",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .integral{
    .view_main{
      background: #fff;
      .integral_main{
        padding: .6rem .3rem 2rem;
        .integral_list{
          &:not(:last-child){
            margin-bottom: .8rem;
          }
          .title{
            font-size: .28rem;
            color:rgba(51,51,51,1);
            margin-bottom: .2rem;
          }
          .content{
            font-size: .28rem;
            color:rgba(51,51,51,1);
          }
        }
      }
    }
  }
</style>
