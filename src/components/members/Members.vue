<template>
  <div>
    <navbar></navbar>

    <v-btn v-show="$store.getters.isAuthenticated" id="primaryButton" color="primary" @click="addMember()">Add Member</v-btn>

    <member-details></member-details>
    <footer-bar></footer-bar>

  </div>
</template>
<script>
  import Header from "../common/Header";
  import MemberDetails from "./MemberDetails";
  import axios from 'axios';
  import Footer from "../common/Footer";
  export default {
    data() {
      return {
        members:[],
      }
    },
    mounted() {
      this.fetchMembers();

    },
    components: {
      'navbar': Header,
      'member-details' : MemberDetails,
      "footer-bar": Footer,
    },
    methods: {
      fetchMembers() {
        this.$store.dispatch('fetchMembers');
      },
      addMember() {
        console.log('entered');
        this.$router.push({
          path:'/members/addMember'
        })
      },
    }
  }
</script>
<style>

</style>
