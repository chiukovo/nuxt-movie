<template>
<div class="content">
    <div class="wrapper clearfix">
        <div class="content-side-left">
            <div class="details-content wow fadeInUp">
                <div class="content-title">
                    <ul class="bread-crumbs">
                        <li class="location"><em></em>当前位置:</li>
                        <li><a href="/">汤圆影视</a></li>
                        <li>-</li>
                        <li><a :href="'/' + getCidEnName(details.category_id)">{{ details.area }}{{ getCidCnName(details.category_id) }}</a></li>
                        <li>-</li>
                        <li><a :href="nowPage">{{ details.title }} {{ details.area }} {{ details.quality }}</a></li>
                    </ul>
                </div>
                <div class="details-list">
                    <!-- <div class="details-ad mt">
                        <div class="swiper-container swiper-content1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-12.jpg" border="none"></a></div>
                                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-13.jpg" border="none"></a></div>
                                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-14.jpg" border="none"></a></div>
                            </div>
                        </div>
                    </div> -->
                    <div class="details-introduce mt" style="padding: 0">
                        <h4><span>《{{ details.title }}》</span><span style="color: #fd0;" v-if="cid != 3">第 {{ videoKey }} 集</span> 免费在线觀看</h4>
                        <div class="reload">
                            如载入时间过长，请点击「重新刷新」按钮。
                            <a href="#" onclick="location.reload()"><i></i>重新刷新</a>
                        </div>
                        <iframe :src="setInit" @load="load" style="display:none"></iframe>
                        <div class="video mt" v-if="isLoad">
                            <img src="/images/loading.gif" alt="影片载入中...">
                        </div>
                        <div class="video mt" v-if="!isLoad">
                            <iframe id="test" :src="setUrl" width="1000" height="900" frameborder="0" scrolling="no" v-if="startIframe"></iframe>
                        </div>
                    </div>

                    <div class="share mt">
                        <div class="bdsharebuttonbox">
                            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
                            <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
                            <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                            <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
                            <a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a>
                            <a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a>
                            <a href="#" class="bds_meilishuo" data-cmd="meilishuo" title="分享到美丽说"></a>
                            <a href="#" class="bds_evernotecn" data-cmd="evernotecn" title="分享到印象笔记"></a>
                            <a href="#" class="bds_tqf" data-cmd="tqf" title="分享到腾讯朋友"></a>
                            <a href="#" class="bds_ty" data-cmd="ty" title="分享到天涯社区"></a>
                            <a href="#" class="bds_mail" data-cmd="mail" title="分享到邮件分享"></a>
                            <a href="#" class="bds_copy" data-cmd="copy" title="分享到复制网址"></a>
                        </div>
                    </div>
                </div>
                <div class="single-page-bar" v-if="Object.keys(details).length > 0 && cid != 3" style="margin-top: 20px">
                  <a class="prev" :href="'/watch-movie/' + id + '-' + cid + '/' + (videoKey - 1)" :title="setTitleName(details.prev.title)" v-if="videoKey != 1">
                      <dl>
                          <dt>上一集</dt>
                          <dd><span>第 {{ videoKey - 1 }} 集</span></dd>
                          <dd class="arrow"></dd>
                      </dl>
                  </a>
                  <a class="next" :href="'/watch-movie/' + id + '-' + cid + '/' + (videoKey + 1)" :title="setTitleName(details.next.title)" v-if="videoKey != details.param.length">
                      <dl>
                          <dt>下一集</dt>
                          <dd><span v-if="cid != 3">第 {{ parseInt(videoKey) + 1 }} 集</span></dd>
                          <dd class="arrow"></dd>
                      </dl>
                  </a>
                  <div class="clearfix"></div>
                </div>
            </div>
            <Transition :pId="id" :pCid="cid" />
            <Download :pId="id" :pCid="cid" />
            <div class="download-area mt wow flipInX">
                <a name="download-area"></a>
                <div class="content-title">
                    <h2 class="pf-title"><em></em><span>《{{ details.title }}》</span>的注意事项</h2>
                </div>
                <div class="download-list">
                    <div class="download-notice">特别注意：此在线观看资源由赞助商提供，如要前往赞助商网站请与汤圆联系请勿直接输入影片中网址，由专属的入口进入可获得更多的福利！</div>
                </div>
            </div>
            <div class="statement mt wow flipInX">
                <p>声明：《{{ details.title }}》的资源链接收集于网络及赞助商提供，仅供网络测试和学习交流所用、视频版权归原权利人，汤圆影视并不参与制作，储存，传播。</p>
                <p>如果无意侵犯了您的权益，请来邮件告知，我会及时进行处理。汤圆影视再此郑重道歉！反馈邮件地址<em></em></p>
            </div>
            <div class="single-page-bar mt wow flipInX">
                <a :href="'/' + getCidEnName(details.category_id)" class="prev" title="返回列表页">
                    <dl>
                        <dt>回上页</dt>
                        <dd>返回列表页</dd>
                        <dd class="arrow"></dd>
                    </dl>
                </a>
            </div>
            <Recommend/>
        </div>
        <div class="content-side-right">
            <top10 :pId="id" :pCid="cid" />
            <AlsoLike/>
        </div>
    </div>
