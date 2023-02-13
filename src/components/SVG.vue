<template>
  <div v-if="props.showPopUp" class="absolute top-6 right-14 p-5 bg-slate rounded-lg shadow-2xl w-64 ">
    <div class="absolute right-2 top-0">
      <!-- Add the X button to close the pop-up -->
      <button @click="showPopUp = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Add the congratulations svg -->
    <img class="p-3" src="/src/assets/img/succesfully_sent.png" alt="Congratulations">
  </div>
</template>


<script setup>

const props = defineProps(['showPopUp'])
</script>

<style scoped>

</style>