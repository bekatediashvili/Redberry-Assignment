<template>
  <header class="flex items-center justify-between px-4 py-3 ">

    <div class="flex items-center ">
      <router-link to="/home" @click="clearLocalStorage"
                   class="flex items-center justify-center bg-gray-200 text-gray-700 p-2  rounded-full ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
      </router-link>


      <i class="fas fa-arrow-left mr-3 text-gray-700"></i>
      <h2 class="text-lg font-medium text-gray-700">{{ headerTitle }}</h2>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">


    </div>
    <div class="text-gray-700">{{ currentPage }}</div>

  </header>

</template>

<script setup>
import {computed, ref} from "vue";

const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')

}


const emits = defineEmits(['clearLocalStorage'])
const props = defineProps(['headerTitle', 'currentPage'])


</script>

<style scoped>

</style>