<template>
  <div class="risk_assessment">
    <Header-Div :title="'风险评测'" :goBack="submitGoBack" :message="'当前评估还未结束，退出后将不保留当前进度'"></Header-Div>
    <div class="view_main">
      <div class="risk_main" v-if="showProblem">
        <div class="icon"></div>
        <div class="message">为便于您了解自身的风险承受能力，选择适合的投资产品和服务,请填写以下风险承受能力评估问卷。</div>
        <div class="risk_btn" @click="startAssessment()">开始测评</div>
      </div>

      <el-carousel
        trigger="click"
        :loop="false"
        :autoplay="false"
        :initial-index="problemIndex"
        ref="problemList"
        class="problem_list"
        v-if="showProblemList">
        <div class="title">
          <p>共10到测评题（{{problemNumber}}）</p>
          <p class="backProblem" v-if="problemNumber > 1" @click="backProblem()">返回上一题</p>
        </div>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">您的年龄是？</div>

          <el-radio-group v-model="problemOne" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :fill="'transparent'" :label="index" v-for="(item,index) in problemOneList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemOne === index}]"></span>
            </el-radio>
          </el-radio-group>

        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">您家庭预计进行投资的资金占家庭现有总资产(不含自住、自用房产及汽车等固定资产)的比例是？</div>
          <el-radio-group v-model="problemTwo" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemTwoList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemTwo === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">是否有过投资股票、基金或债券的经历？</div>
          <el-radio-group v-model="problemThree" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemThreeList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemThree === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">您目前投资的主要目的是？</div>
          <el-radio-group v-model="problemFour" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemFourList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemFour === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">您预期的投资期限是？</div>
          <el-radio-group v-model="problemFives" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemFivesList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemFives === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">假设您参加一项有奖竞赛节目，并已胜出，您希望获得的奖励方案？</div>
          <el-radio-group v-model="problemSix" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemSixList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemSix === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。您将您的投资资产分配为？</div>
          <el-radio-group v-model="problemSeven" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemSevenList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemSeven === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">您刚刚有足够的储蓄实践你自己一直梦寐以求的旅行，但是出发前三个星期，您忽然被解雇。您会？</div>
          <el-radio-group v-model="problemEight" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemEightList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemEight === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">如果投资金额为50万元人民币，以下四个投资选择，您个人比较喜欢？</div>
          <el-radio-group v-model="problemNine" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemNineList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemNine === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

        <el-carousel-item class="problem_card" name="problemIndex">
          <div class="card_title">您的投资经验可以被概括为？</div>
          <el-radio-group v-model="problemTen" class="card_problem_list" @change="setActiveItem(problemNumber)">
            <el-radio :label="index" v-for="(item,index) in problemTenList" :key="index">
              <span class="list_name">{{item}}</span>
              <span :class="['list_icon',{'active': problemTen === index}]"></span>
            </el-radio>
          </el-radio-group>
        </el-carousel-item>

      </el-carousel>
      <div class="submit" v-if="showSubmit" @click="submitFraction()">提交</div>

      <div class="risk_main" v-if="showResult">
        <div class="icon"></div>
        <div class="type">“{{resultType}}”</div>
        <div class="message">为便于您了解自身的风险承受能力，选择适合的投资产品和服务,请填写以下风险承受能力评估问卷。</div>
        <div class="risk_btn" @click="getUserInfo()">我知道了</div>
        <div class="prompt">投资有风险，决策须谨慎</div>
        <div class="retry_btn" @click="retryProblem">重新测评</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "riskAssessment",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
    data(){
      return {
        showProblem: true,  // 开始评测界面
        showProblemList: false,  // 答题界面
        showSubmit: false,  // 提交按钮
        showResult: false,  // 结算界面

        submitGoBack: false,  // 是否开启验证返回框

        resultType: '',  // 计算类型

        problemIndex: 0,  // 当前走马灯index
        problemNumber: 1,  // 当前答题数

        problemOne: '',
        problemOneList: ['60岁以上','46岁-60岁','36岁-45岁','26岁-35岁','25岁以下'],

        problemTwo: '',
        problemTwoList: ['低于10%','10%-25%','25%-40%','40%-55%','55%以上'],

        problemThree: '',
        problemThreeList: ['没有','有，少于3年','有，3～5年','有，超过5年'],

        problemFour: '',
        problemFourList: ['资产保值，我不愿意承担任何投资风险','尽可能保证本金安全，不在乎收益率比较低','产生较多的收益，可以承担一定的投资风险','实现资产大幅增长，愿意承担很大的投资风险'],

        problemFives: '',
        problemFivesList: ['少于1年','1—3年','3—5年','5—10年','10年以上'],

        problemSix: '',
        problemSixList: ['立刻拿到1万元现金','有50％机会赢取5万元现金的抽奖','有25％机会赢取10万元现金的抽奖','有5％机会赢取100万元现金的抽奖'],

        problemSeven: '',
        problemSevenList: ['全部投资于A','大部分投资于A','两种投资各一半','大部分投资于B','全部投资于B'],

        problemEight: '',
        problemEightList: ['取消旅行','选择另外一个比较普通的旅行','依照原定的计划，因为您需要充足的休息来准备寻找新的工作','延长路程，因为这次旅行可能成为您最后一次豪华旅行'],

        problemNine: '',
        problemNineList: ['最好的情况会赚2万元（4％）人民币，最差的情况下没有损失','最好的情况会赚8万元（16％）人民币，最差的情况下损失2万元（4％）人民币','最好的情况会赚26万元（52％）人民币，最差的情况下损失8万元（16％）人民币','最好的情况会赚48万元（96％）人民币，最差的情况下损失24万元（48％）人民币'],

        problemTen: '',
        problemTenList: ['有限：除银行活期账户和定期存款外，我基本没有其他投资经验','一般：除银行活期账户和定期存款外，我购买过基金、保险等理财产品，但还需要进一步的指导','丰富：我是一位有经验的投资者，参与过股票、基金等产品的交易，并倾向于自己做出投资决策','非常丰富：我是一位非常有经验的投资者，参与过权证、期货或创业板等高风险产品的交易'],
      }
    },
    mounted(){
    },
    methods:{
      // 开始评测
      startAssessment(){
        this.showProblem = false;
        this.showProblemList = true;
      },
      // 选中答案并且切换下一道题
      setActiveItem(index){
        this.submitGoBack = true
        if(this.problemNumber <= 9){
          this.problemNumber = this.problemNumber + 1;
        }
        if(this.problemTen !== ''){
          this.showSubmit = true
        }
        this.$refs.problemList.setActiveItem(index)
      },
      // 返回上一题
      backProblem(){
        this.problemNumber  = this.problemNumber - 2;
        this.setActiveItem(this.problemNumber);
        this.showSubmit = false
      },

      // 提交分数
      submitFraction(){
        let totalScore =
            this.problemOne + this.problemTwo + this.problemThree +
            this.problemFour + this.problemFives + this.problemSix +
            this.problemSeven + this.problemEight +this.problemNine +
            this.problemTen + 10;
        console.log(totalScore);
        if(totalScore <= 18){
          this.resultType = '保守型'
        } else if(totalScore >= 19 && totalScore <= 27){
          this.resultType = '稳健型'
        } else if(totalScore >= 28 && totalScore <= 36){
          this.resultType = '成长型'
        } else if(totalScore >= 37){
          this.resultType = '激进型'
        }

        this.showProblem = false;
        this.showProblemList = false;
        this.showSubmit = false;
        this.showResult = true;
        this.submitGoBack = false
      },

      // 重新答题
      retryProblem(){
        this.problemOne = '';
        this.problemTwo = '';
        this.problemThree = '';
        this.problemFour = '';
        this.problemFives = '';
        this.problemSix= '';
        this.problemSeven = '';
        this.problemEight = '';
        this.problemNine = '';
        this.problemTen= '';
        this.problemIndex = 0;
        this.problemNumber= 1;
        this.showProblem = false;
        this.showProblemList = true;
        this.showSubmit = false;
        this.showResult = false;
      },

      // 跳转个人中心
      getUserInfo(){

      }

    }
  }
