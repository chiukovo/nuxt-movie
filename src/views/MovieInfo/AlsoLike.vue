<template>
<div id="sidebar-scroll">
    <div class="content-same-list mt wow flipInX">
        <div class="content-title">
            <h2 class="pf-title">猜你<span>也喜欢</span></h2>
            <span class="view"><em></em>浏览</span>
        </div>
        <div class='same-content'>
            <ul>
                <li v-for="(info, key) in recommendData"><em class="score">{{ info.score }}</em><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a><i>{{ info.click_times }}</i></li>
            </ul>
        </div>
    </div>
</div>
<!-- <div id="sidebar-scroll">
    <div class="pf-ad-right-300 float-ad mt wow flipInX">
        <div class="swiper-container swiper-content5">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-6.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-7.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-8.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-9.jpg" border="none"></a></div>
            </div>
        </div>
    </div>
    <div class="pf-ad-right-300 float-ad mt wow flipInX">
        <div class="swiper-container swiper-content6">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-10.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-11.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-6.jpg" border="none"></a></div>
                <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-7.jpg" border="none"></a></div>
            </div>
        </div>
    </div>
</div> -->
</template>

<script>
export default {
  name: "AlsoLike",
  data () {
    return {
      recommendData: []
    }
  },
  computed: {
    doneTodosRecommendData () {
      return this.$store.state.recommendData;
    }
  },
  watch: {
      doneTodosRecommendData (value) {
        this.recommendData = value;
      },
  }
};
</script>