<template>
  <div class="flex flex-col">
    <nav class="my-8 flex items-center justify-center">
      <div class="flex justify-around w-5/12">
        <nuxt-link to="/" class="mx-2 text-blue-700 underline text-md md:text-2xl">Home Page</nuxt-link>|
        <nuxt-link to="/secret" class="mx-2 text-blue-700 underline text-md md:text-2xl">Secret</nuxt-link>|
        <div
          @click="logout"
          v-if="loggedIn"
          class="mx-2 text-blue-700 underline cursor-pointer text-md md:text-2xl"
        >Logout</div>
        <nuxt-link v-else to="/login" class="mx-2 text-blue-700 underline text-md md:text-2xl">Login</nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>
</style>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import Cookies from "js-cookie";
export default {
  mounted() {
    this.setupFirebase();
  },
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("logged in");
          this.loggedIn = true;
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => {
              Cookies.set("access_token", token);
            });
        } else {
          this.loggedIn = false;
          Cookies.remove("access_token");
        }
      });
    }
  }
};
</script>
