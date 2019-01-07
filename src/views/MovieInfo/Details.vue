<template>
    <div class="details-content wow fadeInUp">
        <div class="details-list">
            <div class="details-top">
                <div class="details-img">
                    <img id="popclick" :data-original="photoDomain + details.image_thumb" :title="setTitleName(details.title)" :alt="setTitleName(details.title)" v-if="typeof details.image_thumb != 'undefined'">
                    <span class="score">{{ details.score }}</span>
                </div>
                <div class="details-box">
                    <h2 :style="details.title_style">
                        <font :style="{'color': details.title_color}">{{ details.title }}</font>
                        <span>{{ details.quality }} {{ details.is_end ? '全集' : '' }} 线上看</span>
                    </h2>
                    <h3>
                        <span v-for="name in details.alias">{{ name }}</span>
                    </h3>
                    <p class="line"></p>
                    <div class="details">
                        <div>
                          导演:
                          <span v-for="(name, key) in details.director">
                            <a :href="'/search-tag/' + name + '/' + 'd' + '/' + pCid">{{ name }}</a>
                            <span v-if="details.director.length != key + 1"> / </span>
                          </span>
                        </div>
                        <div>
                          编剧:
                          <span v-for="(name, key) in details.screenwriter">
                            <a :href="'/search-tag/' + name + '/' + 's' + '/' + pCid">{{ name }}</a>
                            <span v-if="details.screenwriter.length != key + 1"> / </span>
                          </span>
                        </div>
                        <div>
                          主演:
                          <span v-for="(name, key) in details.actor">
                            <a :href="'/search-tag/' + name + '/' + 'a' + '/' + pCid">{{ name }}</a>
                            <span v-if="details.actor.length != key + 1"> / </span>
                          </span>
                        </div>
                        <div>
                          类型:
                          <span v-for="(name, key) in details.type">
                            <a :href="'/search-tag/' + name + '/' + 't' + '/' + pCid">{{ name }}</a>
                            <span v-if="details.type.length != key + 1"> / </span>
                          </span>
                        </div>
                        <div v-html="details.other_description"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="details-ad mt">
                <div class="swiper-container swiper-content1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-12.jpg" border="none"></a></div>
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-13.jpg" border="none"></a></div>
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-14.jpg" border="none"></a></div>
                    </div>
                </div>
            </div> -->
            <div class="details-introduce mt">
                <!-- <h4><span>《魔神Z 剧场版》</span>免费在线试看</h4>
                <div class="video mt">
                    <div id="youkuplayer" style="width:824px;height:506px"></div>
                    <script type="text/javascript" src="//player.youku.com/jsapi"></script>
                    <script type="text/javascript">
                    player = new YKU.Player('youkuplayer', {
                        styleid: '0',
                        client_id: '9afc9fe99a7b9c36',
                        vid: 'XMzU5MjMzMTg5Ng==',
                        newPlayer: true,
                        show_related: false,
                        autoplay: true
                    });
                    </script>
                </div> -->
                <h4><span>《{{ details.title }}》</span>的剧情简介</h4>
                <div class="introduce mt">
                    <div v-html="details.introduction">
                    </div>
                    <br />
                </div>

                <h4><span>《{{ details.title }}》</span>的剧照</h4>
                <div class="introduce mt">
                    <div class="imgs" v-for="info in details.image_list">
                      <img :src="photoDomain + info" alt="" />
                    </div>
                    <br />
                    <p>感谢您对 <a href="/">@汤圆影视dpg589.com</a> 的支持，汤圆影视为您免费提供<a :href="'/watch-movie/' + pId + '-' + pCid">《{{ details.title }}》</a>的高清线上看，<a :href="'/watch-movie/' + pId + '-' + pCid">《{{ details.title }}》</a>在线观看，<a :href="'/watch-movie/' + pId + '-' + pCid">《{{ details.title }}》</a>迅雷下载，<a :href="'/watch-movie/' + pId + '-' + pCid">《{{ details.title }}》</a>电驴下载，如果<a :href="'/watch-movie/' + pId + '-' + pCid">《{{ details.title }}》</a>未提供高清下载，敬请谅解！不能正常在线观看请给汤圆影视邮件，汤圆影视将尽快为您修复链接，如果您觉得汤圆影视不错，请分享给周围的朋友！谢谢！</p>
                </div>
                <div class="download-link mt">
                    <a :href="'/watch-movie/' + pId + '-' + pCid" target="_blank" v-if="details.category_id == 3"><img src="/images/btn-view.jpg"></a>
                    <a href="#download-area" v-else><img src="/images/btn-view.jpg"></a>
                    <a href="#download-area" v-if="details.download_link != null"><img src="/images/btn-download.jpg"></a>
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
        <div class="details-review wow flipInX">
            <h4><span>{{ details.title }}</span>的一句话评论</h4>

            <p v-html="details.review"><a href="http://weibo.com/yeuan0618">@汤圆影视</a></p>
        </div>
    </div>
</template>

<script>
window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "", "bdMini": "1", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "16" }, "share": {} };
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
</script>
<script>
export default {
  name: "Details",
  data () {
    return {
      details: [],
    }
  },
  props:['pId', 'pCid'],
  updated () {
    this.publicJS();
  },
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
};
</script>