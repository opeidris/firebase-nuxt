<template>
  <div>
    <h1 class="text-4xl text-gray-500">This is a secret 🤭</h1>
  </div>
</template>
 
<script>
import { getUserFromCookie } from "@/helpers";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req);
      console.log(user);
      if (!user) {
        redirect("/login");
      }
    } else {
      let user = firebase.auth().currentUser;
      if (!user) {
        redirect("/login");
      }
    }
  }
};
</script>

<style>
</style>