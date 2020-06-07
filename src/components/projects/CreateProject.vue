<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Project
      </b>
      <p class="formDetails">
        Please give the below details to add your project
      </p>
    </v-card>
    <v-card id="formDiv"
      class="mx-auto"
      max-width="700"
      style="padding: 20px"
    >
    <form>
      <v-text-field
        v-model="project.title"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="project.coordinators"
        label="Co-ordinators"
        required
      ></v-text-field>
      <v-text-field
        v-model="project.description"
        label="Description"
        required
      ></v-text-field>
      <v-text-field
        v-model="project.duration"
        label="Duration"
        required
      ></v-text-field>
      <v-file-input
        v-model="project.projectImage"
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

      project: {
        title: "",
        coordinators:"",
        description: "",
        duration: "",
        projectImage: null,
        // count:0,
      },
    };
  },
  components: {
    navbar: Header
  },
  methods: {
      submit() {
        // this.project.count = this.project.count+1;
        // console.log(this.project.count+"=====")
        this.$store.dispatch('createProject',this.project).then(response=> {
          console.log('from create project comp' + response);
          this.$router.push('/projects');
        })
        .catch(error=> {
          console.log('from create error'+ error.response);
          if (error.response.status === 401) {
              this.$store.dispatch('sendRefreshToken').then(response =>{
                if (response.data.success === true) {
                  this.$store.dispatch('setToken',response.data.token);
                  //this.submit();
                  this.$store.dispatch('createProject',this.project).then(response=> {
                    console.log('With new refresh token  create project : ' + response);
                    this.$router.push('/projects');
                  }).catch(error=>{
                    this.$router.push('/');
                    console.log('req with new token and project not suceesful')
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
            console.log('project other error' + error.response.data);
          }
        });

      }
  }
};
</script>
<style>
</style>
