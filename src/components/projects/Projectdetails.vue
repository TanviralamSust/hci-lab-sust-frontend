<template>
  <div class="projectsDiv">
    <div style="margin: 20px" v-for="(item, index) in items" :key ="item._id">
      <v-card
        class="mx-auto"
        max-width="700"
        style="padding: 20px"

      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
            <v-list-item-subtitle>by {{item.coordinators}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-img
          :src="'https://sust-hci-lab-api.herokuapp.com/' + item.image"
          height="300px"
        ></v-img>

        <v-card-actions >
            <v-btn v-if="$store.getters.isAuthenticated" text @click="onDelete(item._id)">Delete</v-btn>

            <!-- <v-btn v-show="$store.getters.isAuthenticated" color="purple" text @click="onUpdate(item._id)">Update</v-btn> -->

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
            color="blue"
          >Details
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{item.description}}
               </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>

</template>

<script>
    export default {
      computed : {
        items() {
          let projects = this.$store.getters.getProjects;
          projects.forEach(project=> {
            project.imageUrl = 'http://localhost:9001/' + project.projectImage;
          });
          console.log(projects)
          return this.$store.getters.getProjects
        }
      },
      methods : {
        onDelete(projectId) {
          console.log(projectId);
          this.$store.dispatch('onDeleteProject', projectId).then(response=>{
            console.log(JSON.stringify(response)+' : the response');
            location.reload();
          }).catch(err=>{
            console.log(JSON.stringify(err));
          });
        },
        onUpdate(projectId) {

        }
      },
      data: () => ({
        show: false,
        url: 'http://localhost:9001/uploads/1581866154570-im.jpg'
      }),
    }
</script>

<style scoped>

</style>
