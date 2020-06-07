<template>
    <v-toolbar id="headerDiv" style="height: 100px">
      <v-toolbar-title @click="showHome()" id="headerTitle" style="padding: 20px">Welcome To HCI Lab, SUST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">

        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path" @click="btnClick(item.title)">
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "Projects",
          path: "/projects"
        },
        {
          title: "Members",
          path: "/members"
        },
        {
          title: "Notices",
          path: "/notices"
        },
        {
          title: "Achievements",
          path: "/achievements"
        },
        {
          title: this.$store.getters.isAuthenticated ? "Log out" : "Log In"
        }
      ]
    };
  },
  methods:{
    showHome() {
      this.$router.push({
        path:'/'
      })
    },
    btnClick(action) {
      if (action === 'Log In') this.$router.push('/login');
      else if (action === 'Log out') {
        this.$store.dispatch('logoutUser');
        location.reload();
      }
    }
  }
};
</script>

<style>
</style>
