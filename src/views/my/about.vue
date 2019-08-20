<template>
  <div class="about">
    <Header-Div :title="'关于我们'" :goModule="true" v-on:goModule="goModule"></Header-Div>
    <div class="view_main">
      <div v-if="showAboutMain" class="about_main">
        <div class="about_list" @click="showAbout">
          <img src="../../assets/images/about.png" alt="">
          <p>关于我们</p>
        </div>

        <div class="about_list" @click="showProtocol">
          <img src="../../assets/images/protocol.png" alt="">
          <p>法律协议</p>
        </div>

        <div class="about_list">
          <img src="../../assets/images/praise.png" alt="">
          <p>五星好评</p>
        </div>

      </div>
      <div v-if="showAboutMessage" class="about_content">
        <div class="banner"></div>
        <div class="content_main">
          <div class="title">简介</div>
          <div class="text">
            很长很长的标题，甚至超过了两行，比两…这是文章的标题，非常长的标题，很长很长很长的标题，甚至超过了两行，比两…这是文章的标题，非常长的标题，很长很长很长的标题，甚至超过了两行，比两…这是文章的标题，非常长的标题，很长很长很长的标题，甚至超过了两行，很长很长很长的标题，比两…
          </div>

        </div>
      </div>
      <div v-if="showAboutProtocol" class="about_protocol">
        <div class="protocol_list" @click="openDialog('user')">
          <p>用户服务协议</p>
          <span></span>
        </div>

        <div class="protocol_list" @click="openDialog('pay')">
          <p>支付协议</p>
          <span></span>
        </div>

        <div class="protocol_list" @click="openDialog('risk')">
          <p>投资风险提示书</p>
          <span></span>
        </div>

        <div class="protocol_list" @click="openDialog('privacy')">
          <p>隐私政策</p>
          <span></span>
        </div>


      </div>
    </div>

    <el-dialog
      class="protocol_dialog"
      :visible.sync="protocolDialog">
      <div class="dialog_main">
        <div class="title">{{dialogTitle}}</div>

        <div class="content">{{dialogMessage}}</div>

        <div class="close_dialog" @click="protocolDialog = false">我已知晓</div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "about",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
    data(){
      return {
        showAboutMain: true,  // 关于我们首页
        showAboutMessage: false,  // 关于我们详情
        showAboutProtocol: false,  // 法律协议

        protocolDialog: false,  // 弹窗
        dialogTitle: '', // 标题
        dialogMessage: '', // 内容
      }
    },
    methods:{
      // 打开关于我们详情
      showAbout(){
        this.showAboutMain = false;
        this.showAboutMessage = true;
        this.showAboutProtocol = false
      },
      // 打开法律协议
      showProtocol(){
        this.showAboutMain = false;
        this.showAboutMessage = false;
        this.showAboutProtocol = true
      },

      // 打开弹窗  返回值 user用户协议 pay支付协议 risk风险提示书 privacy隐私政策
      openDialog(val){
        if(val === 'user'){  // 获取用户协议内容
          this.protocolDialog = true;
          this.dialogTitle = '用户服务协议';
          this.dialogMessage = '用户服务协议内容'
        } else if(val === 'pay'){  // 获取支付协议内容
          this.protocolDialog = true;
          this.dialogTitle = '支付协议';
          this.dialogMessage = '支付协议内容'
        } else if(val === 'risk'){  // 获取风险提示书内容
          this.protocolDialog = true;
          this.dialogTitle = '投资风险提示书';
          this.dialogMessage = '投资风险提示书内容'
        } else if(val === 'privacy'){  // 获取隐私政策内容
          this.protocolDialog = true;
          this.dialogTitle = '隐私政策';
          this.dialogMessage = '隐私政策内容'
        } else {
          this.$message.error('操作错误，请稍后重试')
        }
      },

      // 导航栏返回按钮监听
      goModule: function (goModule) {
        if(this.showAboutMain){  // 如当前显示为首页 则直接返回上一页
          if (this.$route.query.goindex === 'true') {
            this.$router.push('/')
          } else {
            this.$router.back(-1)
          }
        } else if(!this.showAboutMain){  // 如果当前显示不为首页 则关闭组件 打开首页显示
          this.showAboutMain = goModule;
          this.showAboutMessage = false;
          this.showAboutProtocol = false;
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .about{
    .view_main{
      background: #fff;
      .about_main{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: .68rem;
        .about_list{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 2.1rem;
          height: 1.54rem;
          background:rgba(255,255,255,1);
          box-shadow:0 .04rem .04rem rgba(153,153,153,0.2);
          border-radius: .1rem;
          padding-left: .36rem;
          &:not(:nth-child(3n)){
            margin-right: .28rem;
          }
          >img{
            width: .4rem;
            height: .4rem;
            object-fit: contain;
          }
          >p{
            font-size: .28rem;
            margin-top: .2rem;
            color:rgba(32,32,32,1);
          }
        }
      }
      .about_content{
        .banner{
          background: url("../../assets/images/about_banner.png") no-repeat;
          background-size: contain;
          width: 100%;
          height: 4.44rem;
        }
        .content_main{
          margin-top: .6rem;
          padding: 0 .3rem 2rem;
          .title{
            font-size: .44rem;
            color:rgba(51,51,51,1);
            margin-bottom: .4rem;
          }
          .text{
            font-size: .24rem;
            color:rgba(51,51,51,1);
          }
        }
      }
      .about_protocol{
        padding: .04rem .3rem 2rem;
        .protocol_list{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 1.4rem;
          border-bottom: .02rem solid rgba(153,153,153,.2);
          p{
            font-size: .36rem;
            color:rgba(32,32,32,1);
          }
          span{
            background: url("../../assets/images/arrow_right.png") no-repeat;
            background-size: contain;
            width: .4rem;
            height: .4rem;
          }
        }
      }
    }
  }

  .protocol_dialog{
    .dialog_main{
      background:rgba(255,255,255,1);
      border-radius: .1rem;
      padding: .48rem .3rem 1.2rem;
      .title{
        width: 100%;
        font-size: .36rem;
        display: block;
        text-align: center;
        margin-bottom: .54rem;
        color:rgba(51,51,51,1);
      }
      .content{
        font-size: .28rem;
        color:rgba(112,112,112,1);
        padding-bottom: .6rem;
        max-height: 6rem;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .close_dialog{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .36rem;
        color:rgba(51,51,51,1);
        border-top:1px solid rgba(153,153,153,.4);
      }
    }
  }

  /*element组件样式控制*/
  /deep/.el-dialog__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    .el-dialog{
      margin: unset !important;
      width: calc(100% - 1.2rem);
      position: relative;
      .el-dialog__header{
        display: none;
      }
      .el-dialog__body{
        padding: unset !important;
        border-radius: .1rem;
      }
    }
  }

</style>
