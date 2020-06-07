<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Member
      </b>
      <p class="formDetails">
        Please give the below details to add member!
      </p>
    </v-card>
    <v-card id="formDiv"
            class="mx-auto"
            max-width="700"
            style="padding: 20px"
    >
      <form>
        <v-text-field
          v-model="member.firstName"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.lastName"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.researchInterest"
          label="Research Interest"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.email"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.designation"
          label="Designation"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.currentWork"
          label="Current Work"
          required
        ></v-text-field>
        <v-file-input
          v-model="member.memberImage"
          accept="image/*"
          label="Image">
        </v-file-input>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <!-- <v-btn @click="clear">clear</v-btn> -->
      </form>
    </v-card>
  </div>
</template>
<script>
  import Header from "../common/Header";
  import axios from "axios";
  export default {
    data() {
      return {
        member: {
          firstName: "",
          lastName: "",
          email: "",
          researchInterest: "",
          designation: "",
          currentWork: "",
          memberImage: null
        },
      };
    },
    components: {
      navbar: Header
    },
    methods: {
      submit() {
        this.$store.dispatch('createMember', this.member).then((response)=> {
          console.log('from create member comp' + response);
          this.$router.push('/members');
        })
          .catch(error=> {
            console.log('from create error'+ error.response);
            if (error.response.status === 401) {
              this.$store.dispatch('sendRefreshToken').then(response =>{
                if (response.data.success === true) {
                  this.$store.dispatch('setToken',response.data.token);
                  //this.submit();
                  this.$store.dispatch('createMember',this.member).then(response=> {
                    console.log('With new refresh token  create member : ' + response);
                    this.$router.push('/members');;
                  }).catch(error=>{
                    this.$router.push('/');
                    console.log('req with new token and member not suceesful')
                  });
                  console.log(response.data.token+" : get success response token");
                } else {
                  this.$router.push('/');
                }
              }).catch(error=>{
                this.$router.push('/');
                console.log('refresh token other error' + error);
              });
            } else {
              console.log('member other error' + error.response.data);
            }
          });
      }
    }
  };
</script>
<style>
</style>
