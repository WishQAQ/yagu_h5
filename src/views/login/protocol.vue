<template>
  <div class="protocol">
    <Header-Div :title="'登录注册协议'"></Header-Div>
    <div class="view_main">
      <div class="protocol_main">
        <div class="protocol_list">
          <div class="title">登录</div>
          <div class="content">登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议登录协议</div>
        </div>

        <div class="protocol_list">
          <div class="title">注册</div>
          <div class="content">注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "protocol",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .protocol{
    .view_main{
      background: #fff;
      .protocol_main{
        padding: .6rem .3rem 2rem;
        .protocol_list{
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
