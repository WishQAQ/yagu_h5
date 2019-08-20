<!--公用tag组件-->
<!--页面引用 使用:tags="['值','值']" -->
<template>
  <div class="tags">
    <p v-for="(item ,index) in tags" :key="index">{{item}}</p>
  </div>
</template>

<script>
  export default {
    name: "tags",
    props: {
      tags: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style scoped lang="less">
  .tags{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    >p{
      font-size: .24rem;
      color:rgba(93,93,93,1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 .1rem;
      background:rgba(153,153,153,0.2);
      border-radius: .04rem;
      &:not(:last-child){
        margin-right: .16rem;
      }
    }
  }
</style>
