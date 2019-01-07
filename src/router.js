import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import MovieInfo from "./views/MovieInfo/MovieInfo.vue";
import WatchMovie from "./views/MovieInfo/WatchMovie.vue";
import List from "./views/List/List.vue";
import Search from "./views/Search.vue";
import Help from "./views/Help.vue";
import ApiTest from "./components/ApiTest";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/movie/:data?/:page?",
      name: "movie",
      component: List
    },
    {
      path: "/episode/:data?/:page?",
      name: "episode",
      component: List
    },
    {
      path: "/anime/:data?/:page?",
      name: "anime",
      component: List
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/search-tag/:search/:type/:cid/:page?",
      name: "searchTag",
      component: Search
    },
    {
      path: "/movies-info/:data",
      name: "movieInfo",
      component: MovieInfo
    },
    {
      path: "/watch-movie/:data/:num?",
      name: "watchMovie",
      component: WatchMovie
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/apiTest",
      name: "apiTest",
      component: ApiTest
    }
  ]
});
