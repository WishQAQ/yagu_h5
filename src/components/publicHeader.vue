<!--公用头部组件-->
<!--页面引用 使用:title="' 值 '" 设置标题-->
<template>
    <div :class="['public_header',{'transparent':transparent}]">
      <div class="goBack" @click="goBackBtn()"></div>
      <div class="title">{{title}}</div>
      <div class="share" v-if="share"></div>
      <div class="edit" v-if="edit">编辑</div>

      <el-dialog
        class="promptDialog"
        :visible.sync="promptDialog">
        <div class="title">温馨提示</div>
        <div class="content">{{message}}</div>
        <div class="dialog_btn">
          <div @click="promptDialog = false">取消</div>
          <div @click="determine">确定</div>
        </div>
      </el-dialog>

    </div>
</template>

<script>
  export default {
    name: "publicHeader",
    data() {
      return {
        promptDialog: false
      }
    },
    props: {
      // 开启透明头部
      transparent: {
        type: Boolean,
        default: () => false
      },
      // 开启验证返回
      goBack: {
        type: Boolean,
        default: () => false
      },
      // 信息提示
      message: {
        type: String,
        default: () => ''
      },
      // 开启模块返回
      goModule: {
        type: Boolean,
        default: () => false
      },
      // 标题
      title: {
        type: String,
        default: () => ''
      },
      // 开启分享按钮
      share: {
        type: Boolean,
        default: () => false
      },
      // 开启编辑按钮
      edit: {
        type: Boolean,
        default: () => false
      },
    },
    methods:{
      // 返回按钮
      goBackBtn(){
        if(!this.goBack && !this.goModule){  // 如未开启提示返回 且未开启模块返回 则直接返回上一页
          if (this.$route.query.goindex === 'true') {
            this.$router.push('/')
          } else {
            this.$router.back(-1)
          }
        } else if(!this.goModule){  // 如未开启模块返回 但开启提示返回 则打开提示框
          this.promptDialog = true
        } else {  // 如开启模块返回 则返回父组件一个boolean值
          this.$emit('goModule', this.goModule)
        }
      },

      // 确认返回上一页
      determine(){
        if (this.$route.query.goindex === 'true') {
          this.$router.push('/')
        } else {
          this.$router.back(-1)
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .public_header{
    height: .9rem;
    max-width: 750px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 .3rem;
    position: fixed;
    background: #fff;
    z-index: 9999;
    &.transparent{
      background: transparent;
      .goBack{
        background:rgba(51,51,51,0.85);
        &::before{
          background: url("../assets/images/goBack_white.png") no-repeat;
          background-size: contain;
        }
      }
      .share{
        background:rgba(51,51,51,0.85);
        &::before{
          background: url("../assets/images/share_white.png") no-repeat;
          background-size: contain;
        }
      }
    }
    .goBack{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: .6rem;
      height: .6rem;
      border-radius:50%;
      &::before{
        content: '';
        width: .44rem;
        height: .44rem;
        background: url("../assets/images/goBack.png") no-repeat;
        background-size: contain;
      }
      position: absolute;
      left: .3rem;
    }
    .title{
      font-size: .36rem;
      font-weight:normal;
      color:rgba(51,51,51,1);
    }
    .share{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius:50%;
      width: .6rem;
      height: .6rem;
      position: absolute;
      right: .3rem;
      &::before{
       content: '';
        width: .44rem;
        height: .44rem;
        background: url("../assets/images/share.png") no-repeat;
        background-size: contain;
      }
    }
    .edit{
      font-size: .28rem;
      color:rgba(32,32,32,1);
      position: absolute;
      right: .3rem;
    }
    .promptDialog{
      .title{
        font-size: .36rem;
        color:rgba(51,51,51,1);
        margin-bottom: .3rem;
      }
      .content{
        font-size: .36rem;
        color:rgba(51,51,51,1);
      }
      .dialog_btn{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1.2rem;
        width: 100%;
        border-top: .02rem solid  rgba(153,153,153,.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .36rem;
        color:rgba(51,51,51,1);
        cursor: pointer;
        >div{
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .36rem;
          color:rgba(51,51,51,1);
          &:last-child{
            border-left:.02rem solid rgba(153,153,153,.4);
            color:rgba(52,97,232,1);
          }
        }
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
        padding: .4rem .4rem 2.2rem;
        border-radius: .1rem;
      }
    }
  }
</style>
