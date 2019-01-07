<template>
  <div id="app">
    <Header/>
    <Menu/>
    <router-view/>
    <Footer/>
    <ScrollBar/>
  </div>
</template>

<script>
import Menu from "./views/Layouts/Menu";
import Header from "./views/Layouts/Header";
import Footer from "./views/Layouts/Footer";
import ScrollBar from "./views/Layouts/ScrollBar";

export default {
  components: {
    Menu,
    Header,
    Footer,
    ScrollBar,
  },
  created () {

  },
  methods: {

  }
};
</script>