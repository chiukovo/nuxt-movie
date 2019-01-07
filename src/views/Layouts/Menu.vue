<template>
  <div class="menu">
      <div class="wrapper clearfix">
          <dl class="menu-movie">
              <dt><a href="/movie" title="高清电影线上看"></a></dt>
              <dd>
                  <!--1 电影-->
                  <a v-for="info in menuData[1]" :href="'/movie/' + info.id" :title="info.name">{{ info.name }}</a>
              </dd>
          </dl>
          <dl class="menu-sitcom">
              <dt><a href="/episode" title="剧集线上看"></a></dt>
              <dd>
                  <!--2 剧集-->
                  <a v-for="info in menuData[2]" :href="'/episode/' + info.id" :title="info.name">{{ info.name }}</a>
              </dd>
          </dl>
          <dl class="menu-anime">
              <dt><a href="/anime" title="动漫线上看"></a></dt>
              <dd>
                  <!--4 动漫-->
                  <a v-for="info in menuData[4]" :href="'/anime/' + info.id" :title="info.name">{{ info.name }}</a>
              </dd>
          </dl>
      </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('GET_MENU', { vm: this });
  },
  updated () {
  },
  computed: {
    menuData () {
      return this.$store.state.menu;
    }
  },
};
</script>
