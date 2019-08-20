<template>
  <div class="problem">
    <Header-Div :title="'常见问题'"></Header-Div>
    <div class="view_main">
      <div class="problem_main">
        <div class="problem_list">
          <div class="title">我的订单可以查询什么？</div>
          <div class="content">我的订单可以查询到账户下所有订单，状态包括“待支付” “已支付” 、“已失效” 、 “全部”</div>
        </div>

        <div class="problem_list">
          <div class="title">我的订单可以查询什么？</div>
          <div class="content">我的订单可以查询到账户下所有订单，状态包括“待支付” “已支付” 、“已失效” 、 “全部”</div>
        </div>

        <div class="problem_list">
          <div class="title">我的订单可以查询什么？</div>
          <div class="content">我的订单可以查询到账户下所有订单，状态包括“待支付” “已支付” 、“已失效” 、 “全部”</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "problem",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .problem{
    .view_main{
      background: #fff;
      .problem_main{
        padding: .6rem .3rem 2rem;
        .problem_list{
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
