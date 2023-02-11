<template>

  <div id="rem" class="grid grid-cols-2 gap-3 ">
    <div id="GridStart" class="grid grid-start-1">


      <Header current-page="3/3" header-title="განათლება" @clear-local-storage="clearLocalStorage"></Header>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">

      <div class="flex  items-center justify-center  ">

        <div class="mx-auto w-full ">
          <form @submit.prevent="submit">
            <div class="-mx-3 flex flex-col grow ">
              <div class="w-full px-3 sm:w-2/2">
                <div class="mb-5">
                  <label
                      for="fName"
                      class="mb-3 block text-base font-medium text-[#07074D] flex"
                  >
                    სასწავლებელი
                  </label>
                  <input
                      required
                      name="fName"
                      id="fName"
                      placeholder="სასწავლებელი"
                      class="w-full rounded-md  py-3 px-6 text-base  outline-none border focus:outline-none"
                      :class="{ 'border-red-700': isValidEducatioin === false && isFocused, 'border-green-700': isValidEducatioin === true && isFocused, 'border-black': isValidEducatioin === null || !isFocused }"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      v-model.trim="store.educations[0].education"
                  />
                  <div class="text-stone-700 text-sm flex justify-start mt-1 "> მინიმუმ 2 სიმბოლო</div>
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3  sm:w-1/2">
                <div class="mb-5">
                  <label for="date" class="mb-3 block text-base font-medium text-[#07074D] flex">ხარისხი</label>
                  <div class="relative">
                    <select required name="select" id="select "
                            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline">
                      <option> აირჩიეთ ხარისხი</option>
                      <option v-for="edu in store.chosenDegree" :key="edu.id"> {{ edu.title }}</option>


                    </select>


                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2 ">

                <div class="mb-5">
                  <label
                      for="date"
                      class="mb-3 block text-base font-medium text-[#07074D] flex"
                  >
                    დამთავრების რიცხვი
                  </label>
                  <input
                      required
                      type="date"
                      name="date"
                      id="date"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      v-model="store.educations[0].eduEndDate" @input="updateInputValues"/>
                </div>
              </div>


            </div>

            <div class="flex flex-wrap">

              <label for="message" class="block mb-2  font-bold">აღწერა</label>
              <textarea required id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-white-500"
                        placeholder="განათლების აღწერა" v-model="store.educations[0].eduDescription"
                        @input="updateInputValues"></textarea>


            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            <div class="flex flex-wrap  "></div>
            <button class="bg-blue text-white font-bold py-1 px-5 rounded flex mb-24">
              სხვა სასწავლებლის დამატება
            </button>

            <div class="flex justify-between ">
              <router-link to="/experience"
                           class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
                უკან
              </router-link>
              <button type="submit"
                      class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
                დასრულება
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="grid grid-end-2">
        <img src="/src/assets/img/SmallCornerLogo.png" alt="SmallLogo" class="w-10 h-10 absolute bottom-14 left-8">
        <div class="h-20">
          <div class="flex flex-col mt-10 pl-10 " id="input">

            <p class="flex align-center mb-2 text-lg text-[#F93B1D] font-bold "> {{ store.name }} {{ store.surname }} </p>
            <div class="absolute top-8 right-20">
              <img :src="store.image" id="selected-image" class="rounded-full   w-44 h-44 " v-if="store.image"/>
            </div>
            <div class="flex align-center mb-2">
              <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
              </svg>
              <p>{{ store.email }}</p>
            </div>

            <div class="flex align-center mb2">
              <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mb-2 mr-2">
                <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
              </svg>
              <p>{{ store.phone }}</p>

            </div>
            <div class="flex flex-col">
              <p class="mb-2 text-lg text-red-500 flex justify-start">ჩემ შესახებ</p>
              <p class="flex justify-start mb-4 overflow-wrap-break-word">{{ store.about }}</p>

            </div>

            <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10 mt-16">

          </div>

          <div class="flex flex-col pl-10">
            <p class="mb-6 text-lg text-red-500 flex justify-start">გამოცდილება</p>
            <p class="flex justify-start">{{ store.experiences[0].position }}</p>
            <p class="flex justify-start">{{ store.experiences[0].employer }}</p>

            <p class="flex align-center">{{ store.experiences[0].begginningDate }} {{
                store.experiences[0].endData
              }}</p>

            <p class="flex justify-start"> {{ store.experiences[0].description }}</p>
            <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10 mt-16">

          </div>
          <div class="flex flex-col pl-10">
            <p class="mb-6 text-lg text-red-500 flex justify-start">განათლება</p>
            <p class="flex justify-start">{{ store.educations[0].education }} {{ select }}</p>


            <p class="flex align-center">{{ store.educations[0].eduDegree }} {{ store.educations[0].eduEndDate }}</p>

            <p class="flex justify-start"> {{ store.educations[0].eduDescription }}</p>


          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import {computed, onMounted, ref, watch, toRaw} from "vue";
import axios from "axios";
import Header from "./Header.vue";
import {GlobalStore} from "../store/Global.js";
import router from "../router/index.js";


const educationValue = ref('')
const store = GlobalStore()

const isFocused = ref(false);

const select = ref('')


axios.get('https://resume.redberryinternship.ge/api/degrees').then(responce => {

  store.chosenDegree = responce.data
});

const isValidEducatioin = computed(() => {
  return store.educations[0].education?.length >= 2;
})
const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

let education = ref([])

onMounted(() => {
  store.restoreFromLocalStorage()
})

watch(() => [store.name, store.surname, store.email, store.phone, store.about, store.educations, store.experiences, store.image], () => {
  localStorage.setItem("inputValues", JSON.stringify(store));
}, {deep: true});

const updateInputValues = () => {
  store.updateLocalStorage();
};
const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')
  store.reset()
}


const isFormValid = computed(() => {
  return isValidEducatioin.value;


});

const submit = () => {

  if (isFormValid.value) {

    router.push({path: '/resume'});
  }

}


</script>

<style scoped>
#rem {
  padding: 1rem;
}

#GridStart {
  background-color: #f9f9f9;
  padding: 10px;
  padding-bottom: 5rem;

}

#svg{
  color:#898989;
}
</style>