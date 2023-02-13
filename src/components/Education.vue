<template>

  <div id="rem" class="grid grid-cols-2 gap-3 ">
    <div id="GridStart" class="grid grid-start-1">


      <Header current-page="3/3" header-title="განათლება" @clear-local-storage="clearLocalStorage"></Header>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">

      <div class="flex  items-center justify-center  ">

        <div class="mx-auto w-full ">
          <div key="index" v-for="(formItems, index) in store.educations">
            <education-form :formItems="formItems"></education-form>
          </div>
          <div class="flex flex-wrap  "></div>
          <button @click="addNewEducation" class="bg-blue text-white font-bold py-1 px-5 rounded flex mb-24">
            სხვა სასწავლებლის დამატება
          </button>


          <div class="flex justify-between ">
            <router-link to="/experience"
                         class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
              უკან
            </router-link>
            <button @click="nextPage" type="submit"
                    class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
              დასრულება
            </button>

          </div>

        </div>
      </div>
    </div>
    <RightSidebar></RightSidebar>
  </div>


</template>

<script setup>

import {computed, onMounted, ref, watch, toRaw} from "vue";
import axios from "axios";
import Header from "./Header.vue";
import {GlobalStore} from "../store/Global.js";
import router from "../router/index.js";
import SVG from "./SVG.vue";
import EducationForm from "./EducationForm.vue";
import RightSidebar from "./RightSidebar.vue";


const store = GlobalStore()

const isFocused = ref(false);

const select = ref('აირჩიეთ ხარისხი')

const showPopUp = ref(false)

select.value = store.educations[0].eduDegree


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
const addNewEducation = () => {
  const experiencesLength = store.educations.length
  if (store.educations[experiencesLength - 1].isFormValid) {
    const emptyEducation = store.getDefaultState.educations[0]
    store.educations.push({...emptyEducation})
  }
}
 function nextPage(){
   let isValid = true;
   store.educations.forEach((el) => {
     if (!el.isFormValid)
       isValid = false
   })
   if (isValid)
     router.push('/resume')
 }

const submit = () => {

  if (isFormValid.value) {

    router.push({path: '/resume'});
  }

}


</script>

<style scoped>
#rem {
  /*padding: 1rem;*/
}

#GridStart {
  background-color: #f9f9f9;
  padding: 1rem;
  padding-bottom: 5rem;

}

#svg {
  color: #898989;
}

#grindEnd {
  width: 822px;
  height: 1080px;
  left: 1098px;
}
</style>