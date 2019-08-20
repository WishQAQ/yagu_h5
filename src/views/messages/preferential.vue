<template>
  <div class="preferential">
    <Header-Div :title="'优惠详情'"></Header-Div>
    <div class="view_main">
      <div class="preferential_main">
        <p>1.晚暗下来的星海月夜蝉鸣蝈蝈叫</p>
        <p>2.憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回</p>
        <p>3.前的故事孩童憧憬着长大在夜晚暗下来的。</p>
        <p>4.大人回忆从前的故事</p>
        <p>5.憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回忆从前的故事</p>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "preferential",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .preferential{
    .preferential_main{
      height: 100%;
      background: #fff;
      padding: .4rem .3rem;
      p{
        font-size: .24rem;
        line-height: .6rem;
        color:rgba(51,51,51,1);
      }
    }
  }
</style>
