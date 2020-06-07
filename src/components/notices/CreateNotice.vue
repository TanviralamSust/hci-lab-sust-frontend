<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Notice
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
      <form>
        <v-text-field
          v-model="notice.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.organization"
          label="Organization Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.organiser"
          label="Organiser"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.deadline"
          label="Deadline"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.description"
          label="Description"
          required
        ></v-text-field>
        <v-file-input
          v-model="notice.noteFile"
          accept="application/pdf"
          chips label="Upload File">
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
        notice: {
          title: "",
          organization: "",
          organiser: "",
          deadline: "",
          description: "",
          noteFile: null
        },
      };
    },
    components: {
      navbar: Header
    },
    methods: {
      submit() {
        this.$store.dispatch('createNotice', this.notice).then((response)=> {
          console.log('from create notice comp' + response);
          this.$router.push('/notices');
        })
          .catch(error=> {
            console.log('from create error'+ error.response);
            if (error.response.status === 401) {
              this.$store.dispatch('sendRefreshToken').then(response =>{
                if (response.data.success === true) {
                  this.$store.dispatch('setToken',response.data.token);
                  this.$store.dispatch('createNotice',this.notice).then(response=> {
                    console.log('With new refresh token  create notice : ' + response);
                    this.$router.push('/notices');;
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
              console.log('Notice other error' + error.response.data);
            }
          });
      }
    }
  };
</script>
<style>
</style>
