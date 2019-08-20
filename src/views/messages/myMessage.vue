<template>
  <div class="my_message">
    <Header :title="'我的信息'"></Header>
    <div class="view_main">
      <div class="message_main">

        <div class="message_list" @click="goNotice()">
          <div class="message_icon"><img src="../../assets/images/message_notice.png" alt=""></div>
          <div class="message_content">
            <div class="message_name">
              <p>通知</p>
              <div class="time">05-09</div>
            </div>
            <span>分红成功提醒</span>
          </div>
        </div>

        <div class="message_list">
          <div class="message_icon"><img src="../../assets/images/message_activity.png" alt=""></div>
          <div class="message_content">
            <div class="message_name">
              <p>活动公告</p>
<!--              <div class="time">05-09</div>-->
            </div>
<!--            <span>分红成功提醒</span>-->
          </div>
        </div>

        <div class="message_list">
          <div class="message_icon"><img src="../../assets/images/message_offer.png" alt=""></div>
          <div class="message_content">
            <div class="message_name">
              <p>优惠信息</p>
              <div class="time">05-09</div>
            </div>
            <span>新项目优惠</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "myMessage",
    components:{
      'Header': () => import('@/components/publicHeader'),
    },
    methods:{
      // 通知
      goNotice(){
        this.$router.push({
          path:'/notice',
          query:{

          },
        })
      },
    },
  }
</script>

<style scoped lang="less">
  .my_message{
    .view_main{
      background: #fff;
      .message_main{
        padding: .38rem .3rem 0;
        .message_list{
          display: flex;
          align-items: center;
          .message_icon{
            width: 1rem;
            height: 1rem;
            margin-right: .2rem;
            flex-shrink: 0;
            img{
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          .message_content{
            display: flex;
            justify-content: center;
            flex: 1;
            height: 100%;
            flex-direction: column;
            padding: .26rem 0;
            border-bottom: .02rem solid rgba(153,153,153,.2);
            min-height: 1.34rem;

            .message_name{
              display: flex;
              align-items: center;
              justify-content: space-between;
              p{
                font-size: .36rem;
                color:rgba(45,45,45,1);
              }
              .time{
                font-size: .24rem;
                color:rgba(197,200,214,1);
              }
            }
            >span{
              font-size: .28rem;
              color:rgba(112,112,112,1);
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
          }
        }
      }
    }
  }
</style>
