<template>
  <div class="serviceList">
    <Header-Div :title="headerTitle"></Header-Div>
    <div class="view_main">
      <el-collapse class="serviceList_main" v-model="listIndex" accordion>
        <el-collapse-item class="serviceList_list" :title="item.title" :name="index" v-for="(item,index) in listData" :key="index">
          <div class="content">{{item.content}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    name: "serviceList",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
    data(){
      return {
        listIndex: '',  // 问题列表
        listData: this.$route.query.listData || [], // 数据
        headerTitle: this.$route.query.title || '',  // 标题
      }
    }
  }
</script>

<style scoped lang="less">
  .serviceList{
    .serviceList_main{
      margin-top: .24rem;
      background: #fff;
      .serviceList_list{
        padding: 0 .3rem;
        &:last-child{
          /deep/.el-collapse-item__header{
            border-bottom: unset;
          }
        }
        /deep/.el-collapse-item__header{
          height: 1.4rem;
          border-bottom: .02rem solid rgba(153,153,153,.2);
          font-size: .32rem;
          color:rgba(80,80,80,1);
          &.is-active{
            color:rgba(52,97,232,1);
          }
        }
        /deep/.el-collapse-item__wrap{
          .el-collapse-item__content{
            padding: .22rem 0;
            .content{
              font-size: .28rem;
              line-height: unset;
              color:rgba(112,112,112,1);
            }
          }
        }
      }
    }
  }
</style>