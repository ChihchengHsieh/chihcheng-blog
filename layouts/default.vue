<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="true" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar hide-on-scroll :clipped-left="true" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link class="titleLink px-3" to="/">
        {{title}}
        <v-icon class="pl-3" v-if="$vuetify.breakpoint.smAndUp">fa-gamepad</v-icon>
      </nuxt-link>
      <v-spacer />
      <!-- <v-btn class="ma-3" to="/auth/signup" v-if="!$store.getters.isLogin">Sign Up</v-btn>
      <v-btn class="ma-3" to="/auth/login" v-if="!$store.getters.isLogin">Login</v-btn>-->
      <v-btn class="ma-3" @click.stop="logoutUser" v-if="$store.getters.isLogin">Logout</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "fa-chalkboard",
          title: "Posts",
          to: "/"
        },
        {
          icon: "fa-glasses",
          title: "About",
          to: "/about"
        }
      ],

      title: "IT Playground"
    };
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
      window.location.reload(true);
    }
  }
};
</script>

<style lang="scss">
.titleLink {
  text-decoration: none;
  color: white !important;
  font-size: 1.6rem;
}
</style>
