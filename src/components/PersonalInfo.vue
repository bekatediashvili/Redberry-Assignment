<template>

  <div id="rem" class="grid grid-cols-2 gap-2 ">
    <div id="gridStart" class="grid grid-start-1  ">
      <Header header-title="პირადი ინფო" current-page="1/3" @clear-local-storage="clearLocalStorage"></Header>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">
      <form @submit.prevent="submit" >

        <div class="mt-6">
          <div class="flex mb-4 justify-between">

            <div id="input ">
              <div class="relative">
                <div class="absolute inset-y-0 right-4  top-8 flex items-center pl-3 pointer-events-none">
                  <template v-if="isValidName">
                    <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                         class="w-6 h-6">
                      <path fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd"/>
                    </svg>

                  </template>
                  <template v-else-if="isValidName === false && isFocused">
                    <div id="notValid" class="absolute left-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                      </svg>
                    </div>
                  </template>
                </div>


                <label for="name" class=" flex justify-start mb-1 font-bold">სახელი</label>
                <input

                    class=" flex  p-20 px-8 py-2 mr-2 border focus:outline-none rounded"
                    :class="{ 'border-red': isValidName === false && isFocused, 'border-green': isValidName === true && isFocused, 'border-black': isValidName === null || !isFocused }"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    v-model.trim="store.name"

                    placeholder="ანზორა"
                    required
                />
              </div>


              <div class="text-stone-700 text-sm flex justify-start "> მინიმუმ 2 ასო, ქართული ასოები</div>
            </div>


            <div id="input">
              <div class="relative">
                <div class="absolute inset-y-0 right-4  top-8 flex items-center pl-3 pointer-events-none">
                  <template v-if="isValidSurname">
                    <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                         class="w-6 h-6">
                      <path fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd"/>
                    </svg>

                  </template>
                  <template v-else-if="isValidSurname === false && isFocused">
                    <div id="notValid" class="absolute left-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                      </svg>
                    </div>
                  </template>
                </div>

                <label for="lastname" class=" flex justify-start mb-1"> გვარი</label>
                <input
                    class="flex p-20 px-8 py-2 mr-2 border focus:outline-none rounded"
                    :class="{ 'border-red': isValidSurname === false && isFocused, 'border-green': isValidSurname === true && isFocused, 'border-black': isValidSurname === null || !isFocused }"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    v-model.trim="store.surname"
                    placeholder="გვარი"
                    required
                />
              </div>
              <div class="text-stone-700 text-sm flex justify-start">მინიმუმ 2 ასო, ქართული ასოები</div>
            </div>

          </div>
          <div class="flex items-center mb-6">
            <p class="text-gray-700 mr-2">პირადი ფოტოს ატვირთვა </p>
            <label for="image-input" class="btn bg-blue text-white rounded-sm px-4 py-1">
              ატვირთვა
            </label>
            <input type="file" id="image-input" class="hidden" @change="handleFileInpute"/>
          </div>


          <div class="mb-4" id="input">
            <label for="lastname" class=" flex justify-start mb-1 mt-4 "> ჩემ შესახებ (არასავალდებულო)</label>
            <textarea rows="4" class="w-full px-3 py-2 break-all   border focus:outline-none rounded"
                      placeholder="ზოგადი ინფო შენს შესახებბ " v-model.trim="store.about"
                      @input="updateInputValues"></textarea>
          </div>
        </div>


        <div class="flex flex-col  mb-6" id="input">
          <div class="relative">
            <div class="absolute inset-y-0 right-4  top-9 pl-3 pointer-events-none">
              <template v-if="isValidEmail">
                <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                     class="w-6 h-6">
                  <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"/>
                </svg>

              </template>
              <template v-else-if="isValidEmail === false && isFocused">
                <div id="notValid" class="absolute left-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                  </svg>
                </div>
              </template>
            </div>
          <label for="email" class=" flex justify-start mb-1"> ელ.ფოსტა</label>
          <input
                type="email"
              class="flex p-20 px-8 py-2 mr-2 border w-full focus:outline-none rounded "
              required
              :class="{ 'border-red': isValidEmail === false && isFocused, 'border-green': isValidEmail === true && isFocused, 'border-black': isValidEmail === null || !isFocused }"
              @focus="handleFocus"
              @blur="handleBlur"
              v-model.trim="store.email"
              placeholder="anzor666@redberry.com"
          />
          </div>
          <div class="text-stone-700 text-sm flex justify-start mb-4">უნდა მთავრდებოდეს @redberry.ge</div>

          <div class="relative">
            <div class="absolute inset-y-0 right-4  top-9 pl-3 pointer-events-none">
              <template v-if="isValidPhone">
                <svg id="check-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                     class="w-6 h-6">
                  <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"/>
                </svg>

              </template>
              <template v-else-if="isValidPhone === false && isFocused">
                <div id="notValid" class="absolute left-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                  </svg>
                </div>
              </template>
            </div>
          <label for="number" class=" flex justify-start mb-1"> მობილურის ნომერი</label>
          <input

              class="flex p-20 px-8 py-2 mr-2 w-full border focus:outline-none rounded "
              required
              :class="{ 'border-red': isValidPhone === false && isFocused, 'border-green': isValidPhone === true && isFocused, 'border-black': isValidPhone === null || !isFocused }"
              @focus="handleFocus"
              @blur="handleBlur"
              v-model.trim="store.phone"
              placeholder="+995555123456"
          />
            </div>
          <div class="text-stone-700 text-sm flex justify-start">უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </div>

        </div>


        <div class="flex justify-end  ">

          <button type="submit" class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded  ">
            შემდეგი
          </button>

        </div>
      </form>
    </div>

    <div id="relative" class="relative">
      <div id="grindEnd" class="grid grid-end-2">
        <img src="/src/assets/img/SmallCornerLogo.png" alt="SmallLogo" class="w-10 h-10 absolute bottom-48 left-8">

        <div class="h-20">
          <div class="flex flex-col mt-10 pl-10" id="input">

            <p  class="flex align-center mb-2 text-lg text-[#F93B1D] font-bold  leading-10 text-3xl not-italic"> {{ store.name }} {{ store.surname }} </p>
            <div class="absolute right-1/4  top-10">
              <img :src="store.image" id="selected-image" class="rounded-full   w-44 h-44 " v-if="store.image"/>
            </div>
            <div class="flex align-center mb-2" v-if="isValidEmail">
              <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
              </svg>
              <p>{{ store.email }}</p>
            </div>

            <div class="flex align-center mb2" v-if="isValidPhone">
              <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mb-2 mr-2">
                <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
              </svg>
              <p>{{ store.phone }}</p>

            </div>
            <div class="flex flex-col break-all" v-if="store.about">
              <p class="mb-2 text-lg text-[#F93B1D] flex justify-start font-bold  leading-10 text-3xl">ჩემ შესახებ</p>
              <p class="flex justify-start mb-4 ">{{ store.about }}</p>

            </div>

            <hr class="h-px my-8 color-grey border-0 dark:bg-grey mb-10">
          </div>
        </div>

      </div>
    </div>
  </div>


