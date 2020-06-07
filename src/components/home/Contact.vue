<template>
  <v-card
  >

    <form class="contactForm">
      <b class="formHeader" style="color: #26c6da">Contact Us! </b>
      <p>Please provide your message below.</p>
      <v-text-field
        v-model="user.email"
        label="Email"
        required
      ></v-text-field>
      <v-textarea
        name="input-7-1"
        label="Message"
        v-model="user.text"
        auto-grow
      ></v-textarea>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </form>
  </v-card>

</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: "",
          text:"",},
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('sendContact', this.user).then(response=>{
          alert('Your Message sent successfully, Thank you for your response!');
          console.log(response+'----con');
        }).catch(err=>{
          console.log(err+'----erCon');
        });
      }
    }
  }
</script>

<style scoped>

</style>
