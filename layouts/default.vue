<template>
  <div class="flex flex-col">
    <nav class="my-8 flex items-center justify-center">
      <div class="flex justify-around w-5/12">
        <nuxt-link to="/" class="mx-2 text-blue-700 underline text-md md:text-2xl">Home Page</nuxt-link>|
        <nuxt-link to="/secret" class="mx-2 text-blue-700 underline text-md md:text-2xl">Secret</nuxt-link>|
        <nuxt-link to="/login" class="mx-2 text-blue-700 underline text-md md:text-2xl">Login</nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>
</style>
