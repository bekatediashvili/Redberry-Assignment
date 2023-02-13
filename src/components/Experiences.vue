<template >
  <form @submit.prevent="submit" v-for="(item, index) in store.educations" :data="item">
    <div>
      <div class="-mx-3 flex flex-col grow ">
        <div class="w-full px-3 sm:w-2/2">
          <div class="mb-5">
            <div class="relative">
              <div class="absolute inset-y-0 right-4  top-8 flex items-center pl-3 pointer-events-none">
                <template v-if="isValidPosition">
                  <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                       class="w-6 h-6">
                    <path fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"/>
                  </svg>

                </template>
                <template v-else-if="isValidPosition === false && isFocused">
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
                თანამდებობა
              </label>
              <input

                  name="fName"
                  id="fName"
                  placeholder="დეველოპერი, დიზაინერი ა.შ"
                  class="w-full rounded-md  py-3 px-6 text-base border focus:outline-none rounded"
                  :class="{ 'border-red': isValidPosition === false && isFocused, 'border-green': isValidPosition === true && isFocused, 'border-black': isValidPosition === null || !isFocused }"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  v-model.trim="store.experiences[0].position"/>
            </div>
            <div class="text-stone-700 text-sm flex justify-start mt-1 "> მინიმუმ 2 სიმბოლო</div>
          </div>
        </div>
        <div class="w-full px-3 sm:w-2/2">
          <div class="mb-5">
            <div class="relative">
              <div class="absolute inset-y-0 right-4  top-8 flex items-center pl-3 pointer-events-none">
                <template v-if="isValidEmployer">
                  <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                       class="w-6 h-6">
                    <path fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"/>
                  </svg>

                </template>
                <template v-else-if="isValidEmployer === false && isFocused">
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
                  for="lName"
                  class="mb-3 block text-base font-medium text-[#07074D] flex"
              >
                დამსაქმებელი
              </label>
              <input

                  name="lName"
                  id="lName"
                  placeholder="დამსაქმებელი"
                  class="w-full rounded-md  py-3 px-6 text-base border focus:outline-none rounded"
                  :class="{ 'border-red': isValidEmployer === false && isFocused, 'border-green': isValidEmployer === true && isFocused, 'border-black': isValidEmployer === null || !isFocused }"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  v-model.trim="store.experiences[0].employer"/>
            </div>
            <div class="text-stone-700 text-sm flex justify-start mt-1 "> მინიმუმ 2 სიმბოლო</div>
          </div>

        </div>

      </div>


      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D] flex"
            >
              დაწყების რიცხვი
            </label>
            <input
                type="date"
                required
                name="date"
                id="date"
                class="w-full rounded border border-grey bg-slate py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green focus:shadow-md"
                v-model.trim="store.experiences[0].begginningDate"/>
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D] flex"
            >
              დამთავრების რიცხვი
            </label>
            <input

                type="date"
                name="date"
                id="date"
                required
                class="w-full rounded border border-grey bg-slate py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green focus:shadow-md"
                :class="{'border-green': isFocused ===true}"
                v-model.trim="store.experiences[0].endData"


            />
          </div>
        </div>

      </div>

      <div class="flex flex-wrap">

        <label for="message" class="block mb-2  font-bold  ">აღწერა</label>
        <textarea required id="message" rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-green dark:bg-white-700 dark:border-grey dark:placeholder-gray-400 dark:text-black dark:focus:green dark:focus:green"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  v-model.trim="store.experiences[0].description"
        ></textarea>


      </div>
      <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10 mt-10">
      <div class="flex flex-wrap  "></div>
      <button type="submit" class="bg-blue hover:bg-blue text-white font-bold py-1 px-2 rounded flex mb-24">
        მეტი გამოცდილების დამატება
      </button>
    </div>

    <div class="flex justify-between ">
      <router-link to="/personalinfo"
                   class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
        უკან
      </router-link>
      <button type="submit"
              class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
        შემდეგი
      </button>

    </div>


  </form>




</template>


<script setup>
import {GlobalStore} from "../store/Global.js";
import {computed, onMounted, ref, watch} from "vue";

const store = GlobalStore()


const isFocused= ref(false)
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
};


//
// const props = defineProps(['data','isValidPosition','isValidEmployer','isFocused',])

const props = defineProps({
  data:{
    type :Array,
    required: true
  },
  isValidPosition :{
    type: Boolean,
    default: null
  },
  isValidEmployer :{
    type: Boolean,
    default: null
  },
  isFocused :{
    type: Boolean,
    default: false
  },
})
const emits= defineEmits(['handleBlur','handleFocus','submit' ,'check' ,'checkPosition','increase'])


const check =  computed(()=>{
  return  { 'border-red': props.isValidEmployer === false && props.isFocused, 'border-green': props.isValidEmployer === true && props.isFocused, 'border-black': props.isValidEmployer === null || !props.isFocused }
})

const checkPosition = computed(()=>{
  return { 'border-red': props.isValidPosition === false && props.isFocused, 'border-green': props.isValidPosition === true && props.isFocused, 'border-black': props.isValidPosition === null || !props.isFocused }
})
const isFormValid = computed(() => {
  return props.isValidEmployer ;
});

const submit = ()=>{
  store.experiences.push([{'begginningDate': '', 'endData': '', 'position': '', 'employer': '', 'description': ''}])
}
</script>