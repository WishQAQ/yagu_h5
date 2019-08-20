<template>
  <div class="simulation_project">
    <Header :transparent="openTransparent" :share="true"></Header>
    <div class="banner"><img src="../../assets/images/simulationProject_background.png" alt=""></div>

    <div class="project_details">
      <div class="top">
        <Tags :tags="tags"></Tags>
        <div class="time">认购中：剩余2天</div>
      </div>
      <div class="title">新手模拟项目</div>
      <div class="message">平台简介平台简介平台简介平台简介平台简介平台简介平台简介平台简介平台简介</div>
      <ProgressBar :schedule="'30%'"></ProgressBar>
      <div class="info">
        <div>
          <p>100万</p>
          <span>目标</span>
        </div>
        <div>
          <p>620万</p>
          <span>已预约</span>
        </div>
        <div>
          <p>6万</p>
          <span>起投金额</span>
        </div>
      </div>
    </div>

    <div class="details_list">
      <div class="list_box">
        <p class="title">品牌故事</p>
        <p class="arrow"></p>
      </div>
      <div class="list_box">
        <p class="title">项目详情</p>
        <p class="arrow"></p>
      </div>
      <div class="list_box">
        <p class="title">发起团队</p>
        <div class="team">
          <span>广告仲朵</span>
          <img src="../../assets/images/team_image.png" alt="">
        </div>
      </div>
      <div class="list_box">
        <p class="title">地理位置</p>
        <div class="address">
          <div class="address_text">
            <p>北京</p>
            <span>北京市石西路1-5-48</span>
          </div>
          <span class="address_icon"></span>
        </div>
      </div>
      <div class="list_box">
        <p class="title">信息披露</p>
        <p class="arrow"></p>
      </div>
      <div class="list_box">
        <p class="title">风险提示</p>
        <p class="arrow"></p>
      </div>

    </div>

    <div class="program">
      <div class="title">投资方案</div>
      <div class="program_box">
        <div class="box_title">
          <Tags :tags="['虚拟']"></Tags>
          <span>新手模拟项目</span>
        </div>
        <div class="program_expected">预测最高投资收益率：10%+1%/年*</div>
        <div class="program_message">
          项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目
          回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目回报项目
        </div>
        <div class="more_btn">查看更多</div>
        <div class="program_bottom">
          <div class="amount">
            <p class="amount_text"><span>&yen;</span>20000.00</p>
            <p class="amount_number">剩余15份 / 共30份</p>
          </div>
          <div class="buy_btn">认购</div>
        </div>
      </div>
    </div>

    <div class="shortcut">
      <div><img src="../../assets/images/group.png" alt="">进群交流</div>
      <div><img src="../../assets/images/service_online.png" alt="">在线客服</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "simulationProject",
    components:{
      'Header': () => import('@/components/publicHeader'),
      'Tags': () => import('@/components/tags'),
      'ProgressBar': () => import('@/components/ProgressBar')
    },
    data(){
      return {
        scroll: '',
        openTransparent: true,
        tags: ['全球',' 虚拟'],
      }
    },
    created() {
      console.log(this.$route.query.name);
    },
    methods: {
      /**
       * @Description: 监听页面高度 如滑动页面高度超过210px 则关闭透明头部
       * @author Wish
       * @data 2019/8/18
      */
      menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if(this.scroll > 210){
          this.openTransparent = false
        } else {
          this.openTransparent = true
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.menu)
    },
  }
</script>

<style scoped lang="less">
  .simulation_project{
    position: relative;
    padding-bottom: 1.2rem;
    .banner{
      width: 100%;
      height: 4.2rem;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .project_details{
      padding: .3rem;
      background: #fff;
      .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .2rem;
        .time{
          font-size: .24rem;
          color:rgba(249,107,28,1);
        }
      }
      .title{
        font-size: .48rem;
        color:rgba(51,51,51,1);
        margin-bottom: .16rem;
      }
      .message{
        font-size: .24rem;
        color:rgba(153,153,153,1);
        margin-bottom: .2rem;
      }
      .info{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: .46rem;
        >div{
          display: flex;
          flex-direction: column;
          >p{
            font-size: .36rem;
            color:rgba(51,51,51,1);
          }
          >span{
            font-size: .24rem;
            color:rgba(153,153,153,1);
          }
        }
      }
    }
    .details_list{
      margin-top: .2rem;
      background:rgba(255,255,255,1);
      padding: 0 .3rem;
      .list_box{
        height: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child){
          border-bottom: .02rem solid rgba(153,153,153,.2);
        }
        .title{
          font-size: .32rem;
          color:rgba(51,51,51,1);
        }
        .arrow{
          background: url("../../assets/images/arrow_right.png") no-repeat;
          background-size: contain;
          width: .4rem;
          height: .4rem;
        }
        .team{
          font-size: .32rem;
          color:rgba(51,51,51,1);
          display: inline-flex;
          align-items: center;
          >img{
            width: .6rem;
            height: .6rem;
            object-fit: cover;
            border-radius: 50%;
            overflow: hidden;
            margin-left: .4rem;
          }
        }
        .address{
          display: flex;
          align-items: center;
          .address_text{
            text-align: right;
            p{
              font-size: .32rem;
              color:rgba(51,51,51,1);
            }
            span{
              display: block;
              font-size: .24rem;
              color:rgba(51,51,51,1);
            }
          }
          .address_icon{
            background: url("../../assets/images/address.png") no-repeat;
            background-size: contain;
            width: .6rem;
            height: .6rem;
            margin-left: .2rem;
          }
        }
      }
    }
    .program{
      margin-top: .2rem;
      background: #fff;
      padding: .4rem .3rem;
      .title{
        font-size: .44rem;
        color:rgba(51,51,51,1);
        margin-bottom: .4rem;
      }
      .program_box{
        width: 100%;
        border: .02rem solid rgba(153,153,153,1);
        box-shadow: 0 .04rem .04rem rgba(197,228,255,0.16);
        opacity:1;
        border-radius: .1rem;
        padding: .3rem;
        .box_title{
          display: flex;
          align-items: center;
          margin-bottom: .16rem;
          >span{
            font-size: .32rem;
            color:rgba(51,51,51,1);
            margin-left: .12rem;
          }
        }
        .program_expected{
          font-size: .24rem;
          color:rgba(112,112,112,1);
        }
        .program_message{
          font-size: .24rem;
          color:rgba(112,112,112,1);
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
        }
        .more_btn{
          font-size: .24rem;
          color:rgba(51,51,51,1);
          margin-top: .2rem;
        }
        .program_bottom{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: .52rem;
          .amount{
            display: flex;
            flex-direction: column;
            .amount_text{
              font-size: .44rem;
              font-weight:bold;
              color:rgba(249,107,28,1);
              >span{
                font-size: .28rem;
                font-weight:400;
              }
              &::after{
                content: '/份';
                font-size: .24rem;
                color:rgba(51,51,51,1);
              }
            }
            .amount_number{
              font-size: .24rem;
              color:rgba(112,112,112,1);
            }
          }
          .buy_btn{
            width: 2.4rem;
            height: .8rem;
            background:rgba(52,97,232,1);
            border-radius: .1rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: .32rem;
            color:rgba(255,255,255,1);
          }
        }
      }
    }
    .shortcut{
      position: fixed;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 1rem;
      background:rgba(255,255,255,1);
      z-index: 9999;
      div{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child{
          border-right: 1px dashed rgba(153,153,153,.2);
        }
        >img{
          width: .48rem;
          height: .48rem;
          object-fit: contain;
          margin-right: .08rem;
        }
      }
    }
  }
</style>
