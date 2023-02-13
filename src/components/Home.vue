<template>
  <body >
  <div id="content-body">
    <img src="/src/assets/img/redberry_logo.png" class="p-4">


    <hr class="h-px my-8 bg-grey border-0 dark:bg-grey">

    <div class="relative">

      <router-link to="/personalinfo"
                   class="inline-block py-2 px-24  text-xl  text-white bg-black px-7 hover:bg-black  rounded-md  mt-60  ">
        რეზიუმეს დამატება
      </router-link>
      <img src="/src/assets/img/redberry_round_logo.png" class="absolute left-2/4 top-3/4 ">

    </div>

  </div>

  </body>
</template>

<script setup>


</script>

<style scoped>
body {
  background-image: url("/src/assets/img/background_image.png");

  background-size: cover;


}
#content-body{
  padding: 2rem;

}


</style>