<template>
    <div class="gallery-list wow flipInX">
        <div class="swiper-container gallery">
            <h2 class="pf-title">最近<span>24小时</span>更新</h2>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="info in sliderData">
                    <dl>
                        <dt><a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)"><img :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a></dt>
                        <dd>
                            <a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a>
                            <span class="tag" v-for="tag in info.tag">{{ tag }}</span>
                        </dd>
                    </dl>
                    <span class="score">{{ info.score }}</span>
                </div>
            </div>
            <div class="swiper-button-next gallery-btn gallery-btn-next" title="前翻"></div>
            <div class="swiper-button-prev gallery-btn gallery-btn-prev" title="后翻"></div>
            <div class="swiper-button-next btn-switch"><i></i>换一换</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "GalleryList",
  data () {
    return {
      sliderData: [],
    }
  },
  mounted () {

  },
  updated () {
    this.publicJS();

    var f = new Swiper('.gallery', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 6,
        spaceBetween: 18,
        autoplay: 3500,
        uniqueNavElements: false
    });
  },
  computed: {
    doneTodosHomeData () {
      return this.$store.state.homeData;
    }
  },
  watch:{
      doneTodosHomeData(value) {
        this.sliderData = value['24updated']
      }
  },
};
</script>
