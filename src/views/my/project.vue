<template>
  <div class="project">
    <Header-Div :title="title"></Header-Div>
    <div class="view_main">
      <div class="project_main">
        <div class="banner"></div>
        <div class="content_main">
          <div class="text">
            很长很长的标题，甚至超过了两行，比两…这是文章的标题，非常长的标题，很长很长很长的标题，甚至超过了两行，比两…这是文章的标题，非常长的标题，很长很长很长的标题，甚至超过了两行，比两…这是文章的标题，非常长的标题，很长很长很长的标题，甚至超过了两行，很长很长很长的标题，比两…
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "project",
    components:{
      'HeaderDiv': () => import('@/components/publicHeader')
    },
    data(){
      return {
        title: '了解亚谷'
      }
    }
  }
</script>

<style scoped lang="less">
  .project{
    .view_main{
      background: #fff;
      .project_main{
        .banner{
          background: url("../../assets/images/project_banner.png") no-repeat;
          background-size: contain;
          width: 100%;
          height: 3.6rem;
        }
        .content_main{
          margin-top: .4rem;
          padding: 0 .3rem 2rem;
          .text{
            font-size: .24rem;
            color:rgba(51,51,51,1);
          }
        }
      }
    }
  }
</style>