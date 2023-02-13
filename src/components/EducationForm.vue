<template>
  <form @submit.prevent="submit">
    <div class="-mx-3 flex flex-col grow ">
      <div class="w-full px-3 sm:w-2/2">
        <div class="mb-5">
          <div class="relative">
            <div class="absolute inset-y-0 right-4  top-8 flex items-center pl-3 pointer-events-none">
              <template v-if="isValidEducatioin">
                <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                     class="w-6 h-6">
                  <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"/>
                </svg>

              </template>
              <template v-else-if="isValidEducatioin === false && isFocused">
                <div id="notValid" class="absolute left-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                  </svg>
                </div>
              </template>
            </div>
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
                class="w-full rounded  py-3 px-6 text-base  outline-none border focus:outline-none"
                :class="{ 'border-red': isValidEducatioin === false && isFocused, 'border-green': isValidEducatioin === true && isFocused, 'border-black': isValidEducatioin === null || !isFocused }"
                @focus="handleFocus"
                @blur="handleBlur"
                v-model.trim="formItems.education"
            />
          </div>
          <div class="text-stone-700 text-sm flex justify-start mt-1 "> მინიმუმ 2 სიმბოლო</div>
        </div>
      </div>
    </div>
    <div class="-mx-3 flex flex-wrap">
      <div class="w-full px-3  sm:w-1/2">
        <div class="mb-5">
          <label for="date" class="mb-3 block text-base font-medium text-[#07074D] flex">ხარისხი</label>
          <div class="relative">
            <select required name="select" id="select" v-model="props.formItems.eduDegree"
                    class="w-full rounded border border-[#e0e0e0] bg-slate py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green focus:shadow-md">
                <option selected>აირჩიეთ ხარისხი</option>
              <option :selected="edu.id === 2" v-for="edu in store.educationOptions" :value="edu.id"
                      :key="edu.id"> {{ edu.title }}
              </option>


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
              class="w-full rounded border border-[#e0e0e0] bg-slate py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green focus:shadow-md"
              v-model="formItems.eduEndDate" @input="updateInputValues"/>
        </div>
      </div>


    </div>

    <div class="flex flex-wrap">

      <label for="message" class="block mb-2  font-bold">აღწერა</label>
      <textarea required id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded border  focus:border-green "
                placeholder="განათლების აღწერა" v-model="formItems.eduDescription"
                @input="updateInputValues"></textarea>


    </div>
    <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10 mt-10">
  </form>
</template>

<script setup>
import {GlobalStore} from "../store/Global.js";
import {computed, onMounted, ref, watch} from "vue";
import router from "../router/index.js";

const store = GlobalStore()
const props = defineProps(['formItems'])
const isFocused = ref(false);


const showPopUp = ref(false)

const isValidEducatioin = computed(() => {
  return props.formItems.education?.length >= 2;
})
const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};


onMounted(() => {
  store.restoreFromLocalStorage()
})

watch(() => [props.formItems], () => {
  store.updateLocalStorage()
  props.formItems.isFormValid = isValidEducatioin.value;

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

</style>