</script>

<style scoped lang="less">
  .risk_assessment{
    .view_main{
      .risk_main{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 .3rem;
        background: #fff;
        height: 100%;
        .icon{
          background: url("../../assets/images/risk_assessment_icon.png") no-repeat;
          background-size: contain;
          width: 2.6rem;
          height: 2.6rem;
          margin: .8rem 0;
        }
        .message{
          font-size: .24rem;
          text-align: center;
          color:rgba(91,91,91,1);
          margin-bottom: .6rem;
        }
        .risk_btn{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 1rem;
          background:rgba(52,97,232,1);
          border-radius: .1rem;
          font-size: .36rem;
          color:rgba(255,255,255,1);
        }
        .type{
          font-size: .48rem;
          color:rgba(32,32,32,1);
          margin-bottom: .8rem;
        }
        .prompt{
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-top: .4rem;
          font-size: .24rem;
          color:rgba(80,80,80,1);
        }
        .retry_btn{
          font-size: .24rem;
          color:rgba(52,97,232,1);
          margin: auto 0 .8rem;
        }
      }
      .problem_list{
        padding: 0 .3rem;
        height: calc(100% - 2.8rem);
        .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: .4rem 0;
          p{
            &:first-child{
              font-size: .24rem;
              color:rgba(80,80,80,1);
            }
            &.backProblem{
              font-size: .24rem;
              color:rgba(52,97,232,1);
            }
          }
        }
        .problem_card{
          height: auto;
          width: calc(100% - .6rem);
          background:rgba(255,255,255,1);
          box-shadow:0 .04rem .12rem rgba(184,187,199,0.15);
          border-radius: .1rem;
          top: 1.16rem;
          left: .3rem;
          padding: .4rem .3rem;
          .card_title{
            font-size: .36rem;
            color:rgba(51,51,51,1);
            margin-bottom: .4rem;
          }
          .card_problem_list{
            display: flex;
            flex-direction: column;
            /deep/.el-radio{
              padding: .4rem 0;
              margin: unset;
              -webkit-tap-highlight-color:transparent;
              .el-radio__input{
                display: none;
              }
            }
            /deep/.el-radio__label{
              padding: unset;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .list_name{
                font-size: .28rem;
                color:rgba(51,51,51,.8);
                white-space: pre-wrap;
                width: 80%;
              }
              .list_icon{
                background: url("../../assets/images/radio_default.png") no-repeat;
                background-size: contain;
                width: .3rem;
                height: .3rem;
                flex-shrink: 0;
                &.active{
                  background: url("../../assets/images/radio_active.png") no-repeat;
                  background-size: contain;
                }
              }
            }
          }
        }

        /*清除样式*/
        /deep/.el-carousel__container{
          position: unset !important;
          .el-carousel__arrow{
            display: none !important;
          }
        }
        /deep/.el-carousel__indicators{
          display: none !important;
        }
      }
      .submit{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: calc(100% - .6rem);
        height: 1rem;
        background:rgba(52,97,232,1);
        border-radius: .1rem;
        font-size: .36rem;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
