<template>
  <div class="scroll-bar">
      <ul>
          <li class="scroll-weibo">
              <a href="http://weibo.com/yeuan0618" target="_blank"><i></i>微博</a>
          </li>
          <li class="scroll-weixin">
              <a href="#"><i></i>微信</a>
              <div class="wx-box">
                  <h4>微信扫一扫</h4>
                  <p><img src="/images/qrcode.jpg" width="90" height="90"></p>
              </div>
          </li>
          <li class="scroll-back-to-top"><a href="#" class="scroll_top"><i></i>顶部</a></li>
      </ul>
  </div>
  <!-- <a target="_blank" class="scroll-qq" href="#"><img border="0" src="/images/icon-qq.png" alt="汤圆迷SVIP群" title="汤圆迷SVIP群"></a>
  <div class="float-ad"></div> -->
</template>

<script>
export default {
  name: "ScrollBar",
};
</script>
