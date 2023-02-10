<template>

  <div id="rem" class="grid grid-cols-2 gap-3 ">
    <div id="GridStart" class="grid grid-start-1">


      <Header header-title="გამოცდილება" current-page="2/3" @clear-local-storage="clearLocalStorage"></Header>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">
      <div class="flex  items-center justify-center  ">

        <div class="mx-auto w-full ">
          <form @submit.prevent="submit">
        <div>
            <div class="-mx-3 flex flex-col grow ">
              <div class="w-full px-3 sm:w-2/2">
                <div class="mb-5">
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
                      class="w-full rounded-md  py-3 px-6 text-base border focus:outline-none rounded-md"
                      :class="{ 'border-red-700': isValidPosition === false && isFocused, 'border-green-700': isValidPosition === true && isFocused, 'border-black': isValidPosition === null || !isFocused }"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      v-model.trim="store.position"/>
                  <div class="text-stone-700 text-sm flex justify-start mt-1 "> მინიმუმ 2 სიმბოლო</div>
                </div>
              </div>
              <div class="w-full px-3 sm:w-2/2">
                <div class="mb-5">
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
                      class="w-full rounded-md  py-3 px-6 text-base border focus:outline-none rounded-md"
                      :class="{ 'border-red-700': isValidEmployer === false && isFocused, 'border-green-700': isValidEmployer === true && isFocused, 'border-black': isValidEmployer === null || !isFocused }"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      v-model.trim="store.employer"/>
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
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      v-model.trim="store.begginningDate" @input="updateInputValues"/>
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
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      v-model.trim="store.endData" @input="updateInputValues"


                  />
                </div>
              </div>

            </div>

            <div class="flex flex-wrap">

              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">აღწერა</label>
              <textarea required id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-white-500"
                        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" v-model.trim="store.description"
                        @input="updateInputValues"></textarea>


            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            <div class="flex flex-wrap  "></div>
            <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex mb-24">
              მეტი გამოცდილების დამატება
            </button>
            </div>

            <div class="flex justify-between ">
              <router-link to="/personalinfo"
                           class="bg-violet-600 hover:bg-violet-800 text-white font-bold py-1 px-4 rounded flex">
                უკან
              </router-link>
              <button type="submit"
                           class="bg-violet-600 hover:bg-violet-800 text-white font-bold py-1 px-4 rounded flex">
                შემდეგი
              </button>

            </div>


          </form>
        </div>
      </div>


    </div>
  <div class="relative">
           <div class="grid  grid-end-2">
             <img src="/src/assets/img/SmallCornerLogo.png" alt="SmallLogo" class="w-10 h-10 absolute bottom-48 left-8">
             <div class="flex flex-col mt-10 pl-10" id="input">

               <p class="flex align-center mb-2 text-lg text-red-500 "> {{ store.name }} {{ store.surname }} </p>
               <div class="absolute top-8 right-20">
                 <img :src="store.image" id="selected-image" class="rounded-full   w-44 h-44 " v-if="store.image"/>
               </div>
               <div class="flex align-center mb-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6 mr-2">
                   <path stroke-linecap="round"
                         d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                 </svg>
                 <p>{{ store.email }}</p>
               </div>

               <div class="flex align-center mb2">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mb-2 mr-2">
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

               <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">

               <div class="flex flex-col">
                 <p class="mb-6 text-lg text-red-500 flex justify-start">გამოცდილება</p>
                 <p class="flex justify-start">{{ store.position }}</p>
                 <p class="flex justify-start">{{ store.employer }}</p>

                 <p class="flex align-center">{{ store.begginningDate }} {{ store.endData }}</p>

                 <p class="flex justify-start"> {{ store.description }}</p>

               </div>


             </div>


           </div>
  </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import {GlobalStore} from "../store/Global.js";
import {computed, onMounted, ref, watch} from "vue";
import router from "../router/index.js";
import axios from "axios";
const store  = GlobalStore()

const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};


onMounted(() => {
  const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
  if (storedInputValues) {
    store.name = storedInputValues.name;
    store.surname = storedInputValues.surname;
    store.email = storedInputValues.email;
    store.phone = storedInputValues.phone;
    store.about = storedInputValues.about;
    store.position = storedInputValues.position;
    store.employer = storedInputValues.employer;
    store.begginningDate = storedInputValues.begginningDate;
    store.endData = storedInputValues.endData;
    store.description = storedInputValues.description;
    store.image = storedInputValues.image

  }
})

const isValidPosition = computed(() => {
  return store.position.replace(/\s/g, '').length >= 2;
})
const isValidEmployer = computed(() => {
  return store.employer.replace(/\s/g, '').length >= 2;
})


watch(() => [store.name, store.surname, store.email, store.phone, store.about, store.description, store.endData, store.begginningDate, store.position, store.employer,store.image], () => {
  localStorage.setItem("inputValues", JSON.stringify(store));
});

const updateInputValues = () => {
  localStorage.setItem('inputValues', JSON.stringify({
    surname: store.surname,
    name: store.name,
    email: store.email,
    about: store.about,
    phone: store.phone,
    position: store.position,
    description: store.description,
    endData: store.endData,
    begginningDate: store.begginningDate,
    endDate: store.endData,
    employer: store.employer,
    image: store.image


  }));
};
const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')
  store.reset()
}
const isFormValid = computed(() => {
  return isValidEmployer.value && isValidPosition.value ;
});

const submit = () => {
  if (isFormValid.value) {
    router.push({ path :'/education'})
  }

};

</script>

<style scoped>

#GridStart{
  background-color: #f9f9f9;
  padding:10px ;
  padding-bottom: 15rem;

}

#rem{
  padding: 1rem;
}
p{
  text-align: start;
}
</style>