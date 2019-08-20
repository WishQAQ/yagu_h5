<template>
  <div class="notice">
    <Header :title="'通知'" :edit="true"></Header>
    <div class="view_main">
      <div class="notice_main">
        <div class="notice_list">
          <div class="title">分红成功提醒</div>
          <div class="notice_message">您已分红成功您已分红成功您已分红成功您已分红成功您已分红成功您已分红成</div>
          <div class="notice_bottom">
            <p class="time">2019-04-23</p>
            <p class="details">查看详情</p>
          </div>
        </div>

        <NotInfo></NotInfo>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notice",
    components:{
      'Header': () => import('@/components/publicHeader'),
      'NotInfo': () => import('@/components/notInfo')
    },
  }
</script>

<style scoped lang="less">
  .notice{
    .notice_main{
      padding: .3rem;
      .notice_list{
        background:rgba(255,255,255,1);
        box-shadow:0 .04rem .06rem rgba(184,187,199,0.23);
        border-radius: .1rem;
        padding: .3rem .2rem;
        display: flex;
        flex-direction: column;
        margin-bottom: .3rem;

        .title{
          font-size: .32rem;
          color:rgba(32,32,32,1);
          margin-bottom: .28rem;
        }
        .notice_message{
          font-size: .24rem;
          color:rgba(51,51,51,1);
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
          margin-bottom: .16rem;
        }
        .notice_bottom{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .time{
            font-size: .24rem;
            color:rgba(197,200,214,1);
          }
          .details{
            font-size: .24rem;
            color:rgba(51,51,51,1);
            &::after{
              content: '>';
              font-size: .24rem;
              color:rgba(197,200,214,1);
              margin-left: .1rem;
            }
          }
        }
      }
    }
  }
</style>
