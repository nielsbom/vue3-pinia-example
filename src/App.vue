<script setup>
import { useAuthStore } from "./authStore.js";
const store = useAuthStore();
</script>

<template>
  <form>
    <input type="email" v-model="store.email" />
    <input type="password" v-model="store.password" />
    <input type="button" value="reset values in store" @click="store.reset()" />
  </form>
</template>
<style>
input {
  display: block;
  border: 1px solid black;
  margin: 3px;
}
</style>
