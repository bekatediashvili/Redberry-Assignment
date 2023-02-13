<template>

  <div class="flex items-start color-[#FFFFFF] ">

    <router-link to="/home" @click="clearLocalStorage"
                 class="flex items-center justify-center  bg-gray-200 text-gray-700 p-2 mt-5 ml-8  rounded-full ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
      </svg>
    </router-link>
    <div class="flex flex-col   pl-10 w-6/12 mx-auto mt-6  p-10  " id="input" style=" border: 1px solid black;">


      <div class="relative">
        <img src="/src/assets/img/SmallCornerLogo.png" alt="SmallLogo" class="w-10 h-10 absolute bottom-0 ">
        <p class="flex align-center mb-2 text-lg text-[#F93B1D] font-bold leading-10 text-3xl "> {{ store.name }}
          {{ store.surname }} </p>
        <div class="absolute top-0 right-20">
          <img :src="store.image" id="selected-image" class="rounded-full   w-44 h-44 " v-if="store.image"/>
        </div>

        <div class="flex align-center mb-2">
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 mr-2">
            <path stroke-linecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
          </svg>
          <p>{{ store.email }}</p>
        </div>
        <div class="flex align-center mb2">
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-6 h-6 mb-2 mr-2">
            <path fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"/>
          </svg>
          <p>{{ store.phone }}</p>
        </div>
        <div class="flex flex-col">
          <p class="mb-6 text-lg text-[#F93B1D] flex justify-start">ჩემ შესახებ</p>
          <p class="flex justify-start">{{ store.about }}</p>
          <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10 mt-16">

        </div>

        <div class="flex flex-col" v-for="(item, index) in store.experiences">
          <p class="mb-6 text-lg text-[#F93B1D] flex justify-start">გამოცდილება</p>
          <p class="flex justify-start">{{ item.position }}</p>
          <p class="flex justify-start">{{ item.employer }}</p>

          <p class="flex align-center">{{ item.begginningDate }} {{ item.endData }}</p>

          <p class="flex justify-start"> {{ item.description }}</p>
          <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10 mt-16">

        </div>
        <div class="flex flex-col mb-16" v-for="(item, index) in store.experiences">
          <p class="mb-6 text-lg text-[#F93B1D] flex justify-start">განათლება</p>
          <p class="flex justify-start">{{ item.education }}</p>


          <p class="flex align-center">{{ item.eduDegree }} {{ item.eduEndDate }}</p>

          <p class="flex justify-start mb-8"> {{ item.eduDescription }}</p>


        </div>
      </div>

    </div>


  </div>
  <SVG :show-pop-up="showPopUp"></SVG>

</template>

<script setup>
import {GlobalStore} from "../store/Global.js";
import {onMounted, ref} from "vue";
import SVG from "./SVG.vue";

const store = GlobalStore()
const showPopUp = ref(true)

onMounted(() => {
  store.restoreFromLocalStorage()

})
const updateInputValues = () => {
  store.updateLocalStorage()

}
const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')
  store.reset()
}


</script>

<style scoped>
#svg {
  color: #898989;
}

body {
  background-color: #474747;
}

</style>