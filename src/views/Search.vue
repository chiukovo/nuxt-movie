<template>
<div class="content">
    <div class="wrapper clearfix">
        <div class="content-side-left">
            <div class="content-title">
                <ul class="bread-crumbs">
                    <li class="location"><em></em>当前位置:</li>
                    <li><a href="/">汤圆影视</a></li>
                    <li>-</li>
                    <li><a :href="'search?keyword=' + search">搜索 “{{ search }}”</a></li>
                </ul>
            </div>

            <div class="search-tips mt wow flipInX" v-if="searchData.length == 0 ">
                <p><em></em><span>Hi~英雄，你想要的资源没有啊，看看下面的合你胃口不啦!</span></p>
            </div>

            <div class="article-list wow fadeInUp" v-else>
                <div class="content-title">
                    <div class="article-list-title">
                        <ul>
                            <li style="width: 37%">资源名称</li>
                            <li style="width: 10%">评分</li>
                            <li style="width: 10%">版本</li>
                            <li style="width: 15%">地区</li>
                            <li style="width: 18%">类型</li>
                            <li style="width: 10%">发布时间</li>
                        </ul>
                    </div>
                </div>
                <div class="content-list">
                    <div class="list">
                        <ul class="item" v-for="info in searchData">
                          <li style="width: 30%"><a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a></li>
                          <li style="width: 7%">
                              <a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)"><img class="small" :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a>
                          </li>
                          <li style="width: 10%"><span class="score">{{ info.score }}</span></li>
                          <li style="width: 10%">{{ info.quality != '' ? info.quality  : '没有数据'}}</li>
                          <li style="width: 15%">{{ info.area }}</li>
                          <li style="width: 18%">
                              <span v-for="(tag, key) in info.tag">{{ tag }}<b v-if="key != info.tag.length - 1">、</b></span>
                          </li>
                          <li style="width: 10%">{{ info.date }}</li>
                          <div class="imgpop"><a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)"><img :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a></div>
                        </ul>

                        <!-- <div class="details-ad mt">
                            <div class="swiper-container swiper-content2">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-12.jpg" border="none"></a></div>
                                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-13.jpg" border="none"></a></div>
                                    <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-14.jpg" border="none"></a></div>
                                </div>
                            </div>
                        </div> -->

                        <div class="page-bar">
                            <ul class="pagination" v-if="routeName == 'search'">
                                <!--prev check-->
                                <li class="disabled" v-if="page == 1"><span>&laquo;</span></li>
                                <li v-else><a :href="nowPath + '&page=' + (page - 1)">&laquo;</a></li>
                                <!--end-->
                                <li :class="num == page ? 'active' : ''" v-for="num in totalPage">
                                    <span v-if="num == page">{{ num }}</span>
                                    <a :href="nowPath + '&page=' + num" v-else>{{ num }}</a>
                                </li>
                                <!--next check-->
                                <li class="disabled" v-if="page == totalPage"><span>&raquo;</span></li>
                                <li v-else><a :href="nowPath + '&page=' + (page + 1)">&raquo;</a></li>
                                <!--end-->
                            </ul>

                            <!--search tag-->
                            <ul class="pagination" v-else>
                                <!--prev check-->
                                <li class="disabled" v-if="page == 1"><span>&laquo;</span></li>
                                <li v-else><a :href="nowPath + '?page=' + (page - 1)">&laquo;</a></li>
                                <!--end-->
                                <li :class="num == page ? 'active' : ''" v-for="num in totalPage">
                                    <span v-if="num == page">{{ num }}</span>
                                    <a :href="nowPath + '?page=' + num" v-else>{{ num }}</a>
                                </li>
                                <!--next check-->
                                <li class="disabled" v-if="page == totalPage"><span>&raquo;</span></li>
                                <li v-else><a :href="nowPath + '?page=' + (page + 1)">&raquo;</a></li>
                                <!--end-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Recommend/>
        </div>
        <div class="content-side-right">
            <top10/>
            <AlsoLike/>
        </div>
    </div>
</div>
</template>

<script>
import AlsoLike from "./MovieInfo/AlsoLike";
import Top10 from "./MovieInfo/Top10";
import Recommend from "./MovieInfo/Recommend";

export default {
  name: "WatchMovie",
  data () {
    return {
      search: typeof this.$route.query.keyword == 'undefined' ? '' : this.$route.query.keyword,
      page: typeof this.$route.query.page == 'undefined' ? 1 : parseInt(this.$route.query.page),
      cid: Math.floor((Math.random() * 3) + 1),
      type: '',
      searchData: [],
      totalPage: '',
      nowPath: '',
      routeName: '',
    }
  },
  components: {
    AlsoLike,
    Top10,
    Recommend,
  },
  mounted() {
    //is search
    this.routeName = this.$route.name;
    if ( this.routeName == 'search' ) {
      this.nowPath = this.$route.path + '?keyword=' + this.search;
      this.callApiSearchData();
    } else {
      //is search tag
      this.cid = this.$route.params.cid;
      this.type = this.$route.params.type;
      this.search = this.$route.params.search;

      this.nowPath = '/search-tag' + '/' + this.search + '/' + this.type + '/' + this.cid;
      this.callApiSearchTagData();
    }

    this.callApiRecommendData();
    this.useJQ();
  },
  updated () {
    this.publicJS();
  },
  computed: {
    doneApiSearchData () {
      return this.$store.state.searchData;
    }
  },
  watch: {
      doneApiSearchData(data) {
        this.searchData = data.data;
        this.totalPage = data.totalPage;
      }
  },
  methods: {
    callApiRecommendData () {
      this.$store.dispatch('CALL_API_GET_RECOMMEND_DATA', { vm: this });
    },
    callApiSearchData () {
      this.$store.dispatch('CALL_API_GET_SEARCH_DATA', { vm: this });
    },
    callApiSearchTagData () {
      this.$store.dispatch('CALL_API_GET_SEARCH_TAG_DATA', { vm: this });
    },
    useJQ () {
        this.setSiderJQ();
        var content = "<img src='/images/movie/movie-3.jpg'>";
        $('popclick').onclick = function() {
            TINY.box.show(content, 0, 0, 0, 1)
        }
    }
  }
};
</script>