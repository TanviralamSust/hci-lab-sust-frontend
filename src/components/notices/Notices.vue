<template>
  <div>
    <navbar></navbar>

    <v-btn v-show="$store.getters.isAuthenticated" id="primaryButton" color="primary" @click="addNotice()">Add Notice</v-btn>

    <notice-details></notice-details>

    <footer-bar></footer-bar>

  </div>
</template>
<script>
  import Header from "../common/Header";
  import NoticeDetails from "./NoticeDetails";
  import axios from 'axios';
  import Footer from "../common/Footer";
  export default {
    data() {
      return {
        notices:[],
      }
    },
    mounted() {
      this.fetchNotices();
    },
    components: {
      'navbar': Header,
      'notice-details' : NoticeDetails,
      "footer-bar": Footer,
    },
    methods: {
      fetchNotices() {
        this.$store.dispatch('fetchNotices');
      },
      addNotice() {
        console.log('entered');
        this.$router.push({
          path:'/notices/addNotice'
        })
      },
    }
  }
</script>
<style>

</style>
