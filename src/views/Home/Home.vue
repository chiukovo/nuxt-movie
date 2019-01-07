<template>
  <div class="content">
    <div class="wrapper clearfix">
      <GalleryList/>
      <ContentSideLeft/>
      <WeekTop10/>
      <ContentBottom/>
    </div>
  </div>
</template>

<script>
import GalleryList from "./GalleryList";
import ContentSideLeft from "./ContentSideLeft";
import WeekTop10 from "./WeekTop10";
import ContentBottom from "./ContentBottom";

export default {
  name: "Home",
  mounted () {
    this.$store.dispatch('CALL_API_HOME', { vm: this });
    this.homeJs();
  },
  components: {
    GalleryList,
    ContentSideLeft,
    WeekTop10,
    ContentBottom,
  },
  computed: {
    doneTodosHomeData () {
      return this.$store.state.homeData;
    }
  },
  methods: {
    homeJs () {
      var b = $("#sidebar-scroll").offset().top;
      var c = $(".content-bottom").offset().top - $("#sidebar-scroll").height();
      $(window).scroll(function() {
          var a = $(window).scrollTop();
          if (a > b) {
              $("#sidebar-scroll").css({
                  "position": "fixed",
                  "top": "0"
              });
              a > c ? $("#sidebar-scroll").css("top", -(a - c + 30)) : $("#sidebar-scroll").css("top", "0")
          } else {
              $("#sidebar-scroll").css({
                  "position": "static"
              })
          }
      })
    }
  }
};
</script>
