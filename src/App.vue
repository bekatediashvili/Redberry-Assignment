<template>
  <RouterView></RouterView>
</template>

<script setup>
import {GlobalStore} from "./store/Global.js";
import axios from "axios";

const store = GlobalStore()


axios.get('https://resume.redberryinternship.ge/api/degrees').then(responce => {
  store.educationOptions = responce.data
});


</script>
<style scoped>
</style>

