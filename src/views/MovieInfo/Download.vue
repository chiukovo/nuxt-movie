<template>
    <div>
        <div class="download-help wow flipInX">
            <h4><span>《{{ details.title }}》</span>的下载帮助</h4>
            <ul class="mt">
                <li>1.下载时如提醒需要升级迅雷7，点击取消便可继续正常下载，也可以使用右键迅雷下载。 </li>
                <li>2.下载后如文件后缀非.rmvb格式，修改后缀为.rmvb便可正常播放。 </li>
                <li>3.如左键点击无法下载，你可以使用右键迅雷下载，或者复制下载连接到迅雷软件新建任务下载。</li>
                <li>本站所有电影完全免费，必须用迅雷下载，下载的人越多下载速度越快，把资源分享给您的朋友可以大大提高下载速度。</li>
            </ul>
        </div>
        <div class="content-tab-list mt wow flipInX">
        <div class="download-area mt wow flipInX">
            <a name="download-area"></a>
            <div class="content-title">
                <h2 class="pf-title"><em></em><span>《{{ details.title }}》</span>的下载链接</h2>
                <ul class="tab-title">
                    <li class='current' title="汤圆影在线观看">在线观看</li>
                    <li title="汤圆影视下载链接" v-if="details.download_link != null">下载链接</li>
                </ul>
                <ul class="download-tools">
                    <li class="tools-name">支持的下载工具</li>
                    <li class="tools-xunlei"><span><i>迅雷</i></span></li>
                    <li class="tools-xuanfeng"><span><i>QQ旋风</i></span></li>
                    <li class="tools-dianlv"><span><i>电驴</i></span></li>
                    <li class="tools-baiduyun"><span><i>百度云盘</i></span></li>
                </ul>
            </div>
            <div class="download-list">
                <!-- <div class="details-ad mt">
                    <div class="swiper-container swiper-content3">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-12.jpg" border="none"></a></div>
                            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-13.jpg" border="none"></a></div>
                            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-14.jpg" border="none"></a></div>
                        </div>
                    </div>
                </div> -->
                <div class='tab-content tab-winfo'>
                    <div class="tab-content-list">
                        <div class="tab-item mh">
                            <div class="download-notice">特别提醒：如要前往赞助商网站请与汤圆联系请勿直接输入影片中网址，由专属的入口进入可获得更多的福利！</div>
                            <ul>
                                <li v-for="(info, key) in details.param"><em></em>
                                    <a :href="'/watch-movie/' + details.id + '-' + details.category_id + '/' + (parseInt(key) + 1)" :title="setTitleName(details.title)">
                                        《{{ details.title }}》 {{ details.quality }} 在线观看 <span class="linketext" v-if="details.category_id != 3"> 第{{ parseInt(key) + 1 }}集</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="help-line">不能正常在线观看请给汤圆影视邮件。</div>
                            <p class="download-tips">以上链接由赞助商提供，所有资源版权归原权利人，如有网友通过本站下载资源，请下载后24小时内删除，勿将下载的免费资源用于商业用途。</p>
                        </div>
                        <div class="tab-item mh" v-if="details.download_link != null">
                            <div class="download-notice">特别提醒：由于迅雷对版权保护政策，建议使用迅雷5.8才有可能正常下载，务必不要使用迅雷7及其以上版本下载，同时支持百度秒离线。</div>
                            <ul>
                                <li><em></em>
                                    <a :href="details.download_link">
                                    《{{ details.title }}》 {{ details.quality }} <span class="linketext">{{ details.download_name }}</span> 下载
                                </a>
                                </li>
                            </ul>
                            <div class="help-line">下载遇到问题？<a href="help.html" target="_blank">下载帮助</a></div>
                            <p class="download-tips">以上链接为互联网抓取，所有资源版权归原权利人，如有网友通过本站下载资源，请下载后24小时内删除，勿将下载的免费资源用于商业用途。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Download",
  data () {
    return {
      details: []
    }
  },
  updated () {
    this.doTabJQ();
  },
  props:['pId', 'pCid'],
  computed: {
    doneTodosApiData () {
      return this.$store.state.detailsData;
    }
  },
  watch:{
      doneTodosApiData (value) {
        this.details = value;
      }
  },
  methods: {
    doTabJQ () {
      $.fn.createTab = function(d) {
          var e = {
              activeEvt: 'mouseover',
              activeCls: 'current'
          };
          $.extend(e, d);
          this.each(function() {
              var b = $(this);
              var c;
              b.find('ul.tab-title li').mouseover(e.activeEvt, function() {
                  var a = $(this).index(),
                      that = $(this);
                  c = setTimeout(function() {
                      that.addClass('current').siblings().removeClass('current');
                      b.find('div.tab-content-list').animate({
                          marginLeft: -855 * a
                      }, 'slow')
                  }, 300)
              }).mouseout(function() {
                  clearTimeout(c)
              })
          })
      };
      $(".content-tab-list").createTab();
    }
  }
};
</script>