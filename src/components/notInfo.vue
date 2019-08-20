<template>
  <div class="not_info">
    {{info}}
  </div>
</template>

<script>
  export default {
    name: "notInfo",
    props:{
      info: {
        type: String,
        default: () => '已经全部加载完毕'
      }
    }
  }
</script>

<style scoped lang="less">
  .not_info{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .24rem;
    color:rgba(153,153,153,1);
    &::before{
      content: '';
      display: block;
      width: .28rem;
      border: .02rem solid rgba(153,153,153,.5);
      margin-right: .2rem;
    }
    &::after{
      content: '';
      display: block;
      width: .28rem;
      border: .02rem solid rgba(153,153,153,.5);
      margin-left: .2rem;
    }
  }
</style>
