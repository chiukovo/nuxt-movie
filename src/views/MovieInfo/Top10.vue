<template>
<div class="content-rank-list wow flipInX">
    <div class="content-title">
        <h2 class="pf-title">本周观看<span>Top10</span></h2>
        <span class="view"><em></em>浏览</span>
    </div>
    <div class='rank-content'>
        <ul>
          <li v-for="(info, key) in rankData"><span>{{ key + 1 }}</span><em class="score">{{ info.score }}</em><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a><i>{{ info.watch }}</i></li>
        </ul>
    </div>
</div>
<!-- <div class="pf-ad-300-90 mt">
    <div class="swiper-container swiper-content2 swiper-container-horizontal swiper-container-fade">
        <div class="swiper-wrapper" style="transition-duration: 0ms;">
            <div class="swiper-slide swiper-slide-active" style="width: 330px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                <a href="#" target="_blank"><img src="/images/link/link-3.jpg" border="none"></a>
            </div>
            <div class="swiper-slide swiper-slide-next" style="width: 330px; opacity: 0; transform: translate3d(-330px, 0px, 0px); transition-duration: 0ms;">
                <a href="#" target="_blank"><img src="/images/link/link-4.jpg" border="none"></a>
            </div>
            <div class="swiper-slide" style="width: 330px; opacity: 0; transform: translate3d(-660px, 0px, 0px); transition-duration: 0ms;">
                <a href="#" target="_blank"><img src="/images/link/link-5.jpg" border="none"></a>
            </div>
        </div>
    </div>
</div>
<div class="pf-ad-right-300 mt wow flipInX">
    <div class="swiper-container swiper-content4">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-7.jpg" border="none"></a></div>
            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-8.jpg" border="none"></a></div>
            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-9.jpg" border="none"></a></div>
            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-10.jpg" border="none"></a></div>
            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-11.jpg" border="none"></a></div>
        </div>
    </div>
</div> -->
</template>

<script>
export default {
  name: "Top10",
  props:['pId', 'pCid'],
  data () {
    return {
      rankData: [],
    }
  },
  mounted () {
    this.$store.dispatch('CALL_API_TOP_TEN', { vm: this });
  },
  computed: {
    doneApiTopTenData () {
      return this.$store.state.topTen;
    }
  },
  watch: {
      doneApiTopTenData(value) {
        if ( this.pCid == 4 ) {
          this.rankData = value.episode
        } else if ( this.pCid == 6 ) {
          this.rankData = value.anime
        } else {
          this.rankData = value.movies
        }
      }
  },
};
</script>