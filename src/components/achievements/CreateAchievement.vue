<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Achievement
      </b>
      <p class="formDetails">
        Please give the below details to add your achievement
      </p>
    </v-card>
    <v-card id="formDiv"
            class="mx-auto"
            max-width="700"
            style="padding: 20px"
    >
      <form>
        <v-text-field
          v-model="achievement.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="achievement.description"
          label="Description"
          required
        ></v-text-field>
        <v-file-input
          v-model="achievement.achievementImage"
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
        achievement: {
          title: "",
          description: "",
          achievementImage: null
        },
      };
    },
    components: {
      navbar: Header
    },
    methods: {
      submit() {
        this.$store.dispatch('createAchievement', this.achievement).then((response)=> {
          console.log('from create achievement comp' + response);
          this.$router.push('/achievements');
        })
          .catch(error=> {
            console.log('from create error'+ error.response);
            if (error.response.status === 401) {
              this.$store.dispatch('sendRefreshToken').then(response =>{
                if (response.data.success === true) {
                  this.$store.dispatch('setToken',response.data.token);
                  //this.submit();
                  this.$store.dispatch('createAchievement',this.achievement).then(response=> {
                    console.log('With new refresh token  create achievement : ' + response);
                    this.$router.push('/achievements');;
                  }).catch(error=>{
                    this.$router.push('/');
                    console.log('req with new token and achievement not suceesful')
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
              console.log('achievements other error' + error.response.data);
            }
          });
      }
    }
  };
</script>
<style>
</style>
