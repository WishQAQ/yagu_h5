<template>
  <div class="exclusive">
    <Header-Div :title="'新手专享'" :share="true"></Header-Div>

    <div class="view_main">
      <div class="ex_title">
        <p>新手模拟项目</p>
        <span>快速了解投资流程</span>
      </div>

      <div class="ex_card">
        <div class="card_title">投资100元，7天后即可或得</div>
        <div class="card_content">
          <p>150</p>
          <span>元</span>
          <p class="symbol">+</p>
          <p>200</p>
          <span>积分</span>
        </div>
        <div class="card_btn" @click="goProject()">新手抢购</div>
      </div>

      <div class="ex_advisory" @click="serviceDialog = true">我要咨询</div>

      <el-dialog
        title="提示"
        :visible.sync="serviceDialog">
        <div class="dialog_main">
          <div class="title">客服微信号:{{weChartNumber}}</div>
          <div class="content">请备注“新手专享”添加微信客服，有客服微信请勿重复添加</div>
          <div class="dialog_btn copyOrderSn" data-clipboard-action="copy" :data-clipboard-text="weChartNumber" @click="copy">点击复制微信号</div>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
  export default {
    name: "exclusive",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
    data(){
      return {
        serviceDialog: false,
        weChartNumber: 'lfkjalkjflasjf',
      }
    },
    methods:{
      /**
       * @Description: 复制粘贴板功能
       * @author Wish
       * @data 2019/8/18
      */
      copy() {
        let _this = this;
        let clipboard = new this.clipboard(".copyOrderSn");
        clipboard.on('success', function () {
          _this.$message.success("复制成功");
          clipboard.destroy();
          _this.serviceDialog = false;
        });
        clipboard.on('error', function () {
          _this.$message.error("复制失败");
          clipboard.destroy();
          _this.serviceDialog = false;
        });
      },

      /**
       * @Description: 跳转模拟项目
       * @author Wish
       * @data 2019/8/18
      */
      goProject(){
        this.$router.push({
          path:'/simulationProject',
          query:{
            name: '模拟项目参数'
          },
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .exclusive{
    background: #fff;
    .view_main{
      .ex_title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: .64rem;
        margin-bottom: .6rem;
        >p{
          font-size: .48rem;
          font-weight:normal;
          color:rgba(32,32,32,1);
        }
        >span{
          display: block;
          font-size:.28rem;
          color:rgba(112,112,112,1);
        }
      }
      .ex_card{
        background: url("../../assets/images/exclusive_card.png") no-repeat;
        background-size: contain;
        height: 3.6rem;
        width: calc(100% - .6rem);
        margin: 0 .3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .card_title{
          font-size: .24rem;
          color:rgba(255,255,255,1);
        }
        .card_content{
          display: flex;
          align-items: baseline;
          margin: .2rem auto .3rem;
          color:rgba(255,255,255,1);
          >p{
            font-size: .76rem;
          }
          >span{
            font-size: .36rem;
            margin-left: .16rem;
          }
          .symbol{
            margin: 0 .4rem;
          }
        }
        .card_btn{
          padding: 0 .84rem;
          height: .84rem;
          background:rgba(255,163,0,1);
          border-radius: .46rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: .32rem;
          color:rgba(255,255,255,1);
        }
      }
      .ex_advisory{
        position: absolute;
        bottom: 1.2rem;
        margin: 0 .3rem;
        width: calc(100% - .6rem);
        height: 1rem;
        background:rgba(52,97,232,1);
        border-radius: .1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: .36rem;
        color:rgba(255,255,255,1);
        &::before{
          content: '';
          background: url("../../assets/images/service.png") no-repeat;
          background-size: contain;
          width: .4rem;
          height: .4rem;
          margin-right: .16rem;
        }
      }
    }
  }

  .dialog_main{
    padding: .4rem .4rem 2rem;
    .title{
      font-size: .36rem;
      color:rgba(51,51,51,1);
      margin-bottom: .46rem;
    }
    .content{
      font-size: .28rem;
      color:rgba(112,112,112,1);
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
