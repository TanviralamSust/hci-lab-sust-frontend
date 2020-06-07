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
          </v-list-item-content>
        </v-list-item>
        <v-img
          :src="'http://localhost:9001/'+item.image"
          height="300px"
        ></v-img>

        <v-card-actions>
          <v-btn v-show="$store.getters.isAuthenticated" @click="onDeleteAchievement(item._id)" text>Delete</v-btn>

          <v-btn
            v-show="$store.getters.isAuthenticated"
            color="purple"
            text
          >
            Update
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="blue"
            icon
            @click="show = !show"
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
        return this.$store.getters.getAchievements
      }
    },
    methods: {
      onDeleteAchievement(achievmentId) {
        this.$store.dispatch('onDeleteAchievement', achievmentId)
        .then(response =>{
          location.reload();
        }).catch(err=>{
          console.log(JSON.stringify(err));
        })
      }
    },
    data: () => ({
      show: false,
    }),
  }
</script>

<style scoped>

</style>

