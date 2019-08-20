<template>
  <div class="brand_story">
    <Header-Div :title="'品牌故事'"></Header-Div>
    <div class="view_main">
      <div class="story_main">
        在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回忆从前的故事
        孩童憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回忆从前的故事孩童憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回忆从前的故事
        孩童憧憬着长大在夜晚暗下来的星海月夜蝉鸣蝈蝈叫大人回忆从前的故事

        <div class="message">
          <p>*所有项目资料均由发起人或项目方合适</p>
          <p>项目经理：宋春雨</p>
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
    name: "brandStory",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
  }
</script>

<style scoped lang="less">
  .brand_story{
    .view_main{
      background: #fff;
      .story_main{
        padding: 1rem .3rem 0;
        font-size: .28rem;
        color:rgba(51,51,51,1);
        height: 100%;
        display: flex;
        flex-direction: column;
        .message{
          margin-top: 1rem;
          font-size: .24rem;
          color:rgba(153,153,153,1);
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
        }
      }
    }
  }
</style>