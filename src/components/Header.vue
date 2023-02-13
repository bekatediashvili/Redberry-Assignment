<template>
  <header class="flex items-center justify-between px-4 py-3 ">

    <div class="flex items-center  ">
      <router-link to="/home" @click="$emit('clearLocalStorage');"
                   class="flex items-center justify-center  p-2  rounded-full " id="svg">
        <svg id="color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-4 h-4  ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
      </router-link>


      <i class="fas fa-arrow-left mr-3 text-grey"></i>
      <h2 class="text-lg font-bold text-black text-3xl ">{{ headerTitle }}</h2>




    </div>
    <div class="text-black ">{{ currentPage }}</div>

  </header>
  <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-5">
</template>

<script setup>
import {computed, ref} from "vue";

const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')

}

//props
const props = defineProps(['headerTitle', 'currentPage'])

//emits
const emits = defineEmits(['clearLocalStorage'])


</script>

<style scoped>

#svg{
background-color: #f1f5f9;
}
#color{
  color: black;
  ;
}

</style>