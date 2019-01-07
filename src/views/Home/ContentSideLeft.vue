<template>
    <div class="content-side-left">
        <!-- <div class="pf-ad-854-90 mt">
            <div class="swiper-container swiper-content1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-1.jpg" border="none"></a></div>
                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-2.jpg" border="none"></a></div>
                </div>
            </div>
        </div> -->
        <div class="content-tab-list mt wow flipInX">
            <div class="content-title">
                <h2 class="pf-title"><span>最新</span>电影</h2>
                <ul class="tab-title">
                    <li v-for="(name, key) in newMovies.types" :class="key == 0 ? 'current' : ''" :title="name" v-if="key <= 11">{{ name }}</li>
                </ul>
                <a href="/movie" class="more" :title="setTitleName('电影')">更多<em></em></a>
            </div>
            <div class='tab-content'>
                <div class="tab-content-list">
                    <div class="tab-item" v-for="(info, key) in newMovies.contents">
                        <dl v-for="dt in info">
                            <dt><a :href="'/movies-info/' + dt.id + '-' + dt.category_id" :title="setTitleName(dt.name)">{{ dt.name }}</a><span class="score">{{ dt.score }}</span></dt>
                            <dd>
                                <span class="tag" v-for="tag in dt.tag">{{ tag }}</span>
                                <i class="date">{{ dt.date }}</i>
                            </dd>
                            <dd><a :href="'/movies-info/' + dt.id + '-' + dt.category_id" :title="setTitleName(dt.name)" class="imgpop"><img :data-original="photoDomain + dt.img" :title="setTitleName(dt.name)" :alt="setTitleName(dt.name)"></a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-recommend wow flipInX">
            <div class="content-title">
                <h2 class="pf-title"><span>推荐</span>电影</h2>
            </div>
            <div class="recommend-list">
                <div class="recommend-item">
                    <dl v-for="info in recommendMovies">
                        <dt><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)"><img :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a><span class="score">{{ info.score }}</span></dt>
                        <dd><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a>
                            <span class="tag" v-for="tag in info.tag">{{ tag }}</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="content-tab-list mt wow flipInX">
            <div class="content-title">
                <h2 class="pf-title"><span>最新</span>剧集</h2>
                <ul class="tab-title">
                    <li v-for="(name, key) in newEpisode.types" :class="key == 0 ? 'current' : ''" :title="name" v-if="key <= 11">{{ name }}</li>
                </ul>
                <a href="/episode" class="more" :title="setTitleName('电视剧')">更多<em></em></a>
            </div>
            <div class='tab-content'>
                <div class="tab-content-list">
                  <div class="tab-item" v-for="(info, key) in newEpisode.contents">
                      <dl v-for="dt in info">
                        <dt><a :href="'/movies-info/' + dt.id + '-' + dt.category_id" :title="setTitleName(dt.name)">{{ dt.name }}</a><span class="score">{{ dt.score }}</span></dt>
                        <dd>
                            更新至
                            <span class="tag-yellow" v-if="dt.is_end">全集</span>
                            <span class="tag" v-else>{{ dt.last }}</span>
                            <i class="date">{{ dt.date }}</i>
                        </dd>
                        <dd><a :href="'/movies-info/' + dt.id + '-' + dt.category_id" :title="setTitleName(dt.name)" class="imgpop"><img :data-original="photoDomain + dt.img" :title="setTitleName(dt.name)" :alt="setTitleName(dt.name)"></a></dd>
                      </dl>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-recommend wow flipInX">
            <div class="content-title">
                <h2 class="pf-title"><span>推荐</span>电视剧</h2>
            </div>
            <div class="recommend-list">
                <div class="recommend-item">
                    <dl v-for="info in recommendTV">
                        <dt><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)"><img :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a><span class="score">{{ info.score }}</span></dt>
                        <dd><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a>
                            <span class="tag" v-for="tag in info.tag">{{ tag }}</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="content-tab-list mt wow flipInX">
            <div class="content-title">
                <h2 class="pf-title"><span>最新</span>动漫</h2>
                <ul class="tab-title">
                    <li v-for="(name, key) in newAnime.types" :class="key == 0 ? 'current' : ''" :title="name" v-if="key <= 11">{{ name }}</li>
                </ul>
                <a href="/anime" class="more" :title="setTitleName('动漫')">更多<em></em></a>
            </div>
            <div class='tab-content'>
                <div class="tab-content-list">
                  <div class="tab-item" v-for="(info, key) in newAnime.contents">
                      <dl v-for="dt in info">
                            <dt><a :href="'/movies-info/' + dt.id + '-' + dt.category_id" :title="setTitleName(dt.name)">{{ dt.name }}</a><span class="score">{{ dt.score }}</span></dt>
                            <dd>
                                更新至
                                <span class="tag-yellow" v-if="dt.is_end">全集</span>
                                <span class="tag" v-else>{{ dt.last }}</span>
                                <i class="date">{{ dt.date }}</i>
                            </dd>
                            <dd><a :href="'/movies-info/' + dt.id + '-' + dt.category_id" :title="setTitleName(dt.name)" class="imgpop"><img :data-original="photoDomain + dt.img" :title="setTitleName(dt.name)" :alt="setTitleName(dt.name)"></a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-recommend wow flipInX">
            <div class="content-title">
                <h2 class="pf-title"><span>推荐</span>动漫</h2>
            </div>
            <div class="recommend-list">
                <div class="recommend-item">
                    <dl v-for="info in recommendAnime">
                        <dt><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)"><img :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a><span class="score">{{ info.score }}</span></dt>
                        <dd><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a>
                            <span class="tag" v-for="tag in info.tag">{{ tag }}</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContentSideLeft",
  data () {
    return {
      newMovies: [],
      recommendMovies: [],
      newEpisode: [],
      recommendTV: [],
      newAnime: [],
      recommendAnime: [],
    }
  },
  updated () {
    this.doTabJQ();
  },
  computed: {
    doneTodosHomeData () {
      return this.$store.state.homeData;
    }
  },
  watch: {
      doneTodosHomeData(value) {
        this.newMovies = value.newMovies;
        this.recommendMovies = value.recommendMovies;
        this.newEpisode = value.newEpisode;
        this.recommendTV = value.recommendTV;
        this.newAnime = value.newAnime;
        this.recommendAnime = value.recommendAnime;
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
