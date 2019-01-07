<template>
  <div class="header">
      <div class="wrapper clearfix">
          <a href="/" title="汤圆影视" class="logo"></a>
          <div class="search">
              <div class="search-content">
                  <form method="get" action="/search">
                      <input placeholder="来嘛英雄！搜索影片或演员名都行~" name="keyword" class="searchbox" type="text" :value="keyword">
                      <input value="搜索" class="searchbtn" type="submit">
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      keyword: typeof this.$route.query.keyword == 'undefined' ? '' : this.$route.query.keyword,
    }
  },
  mounted() {
    this.publicJS();
  },
};
</script>