</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import Header from "./Header.vue";
import {GlobalStore} from "../store/Global.js";
import router from "../router/index.js";
import SVG from "./SVG.vue";

// store

const store = GlobalStore()


//ref
const isFocused = ref(true);


const isValidName = computed(() => {
  if (store.name.length === 0) return null;
  return /^[ა-ჰ]+$/.test(store.name) && store.name.length >= 2;
});

const isValidSurname = computed(() => {
  if (store.surname.length === 0) return null;
  return /^[ა-ჰ]+$/.test(store.surname) && store.surname.length >= 2;
});
const isValidEmail = computed(() => {
  if (store.email.length === 0) return null;
  return store.email.endsWith('@redberry.ge') && /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(store.email);
})

const isValidPhone = computed(() => {
  if (store.phone.length === 0) return null;
  return /^\+?(995|5)([0-9]{2})([0-9]{3})([0-9]{2})([0-9]{2})$/.test(store.phone.replace(/\s/g, ''))
})
const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
// Handle image input
const handleFileInpute = event => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file)

  reader.addEventListener("load", () => {
    store.image = reader.result;
  });
};

// Stores Data in LocalStorage
onMounted(() => {
  store.restoreFromLocalStorage()
})
// watches for changes
watch(() => [store.name, store.surname, store.email, store.phone, store.about, store.image], () => {
  localStorage.setItem("inputValues", JSON.stringify(store));
}, {deep: true});

const updateInputValues = () => {
  store.updateLocalStorage();
};

// On click clears everything from LocalStorage
const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')
  store.reset()
}
//
// }


// checking for validation
const isFormValid = computed(() => {
  return isValidName.value && isValidSurname.value && isValidEmail.value && isValidPhone.value;
});


const submit = () => {
  if (isFormValid.value) {
    router.push({path: '/experience'})
  }
};

</script>

<style scoped>

#gridStart {
  background-color: #f9f9f9;
  padding: 10px;
  padding-bottom: 15rem;
}

#grindEnd {
  background-color: white;
}

#input {
  margin-bottom: 2rem;
}

/*#rem {*/
/*  padding: 1rem;*/


/*}*/

#check-svg {
  color: green;
}

#svg{
  color:#898989;
}


</style>