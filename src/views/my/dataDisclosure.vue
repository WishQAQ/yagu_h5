<template>
  <div class="data_disclosure">
    <Header-Div :title="'数据披露'"></Header-Div>
    <div class="view_main">
      <div class="data_main">
        <div class="banner"><img src="../../assets/images/data_disclosure_banner.png" alt=""></div>

        <div class="platform_data">
          <div class="title">
            <p>平台数据</p>
            <span>每日0:00更新</span>
          </div>

          <div class="data_box">
            <div class="box_list">
              <div>879465<span>位</span></div>
              <p>参与人</p>
            </div>
            <div class="box_list">
              <div>6666<span>个</span></div>
              <p>投资项目</p>
            </div>
          </div>

          <div class="data_box">
            <div class="box_list">
              <div>55.46<span>亿</span></div>
              <p>成交金额</p>
            </div>
            <div class="box_list">
              <div>1580<span>天</span></div>
              <p>成立至今</p>
            </div>
          </div>

        </div>
        <div class="operation_report">
          <div class="title">运营报告</div>
          <div class="report_list">
            <img src="../../assets/images/operation_report_1.png" alt="">
            <div class="list_title">项目成功退出报告</div>
            <div class="list_message">
              <p>成立至今</p>
              <p>已完成超过500个项目融资</p>
            </div>
          </div>

          <div class="report_list">
            <img src="../../assets/images/operation_report_2.png" alt="">
            <div class="list_title">2019年5月分红报告</div>
            <div class="list_message">
              <p>300个分红项目</p>
              <p>总额达到¥10000.0034</p>
            </div>
          </div>

          <div class="report_list">
            <img src="../../assets/images/operation_report_3.png" alt="">
            <div class="list_title">亚谷金融合作回顾</div>
            <div class="list_message">
              <p>十家顶级品牌合作</p>
              <p>上百家中高端精品投资</p>
            </div>
          </div>

          <div class="report_list">
            <img src="../../assets/images/operation_report_4.png" alt="">
            <div class="list_title">2019亚谷金融年总盘点</div>
            <div class="list_message">
              <p>统计维度</p>
              <p>2018年1月1日-12月31日</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dataDisclosure",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .data_disclosure{
    .view_main{
      background: #fff;
      .data_main{
        .banner{
          width: 100%;
          height: 4.2rem;
          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .platform_data{
          padding: .04rem .3rem;
          .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: .52rem;
            p{
              font-size: .44rem;
              color:rgba(32,32,32,1);
            }
            span{
              font-size: .24rem;
              color:rgba(80,80,80,1);
            }
          }
          .data_box{
            display: flex;
            align-items: center;
            justify-content: center;
            &:not(:last-child){
              border-bottom: .02rem solid rgba(153,153,153,.2);
            }
            &:first-child{
              .box_list{
                justify-content: flex-start;
              }
            }
            &:last-child{
              margin-bottom: .72rem;
              .box_list{
                justify-content: flex-end;
              }
            }
            .box_list{
              flex: 1;
              height: 1.5rem;
              display: flex;
              align-items: center;
              flex-direction: column;
              &:first-child{
                border-right: .02rem solid rgba(153,153,153,.2);
              }
              >div{
                font-size: .48rem;
                color:rgba(51,51,51,1);
                >span{
                  font-size: .24rem;
                  color:rgba(51,51,51,1);
                  margin-left: .08rem;
                }
              }
              >p{
                font-size: .24rem;
                color:rgba(51,51,51,1);
              }
            }
          }
        }
        .operation_report{
          padding: 0 .3rem;
          .title{
            font-size: .44rem;
            color:rgba(32,32,32,1);
            margin-bottom: .2rem;
          }

          .report_list{
            height: 2rem;
            width: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: .3rem;
            margin-bottom: .2rem;
            >img{
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: contain;
              z-index: 0;
              left: 0;
              top: 0;
            }
            >div{
              position: relative;
            }
            .list_title{
              font-size: .36rem;
              color:rgba(255,255,255,1);
            }
            .list_message{
              font-size: .24rem;
              color:rgba(255,255,255,.5);
            }
          }


        }
      }
    }
  }
</style>
