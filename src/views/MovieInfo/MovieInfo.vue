<template>
<div class="content">
    <div class="wrapper clearfix">
        <div class="content-side-left">
            <Details :pId="id" :pCid="cid" />
            <Recommend/>
            <Transition :pId="id" :pCid="cid" />
            <Download :pId="id" :pCid="cid" />

            <div class="statement mt wow flipInX">
                <p>声明：《{{ details.title }}》的资源链接收集于网络及赞助商提供，仅供网络测试和学习交流所用、视频版权归原权利人，汤圆影视并不参与制作，储存，传播。</p>
                <p>如果无意侵犯了您的权益，请来邮件告知，我会及时进行处理。汤圆影视再此郑重道歉！反馈邮件地址<em></em></p>
            </div>
            <div class="single-page-bar mt wow flipInX" v-if="Object.keys(details).length > 0">
              <a class="prev" :href="'/movies-info/' + details.prev.id + '-' + details.prev.category_id" :title="setTitleName(details.prev.title)"  v-if=" ! isUndefined(details.prev.id)">
                  <dl>
                      <dt>上一篇</dt>
                      <dd>{{ details.prev.title }}</dd>
                      <dd class="arrow"></dd>
                  </dl>
              </a>
              <a class="next" :href="'/movies-info/' + details.next.id + '-' + details.next.category_id" :title="setTitleName(details.next.title)" v-if=" ! isUndefined(details.next.id)">
                  <dl>
                      <dt>下一篇</dt>
                      <dd>{{ details.next.title }}</dd>
                      <dd class="arrow"></dd>
                  </dl>
              </a>
            </div>
        </div>
        <div class="content-side-right">
            <top10 :pId="id" :pCid="cid" />
            <AlsoLike/>
        </div>
    </div>
</div>
</template>

<script src="js/tinybox.js"></script>
<script>
import AlsoLike from "./AlsoLike";
import Details from "./Details";
import Download from "./Download";
import Recommend from "./Recommend";
import Top10 from "./Top10";
import Transition from "./Transition";

export default {
  name: "MovieInfo",
  components: {
    AlsoLike,
    Details,
    Download,
    Recommend,
    Top10,
    Transition
  },
  data () {
    return {
      id: '',
      cid: '',
      details: {}
    }
  },
  mounted () {
    this.getParams();
    this.callApiDetailsData();
    this.callApiRecommendData();
  },
  computed: {
    doneTodosApiData () {
      return this.$store.state.detailsData;
    },
  },
  watch: {
      doneTodosApiData (value) {
        this.useJQ();
        this.details = value;

      },
  },
  methods: {
    callApiDetailsData () {
      this.$store.dispatch('CALL_API_GET_DETAILS', { vm: this });
    },
    callApiRecommendData () {
      this.$store.dispatch('CALL_API_GET_RECOMMEND_DATA', { vm: this });
    },
    getParams () {
      var params = this.$route.params.data;

      if ( ! this.isUndefined(params) ) {
        params = params.split('-');

        if ( ! this.isUndefined(params[0]) ) {
          this.id = params[0];
        }

        if ( ! this.isUndefined(params[1]) ) {
          this.cid = params[1];
        }
      }
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