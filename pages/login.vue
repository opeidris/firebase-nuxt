<template>
  <div class="mt-16 flex w-full justify-center items-center flex-col">
    <h3 class="text-2xl text-gray-900 font-medium font-serif">Login</h3>
    <form @submit.prevent="pressed" class="flex flex-col justify-center">
      <div>
        <input
          type="text"
          placeholder="email"
          v-model="email"
          class="border border-gray-300 p-3 my-2"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          v-model="password"
          class="border border-gray-300 p-3 my-2"
        />
      </div>
      <button class="w-full bg-green-400 px-4 py-2 rounded-sm border border-gray-900">Login</button>
    </form>
    <small class="text-red-600" v-if="error">{{error}}</small>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.push("/secret");
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style>
</style>