<template>
  <div class="service">
    <Header-Div :title="'我的客服'"></Header-Div>
    <div class="view_main">

      <div class="service_option">
        <div class="option_list">
          <img src="../../assets/images/telPhone.png" alt="">
          <p>电话客服</p>
        </div>

        <div class="option_list">
          <img src="../../assets/images/service_carts.png" alt="">
          <p>在线客服</p>
        </div>

        <div class="option_list">
          <img src="../../assets/images/edit.png" alt="">
          <p>意见反馈</p>
        </div>
      </div>

      <div class="service_main">
        <div @click="hot" class="main_list">
          <div class="title">
            <p>热点问题</p>
            <span></span>
          </div>
          <div class="box_list">如何注册</div>
          <div class="box_list">认购的前提条件是什么</div>
          <div class="box_list">什么时间前协议</div>
        </div>

        <div @click="notice" class="main_list">
          <div class="title">
            <p>投资须知</p>
            <span></span>
          </div>
          <div class="box_list">如何注册</div>
          <div class="box_list">认购的前提条件是什么</div>
          <div class="box_list">什么时间前协议</div>
        </div>

        <div @click="help" class="main_list">
          <div class="title">
            <p>投后帮助</p>
            <span></span>
          </div>
          <div class="box_list">如何注册</div>
          <div class="box_list">认购的前提条件是什么</div>
          <div class="box_list">什么时间前协议</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "service",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
    methods:{
      // 热点问题
      hot(){
        let hotListData = [{
          title: '如何注册',
          content: '注册账号现有两种，手机号（成功登陆即为注册）和邮箱（避免邮箱），尽量引导手机号注册。',
        },{
          title: '登陆渠道',
          content: '注册账号现有两种，手机号（成功登陆即为注册）和邮箱（避免邮箱），尽量引导手机号注册。',
        },{
          title: '如何更改密码',
          content: '注册账号现有两种，手机号（成功登陆即为注册）和邮箱（避免邮箱），尽量引导手机号注册。',
        }];
        this.$router.push({
          path:'/serviceList',
          query:{
            title: '热点问题',
            listData: hotListData,
          },
        })
      },
      // 投资须知
      notice(){
        let noticeListData = [{
          title: '如何投资',
          content: '注册账号现有两种，手机号（成功登陆即为注册）和邮箱（避免邮箱），尽量引导手机号注册。',
        }];
        this.$router.push({
          path:'/serviceList',
          query:{
            title: '投资须知',
            listData: noticeListData,
          },
        })
      },
      // 投后帮助
      help(){
        let helpListData = [{
          title: '投后帮助',
          content: '注册账号现有两种，手机号（成功登陆即为注册）和邮箱（避免邮箱），尽量引导手机号注册。',
        },{
          title: '投后帮助',
          content: '注册账号现有两种，手机号（成功登陆即为注册）和邮箱（避免邮箱），尽量引导手机号注册。',
        }];
        this.$router.push({
          path:'/serviceList',
          query:{
            title: '投后帮助',
            listData: helpListData,
          },
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .service{
    .service_option{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: .42rem 0;
      .option_list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        >img{
          width: .6rem;
          height: .6rem;
        }
        >p{
          margin-top: .12rem;
          font-size: .28rem;
          color:rgba(51,51,51,1);
        }
      }
    }
    .service_main{
      padding: 0 .3rem 1rem;
      .main_list{
        background: #fff;
        width: 100%;
        background:rgba(255,255,255,1);
        box-shadow:0 .04rem .12rem rgba(184,187,199,0.15);
        border-radius: .1rem;
        padding: .3rem;
        &:not(:last-child){
          margin-bottom: .2rem;
        }
        .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: .2rem;
          p{
            font-size: .36rem;
            color:rgba(51,51,51,1);
          }
          span{
            background: url("../../assets/images/arrow_right.png") no-repeat;
            background-size: contain;
            width: .4rem;
            height: .4rem;
          }
        }
        .box_list{
          font-size: .28rem;
          color:rgba(51,51,51,.8);
          &:not(:last-child){
            margin-bottom: .08rem;
          }
        }
      }
    }
  }
</style>