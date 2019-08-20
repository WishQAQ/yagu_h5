<!--公用进度条组件-->
<!--页面引用 使用:barText="值" :schedule="百分比" -->
<template>
  <div class="progress_bar">
    <div :class="['bar_text',{'left':isLeft}]" ref="modifyBarStyle">
      <span v-if="!isLeft">{{barText}}</span>
      <p>{{schedule}}</p>
      <span v-if="isLeft">{{barText}}</span>
    </div>
    <div class="bar"><span :style="{'width':schedule}"></span></div>
  </div>
</template>

<script>
  export default {
    name: "progressBar",
    data(){
      return {
        isLeft: false,
        scheduleNumber: 0,
      }
    },
    props: {
      barText: {
        type: String,
        default: () => '已认购'
      },
      schedule:{
        type: String,
        default: () => '0%'
      },
    },
    mounted(){
      /**
       * @Description: 转换百分比为数字 如传入数值大于30% 则给与状态框 'left'的class名 和 100%-数值的右边距 以及 flex右对齐 的属性
       * @author Wish
       * @data 2019/8/18
      */
      this.scheduleNumber = parseInt(this.schedule);
      if(this.scheduleNumber > 30){
        this.isLeft = false;
        this.$refs.modifyBarStyle.style.justifyContent = 'flex-end';
        this.$refs.modifyBarStyle.style.paddingRight = 100 - this.scheduleNumber + '%'
      } else{
        this.isLeft = true;
        this.$refs.modifyBarStyle.style.justifyContent = 'flex-start';
        this.$refs.modifyBarStyle.style.paddingLeft = this.scheduleNumber + '%';
      }
    },
  }
</script>

<style scoped lang="less">
  .progress_bar{
    .bar_text{
      position: relative;
      display: flex;
      align-items: center;
      font-size: .24rem;
      color:rgba(249,107,28,1);
      right: -.04rem;
      margin-left: auto;
      &.left{
        right: .04rem;
        >p{
          background: url("../assets/images/indicator_box_left.png") no-repeat;
          background-size: contain;
        }
      }
      >p{
        background: url("../assets/images/indicator_box_right.png") no-repeat;
        background-size: contain;
        width: .6rem;
        height: .32rem;
        text-align: center;
        font-size: .16rem;
        color:rgba(255,255,255,1);
        margin-left: .04rem;
      }
    }
    .bar{
      width:100%;
      height: .12rem;
      background:rgba(240,240,240,1);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      >span{
        position: absolute;
        height: 100%;
        background:rgba(249,107,28,1);
      }
    }
  }
</style>
