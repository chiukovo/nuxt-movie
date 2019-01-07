<template>
    <div class="content-side-right">
        <!-- <div class="pf-ad-300-90 mt">
            <div class="swiper-container swiper-content2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-3.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-4.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-5.jpg" border="none"></a></div>
                </div>
            </div>
        </div> -->
        <div class="content-rank-list mt wow flipInX">
            <div class="content-title">
                <h2 class="pf-title">本周电影<span>Top10</span></h2>
                <span class="view"><em></em>浏览</span>
            </div>
            <div class='rank-content'>
                <ul>
                    <li v-for="(info, key) in movies"><span>{{ key + 1 }}</span><em class="score">{{ info.score }}</em><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a><i>{{ info.watch }}</i></li>
                </ul>
            </div>
        </div>
        <!-- <div class="pf-ad-right-300 mt wow flipInX">
            <div class="swiper-container swiper-content3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-6.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-7.jpg" border="none"></a></div>
                </div>
            </div>
        </div> -->
        <div id="sidebar-scroll">
            <div class="content-rank-list mt wow flipInX">
                <div class="content-title">
                    <h2 class="pf-title">本周剧集<span>Top10</span></h2>
                    <span class="view"><em></em>浏览</span>
                </div>
                <div class='rank-content'>
                    <ul>
                        <li v-for="(info, key) in episode"><span>{{ key + 1 }}</span><em class="score">{{ info.score }}</em><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a><i>{{ info.watch }}</i></li>
                    </ul>
                </div>
            </div>
            <!-- <div class="pf-ad-right-300 mt wow flipInX">
                <div class="swiper-container swiper-content4">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-8.jpg" border="none"></a></div>
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-9.jpg" border="none"></a></div>
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-10.jpg" border="none"></a></div>
                        <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-11.jpg" border="none"></a></div>
                    </div>
                </div>
            </div> -->
            <div class="content-rank-list mt wow flipInX">
                <div class="content-title">
                    <h2 class="pf-title">本周动漫<span>Top10</span></h2>
                    <span class="view"><em></em>浏览</span>
                </div>
                <div class='rank-content'>
                    <ul>
                        <li v-for="(info, key) in anime"><span>{{ key + 1 }}</span><em class="score">{{ info.score }}</em><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a><i>{{ info.watch }}</i></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div class="pf-ad-right-300 mt wow flipInX">
            <div class="swiper-container swiper-content4">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-8.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-9.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-10.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-11.jpg" border="none"></a></div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "WeekTop10",
  data () {
    return {
      movies: [],
      anime: [],
      episode: [],
    }
  },
  mounted () {
    this.$store.dispatch('CALL_API_TOP_TEN', { vm: this });
  },
  computed: {
    doneTodosHomeData () {
      return this.$store.state.topTen;
    }
  },
  watch: {
      doneTodosHomeData(value) {
        this.movies = value.movies;
        this.anime = value.anime;
        this.episode = value.episode;
      }
  },
};
</script>
