(function (window, document) {
  // 设置 rem 函数
  function remLayout () {
    // 获取屏幕宽度
    let ww = document.documentElement.clientWidth || document.body.clientWidth
    // 限制屏幕宽度
    ww = ww > 768 ? 768 : ww
    ww = ww <= 320 ? 320 : ww
    /*  以设计稿分辨率为基准，取100px为font-size的参照，    75px
            那么设计稿的宽如果是750，body元素的宽度就可以设置为width:7.5rem（750/100），
            当我们将布局视口设置为375时，于是html的font-size=deviceWidth / 7.5。
        */
    document.documentElement.style.fontSize = ww / 7.5 + 'px'
  }
  // 初始化
  remLayout()
  // 改变窗口大小时重新设置 rem
  window.addEventListener('resize', remLayout, false)
})(window, document)
