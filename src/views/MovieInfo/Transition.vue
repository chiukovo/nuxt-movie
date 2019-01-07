<template>
<div class="transition clearfix mt wow flipInX">
    <!-- <div class="pf-ad-left-300">
        <div class="swiper-container swiper-content2">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-7.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-8.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-9.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-10.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-11.jpg" border="none"></a></div>
            </div>
        </div>
    </div> -->
    <div class="author">
        <p class="link">文章链接：<a :href="'/watch-info/' + pId + '-' + pCid">{{ nowPage }}</a><span>( 收集电影资源很辛苦！转载时请注明本文出处及文章链接 )</span></p>
        <dl>
            <dt><a href="http://weibo.com/yeuan0618" alt="汤圆咬一口" title="汤圆咬一口"></a></dt>
            <dd><span>汤圆咬一口 说：</span>本文资源链接由赞助商提供及抓取于互联网，仅作为汤圆站长个人收藏，请广大网友不要恶意传播、不能用于非法盈利目的！敬请知悉！</dd>
        </dl>
        <ul>
            <li>资源分类：
                <span v-if="pCid == 3">电影</span>
                <span v-if="pCid == 4">剧集</span>
                <span v-if="pCid == 6">动漫</span>
            </li>
            <li>资源标签：
                <span v-for="(name, key) in details.type">
                  <a :href="'/search/' + name + '-' + 's' + '-' + pCid">{{ name }}</a>
                  <span v-if="details.type.length != key + 1">、</span>
                </span>
            </li>
            <li>流行热度：已超过 <span>{{ details.click_times }}</span> 人围观了本文</li>
            <li>生产日期：{{ details.created_at }}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: "Transition",
  data () {
    return {
      details: [],
      nowPage: window.location.host + this.$route.path
    }
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
};
</script>