</div>
</template>

<script src="js/tinybox.js"></script>
<script>
$(function(){
    window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "", "bdMini": "1", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "16" }, "share": {} };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
});
</script>
<script>
import AlsoLike from "./AlsoLike";
import Top10 from "./Top10";
import Transition from "./Transition";
import Download from "./Download";
import Recommend from "./Recommend";

export default {
  name: "WatchMovie",
  data () {
    return {
        id: '',
        cid: '',
        setInit: '',
        setUrl: '',
        startIframe: false,
        videoKey: typeof this.$route.params.num == 'undefined' ? 1 : parseInt(this.$route.params.num),
        details: [],
        isLoad: true,
        nowPage: window.location.host + this.$route.path
    }
  },
  components: {
    AlsoLike,
    Top10,
    Recommend,
    Transition,
    Download,
  },
  mounted () {
    this.setInit = this.getVIESHOWCINEMAS();
    this.getParams();
    this.callApiDetailsData();
    this.callApiRecommendData();
  },
  computed: {
    doneTodosApiData () {
      return this.$store.state.detailsData;
    },
  },
  watch: {
    doneTodosApiData (value) {
      this.useJQ();
      this.details = value;

      if ( this.isUndefined(this.details.param[this.videoKey - 1]) ) {
        alert('无此集数');
        location.href = '/watch-movie/' + this.id + '-' + this.cid;
      } else {
        this.startMovie();
      }
    },
  },
  methods: {
    load () {

    },
    sleep (d) {
      return new Promise((resolve) => setTimeout(resolve, d))
    },
    callApiDetailsData () {
      this.$store.dispatch('CALL_API_GET_DETAILS', { vm: this });
    },
    callApiRecommendData () {
      this.$store.dispatch('CALL_API_GET_RECOMMEND_DATA', { vm: this });
    },
    useJQ () {
        this.setSiderJQ();
        var content = "<img src='/images/movie/movie-3.jpg'>";
        $('popclick').onclick = function() {
            TINY.box.show(content, 0, 0, 0, 1)
        }
    },
    //非同步
    async startMovie () {
      //check is load
      await this.sleep(2000)

      let list = this.details.param[this.videoKey - 1]['apiList'];
      let id = this.details.param[this.videoKey - 1]['apiID'];

      if ( list != null && id != null ) {
        this.setUrl = 'http://www.tv222.net/play.aspx?id=' + id + '&list=' + list;
        this.startIframe = true;
        this.isLoad = false;
      }
    },
    getParams () {
      var params = this.$route.params.data;

      if ( ! this.isUndefined(params) ) {
        params = params.split('-');

        if ( ! this.isUndefined(params[0]) ) {
          this.id = params[0];
        }

        if ( ! this.isUndefined(params[1]) ) {
          this.cid = params[1];
        }
      }
    },
  }
};
</script>