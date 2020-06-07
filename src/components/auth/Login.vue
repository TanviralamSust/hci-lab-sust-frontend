<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        LOG IN
      </b>
      <p class="formDetails">
        Please give the below details to add your notice!
      </p>
    </v-card>
    <v-card id="formDiv"
            class="mx-auto"
            max-width="700"
            style="padding: 20px"
    >
      <form @submit.prevent='login'>
        <v-text-field
          v-model="user.userName"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.passWord"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-btn class="mr-4" type="submit">Log In</v-btn>
        <!-- <v-btn @click="clear">clear</v-btn> -->
      </form>
    </v-card>
  </div>
</template>
<script>
  import Header from "../common/Header";
  export default {
    data() {
      return {
        user: {
          userName: "",
          passWord: "",
        },
      };
    },
    components: {
      navbar: Header
    },
    methods: {
      login() {
          this.$store.dispatch('loginUser', this.user).then(response => {
              console.log(response);
              this.$router.push('/');
          }).catch(error=> {
              console.log(error);
          })
      }
    }
  };
</script>
<style>
</style>
