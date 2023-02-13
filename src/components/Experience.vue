<template>

  <div id="rem" class="grid grid-cols-2 gap-3 ">
    <div id="GridStart" class="grid grid-start-1">


      <Header header-title="გამოცდილება" current-page="2/3" @clear-local-storage="clearLocalStorage"></Header>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-10">
      <div class="flex  items-center justify-center  ">

        <div class="mx-auto w-full ">
          <div key="index" v-for="(formItems, index) in store.experiences">
            <experience-form :formItems="formItems"></experience-form>
          </div>


          <div class="flex flex-wrap  "></div>
          <button @click="addNewExperience"
                  class="bg-blue hover:bg-blue text-white font-bold py-1 px-2 rounded flex mb-24">
            მეტი გამოცდილების დამატება
          </button>


          <div class="flex justify-between ">
            <router-link to="/personalinfo"
                         class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
              უკან
            </router-link>
            <button @click="nextPage"
                    class="bg-violet hover:bg-violet text-white font-bold py-1 px-4 rounded flex">
              შემდეგი
            </button>

          </div>


        </div>
      </div>


    </div>
    <RightSidebar></RightSidebar>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import {GlobalStore} from "../store/Global.js";
import {computed, onMounted, ref, watch} from "vue";
import router from "../router/index.js";
import axios from "axios";
import ExperienceForm from "./ExperienceForm.vue";
import RightSidebar from "./RightSidebar.vue";

const store = GlobalStore()

onMounted(() => {
  store.restoreFromLocalStorage()
})

watch(() => [store.name, store.surname, store.email, store.phone, store.about, store.experiences, store.image], () => {
  store.updateLocalStorage()
}, {deep: true});


const clearLocalStorage = () => {
  localStorage.removeItem('inputValues')
  store.reset()
}

const addNewExperience = () => {
  const experiencesLength = store.experiences.length
  if (store.experiences[experiencesLength - 1].isFormValid) {
    const emptyExperience = store.getDefaultState.experiences[0]
    store.experiences.push({...emptyExperience})
  }
}

function nextPage() {
  let isValid = true;
  store.experiences.forEach((el) => {
    if (!el.isFormValid)
      isValid = false
  })
  if (isValid)
    router.push('/education')
}


</script>

<style scoped>

#GridStart {
  background-color: #f9f9f9;
  padding: 10px;
  padding-bottom: 15rem;

}

/*#rem {*/
/*  padding: 1rem;*/
/*}*/

p {
  text-align: start;
}


#svg {
  color: #898989;
}
</style>