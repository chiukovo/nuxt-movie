<template>
<div class="article-list wow fadeInUp" v-if="$store.state.listData.total > 0">
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
            <ul class="item" v-for="info in sources">
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
                <ul class="pagination">
                    <!--prev check-->
                    <li class="disabled" v-if="nowPage == 1"><span>&laquo;</span></li>
                    <li v-else><a href="episode">&laquo;</a></li>
                    <!--end-->
                    <li :class="num == nowPage ? 'active' : ''" v-for="num in parseInt(totalPage)">
                        <span v-if="num == nowPage">{{ num }}</span>
                        <a :href="nowPath + '/' + num" v-else>{{ num }}</a>
                    </li>
                    <!--next check-->
                    <li class="disabled" v-if="nowPage == totalPage"><span>&raquo;</span></li>
                    <li v-else><a href="episode">&raquo;</a></li>
                    <!--end-->
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "ArticleList",
  data () {
    return {
      nowPath: '',
      sources: [],
      totalPage: 0,
    }
  },
  props:['nowPage'],
  mounted () {
    this.nowPath = '/' + this.$route.name + '/' + this.$route.params.data;
  },
  updated () {
    this.publicJS();
  },
  computed: {
    doneTodosApiData () {
      return this.$store.state.listData;
    }
  },
  watch:{
      doneTodosApiData (value) {
        this.sources = value.sources;
        this.totalPage = value.totalPage;
      }
  },
};
</script>
