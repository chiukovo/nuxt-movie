<template>
    <div class="content">
        <div class="wrapper clearfix">
            <div class="content-side-left">
                <SubMenu :pArea="area" :pType="type" :pName="name" />
                <!-- <div class="pf-ad-854-90 mt">
                    <div class="swiper-container swiper-content1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-1.jpg" border="none"></a></div>
                            <div class="swiper-slide"><a href="#" target="_blank"><img src="/images/link/link-2.jpg" border="none"></a></div>
                        </div>
                    </div>
                </div> -->
                <div class="search-tips mt wow flipInX" v-if="$store.state.listData.total == 0">
                    <p><em></em><span>Hi~英雄，你想要的资源没有啊，看看下面的合你胃口不啦!</span></p>
                </div>
                <Recommend/>
                <ArticleList :nowPage="page" />
            </div>
            <WeekTop10/>
        </div>
    </div>
</template>

<script>
import WeekTop10 from "../Home/WeekTop10";
import SubMenu from "./SubMenu";
import Recommend from "../MovieInfo/Recommend";
import ArticleList from "./ArticleList";
export default {
  name: "List",
  data () {
    return {
      name: this.$route.name,
      area: 0,
      type: 0,
      page: typeof this.$route.params.page == 'undefined' ? 1 : this.$route.params.page,
    }
  },
  mounted () {
    this.getParams();
    this.callApiListData();
    this.publicJS();
  },
  components: {
    WeekTop10,
    SubMenu,
    ArticleList,
    Recommend,
  },
  computed: {
    doneTodosApiData () {
      return this.$store.state.listData;
    }
  },
  watch: {
      doneTodosApiData () {
        this.setSiderJQ();
      }
  },
  methods: {
    callApiListData () {
      this.$store.dispatch('CALL_API_GET_LIST', { vm: this });
    },
    getParams () {
      var params = this.$route.params.data;

      if ( ! this.isUndefined(params) ) {
        params = params.split('-');

        if ( ! this.isUndefined(params[0]) ) {
          this.type = params[0];
        }

        if ( ! this.isUndefined(params[1]) ) {
          this.area = params[1];
        }
      }
    }
  }
};
</script>
