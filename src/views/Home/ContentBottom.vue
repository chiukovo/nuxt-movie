<template>
    <div class="content-bottom mt wow flipInX">
        <div class="bottom-list">
            <div class="content-title">
                <h2 class="pf-title"><span>情色</span>伦理</h2>
                <a href="movies-info/情色伦理" :title="setTitleName('情色伦理')" class="more">更多<em></em></a>
            </div>
            <div class="bottom-box">
                <ul>
                    <li v-for="info in erotic"><i class="date">{{ info.date }}</i><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a></li>
                </ul>
            </div>
        </div>
        <div class="bottom-list">
            <div class="content-title">
                <h2 class="pf-title"><span>动画</span>电影</h2>
                <a href="movies-info/动画电影" :title="setTitleName('动画电影')" class="more">更多<em></em></a>
            </div>
            <div class="bottom-box">
                <ul>
                    <li v-for="info in anime"><i class="date">{{ info.date }}</i><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a></li>
                </ul>
            </div>
        </div>
        <div class="bottom-list">
            <div class="content-title">
                <h2 class="pf-title"><span>印度</span>电影</h2>
                <a href="movies-info/印度电影" :title="setTitleName('印度电影')" class="more">更多<em></em></a>
            </div>
            <div class="bottom-box">
                <ul>
                    <li v-for="info in india"><i class="date">{{ info.date }}</i><a :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContentBottom",
  data () {
    return {
      erotic: [],
      anime: [],
      india: [],
    }
  },
  computed: {
    doneTodosHomeData () {
      return this.$store.state.homeData;
    }
  },
  watch: {
      doneTodosHomeData(value) {
        this.erotic = value.erotic;
        this.anime = value.anime;
        this.india = value.india;
      }
  },
};
</script>
