<template>
    <v-card
            max-width="400"
            class="mx-auto"
    >

        <v-app-bar
                dark
                color="pink"
        >

            <v-toolbar-title>Notice Board</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container>
            <v-row dense>

                <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        cols="12"
                >
                    <v-card
                            :color="colors[i]"
                            dark
                            @click="showNotice()"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                        class="headline"
                                        v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle v-text="item.organization"></v-card-subtitle>
                            </div>

                            <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                            >
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
                            </v-avatar>
                        </div>
                      <v-card>{{item.description}}</v-card>
                    </v-card>
                </v-col>
                <v-card-actions>
                    <v-btn @click="showNotice()" text>Show More..</v-btn>
                </v-card-actions>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {

      computed : {
        items() {
          return this.$store.getters.getLatestNotices
        }
      },
      data: () => ({
            colors: [
              '#1F7087',
              '#952175',
              '#1F7087'
            ],
        }),
      methods : {
          showNotice() {
          console.log('entered');
          this.$router.push({
            path:'/notices'
          })
        },
      }
    }
</script>

<style scoped>

</style>
