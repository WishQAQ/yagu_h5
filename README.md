# yagu_web

> A Vue.js project

> 公用组件说明
####publicHeader 头部
 ```
  :title= "'标题名'"  // 非必填项
  :transparent= "Boolean"  是否开启透明背景 默认值: false // 非必填项
  :share="Boolean"  是否开启分享按钮 默认值: false  // 非必填
  :edit="Boolean"  是否开启编辑按钮 默认值: false  // 非必填
  :submitGoBack="Boolean"  是否开启退出提示框 默认值: false  // 非必填
  :message="'提示信息'"  如已开启退出提示框，请填写提示信息，否则为空 // 非必填
  :goModule="Boolean"  是否开启模块返回 默认值：false  // 非必填
  v-on:goModule="goModule"  // 开启模块返回监听  // 如开启模块返回则必填
 ```
如开启透明头部，则需要设置监听页面高度 当页面滑动至指定高度自动关闭透明头部
```
methods: {
      menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        this.openTransparent = this.scroll <= 高度;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.menu)
    },
```
如开启模块返回，则需要监听header返回按钮点击事件 当点击返回按钮时，返回一个boolean值
```
// header组件
    this.$emit('goModule', this.goModule)

// 父组件
goModule: function (goModule) {
        // goModule 为返回值
      }
```
####tags 标签
 ```
  :tags= "['tag','tag','tag']" 默认值: [] // 非必填项 
 ```
####progressBar 进度条
 ```
  :barText= "'进度条框提示文字'" 默认值: 已认购 // 非必填项
  :schedule= "'百分比'" 默认值: 0% // 非必填项
 ```
当传入百分比小于30% 进度条提示框整体靠右显示，反之靠左
####NotInfo 无更多信息提示
 ```
  :info= "'信息提示'" 默认值: 已经全部加载完毕 // 非必填项
 ```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
