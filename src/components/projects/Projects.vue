<template>
    <div>
        <navbar></navbar>

          <v-btn v-show="$store.getters.isAuthenticated" id="primaryButton" color="primary" @click="addProject()">Create Project</v-btn>

        <project-details></project-details>

        <footer-bar></footer-bar>

    </div>
</template>
<script>
import Header from "../common/Header";
import Projectdetails from "./Projectdetails";
import axios from 'axios';
import {routes} from "../../routes";
import Footer from "../common/Footer";
export default {
    data() {
        return {
            projects:[]
        }
    },
    mounted() {
       this.fetchProjects();
    },
    components: {
        'navbar': Header,
        'project-details' : Projectdetails,
        "footer-bar": Footer,
    },
    methods: {
        fetchProjects() {
          this.$store.dispatch('getProjects');
        },
        addProject() {
          console.log('entered');
          this.$router.push({
            path:'/projects/addProject'
          })
        },
    }
}
</script>
<style>

</style>
