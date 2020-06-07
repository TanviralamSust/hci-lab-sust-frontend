<template>
  <div>
    <navbar style="height: 100px"></navbar>
    <home-slider></home-slider>

    <div class="homeBody">
      <div>
        <div><about></about></div>
        <div style="margin-top: 30px"><contact></contact></div>
      </div>

      <div><notice-board></notice-board></div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>

import HomeSlider from "./HomeSlider";
import Header from "../common/Header";
import NoticeBoard from "./NoticeBoard";
import About from "./About";
import Details from "./Details";
import Contact from "./Contact";
import Footer from "../common/Footer";

export default {

  mounted() {
    this.fetchNotices();
  },

  components: {
    "home-slider": HomeSlider,
    navbar: Header,
    "notice-board": NoticeBoard,
    about: About,
    details_div: Details,
    contact: Contact,
    "footer-bar": Footer,
  },

  methods: {
    viewProjects() {
      this.$router.push("/projects");
    },
    fetchNotices() {
      this.$store.dispatch('fetchNotices');
    },
  },

};
</script>
<style>
</style>
