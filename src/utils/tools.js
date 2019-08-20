import Vue from "vue";

/**
 * @Description: 判断当前页面的历史记录是不是小于等于1，如果小于等于1，说明这个页面没有可以返回的上一页，如果没有可以返回的上一页，就给地址栏加上一个goindex=true的参数
 * @author Wish
 * @date 2019/8/19
*/
Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
}
