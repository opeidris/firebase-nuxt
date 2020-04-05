<template>
  <div class="mt-16 flex w-full justify-center items-center flex-col">
    <h3 class="text-2xl text-gray-900">Login</h3>
    <form @submit.prevent="pressed">
      <div>
        <input type="text" placeholder="email" v-model="email" />
      </div>
      <div>
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <div class="error" v-if="error">{{error}}</div>
  </div>
</template>

<script>
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
      alert("pressed");
    }
  }
};
</script>

<style>
</style>