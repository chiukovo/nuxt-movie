<template>
    <div class="content-recommend wow flipInX">
        <div class="content-title">
            <h2 class="pf-title"><span>推荐</span>资源</h2>
        </div>
        <div class="recommend-list">
            <div class="recommend-item">
                <dl v-for="info in recommendData">
                    <dt><a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">
                    <img :data-original="photoDomain + info.img" :title="setTitleName(info.name)" :alt="setTitleName(info.name)"></a>
                    </dt>
                    <dd>
                        <a href="movies-info" :href="'/movies-info/' + info.id + '-' + info.category_id" :title="setTitleName(info.name)">{{ info.name }}</a>
                        <span class="tag" v-for="(tag, key) in info.tag">{{ tag }}</span>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Recommend",
  data () {
    return {
        recommendData: [],
    }
  },
  updated () {
    this.publicJS();
  },
  computed: {
    doneTodosApiData () {
      return this.$store.state.recommendData;
    }
  },
  watch:{
      doneTodosApiData (recommendData) {
        this.recommendData = recommendData;
      }
  },
};
</script>