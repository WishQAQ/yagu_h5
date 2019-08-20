<template>
  <div class="details">
    <Header-Div :title="'项目详情'"></Header-Div>
    <div class="view_main">
      <div class="details_main">
        <div class="info">
          <div class="title">基本信息</div>
          <div class="list">
            <p>项目公司：广告仲朵酒店管理有限公司</p>
            <p>项目估价：3800万</p>
            <p>筹集规模：800万（可超募至1800万）</p>
            <p>筹集模式：收益权投资</p>
            <p>起头金额：3.00万</p>
            <p>每人限投：200万</p>
            <p>提前退出窗口期：有</p>
          </div>
        </div>
        <img src="../../assets/images/project_details.png" alt="">
        <div class="project">
          <div class="title">项目特色</div>
          <div class="list">
            <p>1.晚暗下来的星海月夜蝉鸣蝈蝈叫</p>
            <p>2.憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回</p>
            <p>3.前的故事孩童憧憬着长大在夜晚暗下来的。</p>
            <p>4.大人回忆从前的故事</p>
            <p>5.憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回忆从前的故事</p>

          </div>

        </div>
        <div class="bottom">
          *策划编辑：王皓
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "details",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .details{
    .view_main{
      background: #fff;
      .details_main{
        padding: 1rem .3rem 0;
        font-size: .28rem;
        color:rgba(51,51,51,1);
        height: 100%;
        display: flex;
        flex-direction: column;
        img{
          width: 100%;
          object-fit: contain;
          margin-top: .32rem;
        }
        .title{
          font-size: .4rem;
          color:rgba(51,51,51,1);
          margin-bottom: .2rem;
        }
        .list{
          font-size: .28rem;
          color:rgba(51,51,51,1);
          >p{
            &:not(:last-child){
              margin-bottom: .2rem;
            }
          }
        }
        .project{
          margin-top: .6rem;
          margin-bottom: 1rem;
        }
        .bottom{
          margin-top: auto;
          height: 1rem;
          display: flex;
          align-items: center;
          border-top: .02rem solid rgba(153,153,153,.2);
          font-size: .24rem;
          color:rgba(153,153,153,1);
          flex-shrink: 0;
        }
      }
    }
  }
</style>