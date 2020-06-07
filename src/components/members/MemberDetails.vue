<template>
  <div class>
    <div style="margin: 20px" v-for="(item, index) in items" :key ="item._id">
      <v-card
        class="mx-auto"
        max-width="700"
        style="padding: 20px">
          <v-container>
            <v-row justify="space-between">

              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  :src="'http://localhost:9001/' + item.image"
                ></v-img>
                <div style="margin-top: 10px">
                  <v-btn v-show="$store.getters.isAuthenticated" @click="onDeleteMember(item._id)" text>Delete</v-btn>

                  <!-- <v-btn v-show="$store.getters.isAuthenticated" color="purple" text>
                    Update
                  </v-btn> -->
                </div>
              </v-col>
                <div class="memberDiv" style="margin-top: 10px">

                    <p class="aboutText">Name: {{item.firstName+item.lastName}}</p>

                    <p class="aboutText">Email: {{item.email}}</p>

                    <p class="aboutText">Designation: {{item.designation}}</p>

                    <p class="aboutText">Research Interest: {{item.researchInterest}}</p>

                    <p class="aboutText">Current Work: {{item.currentWork}}</p>

                </div>
            </v-row>
          </v-container>
        </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    computed : {
      items() {
        return this.$store.getters.getMembers
      }
    },
    methods: {
      onDeleteMember(memberId) {
        this.$store.dispatch('onDeleteMember', memberId).then(response=>{
          location.reload();
        }).catch(err => {
          console.log(JSON.stringify(err));
        })
      }
    }
  }
</script>

<style scoped>

</style>

