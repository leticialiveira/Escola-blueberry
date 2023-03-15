<script setup>
import HeaderVue from './components/HeaderVue.vue'
import FormVue from './components/Form.vue'
import GalleryVue from './components/Gallery.vue'
</script>

<template>
  <img src="./assets/icon/android-chrome-192x192.png" alt="">
  <header>
    <HeaderVue />
  </header>
  <div class="main">
    <FormVue />
    <GalleryVue />
  </div>
</template>

<style scoped>

img {
  border-radius: 50%;
  margin-bottom: 50px;
}
  .main {
    width: auto;
    height: auto;
    color: aliceblue;
    gap: 100px;
    display: flex;
    flex-direction: column;
    width: 50vw;
  }

  header {
    width: 100%;
    height: auto;
    background-color: #32279B;
    padding: 20px ;
    border-radius: 5px;
    margin-bottom: 50px;
}
</style>