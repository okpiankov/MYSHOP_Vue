<script setup lang="ts"></script>

<template>
  <section>
    <!-- <h2>Блог</h2> -->
     <div class="article_1"></div>
     <div class="article_2"></div>
     <div class="article_1"></div>
     <div class="article_2"></div>
     <div class="article_1"></div>
     <div class="article_2"></div>
     <div class="article_1"></div>
     <div class="article_2"></div>
  </section>
</template>

<style scoped lang="scss">
section {
  min-height: 800px;
  width: 100%;
  border-radius: 40px;
  
  background-color: black;
  // display: flex;
  // justify-content: center;
  // h2 {
  //   color: white;
  // }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  padding: 20px;


  .article_1 {
    height: 450px;
    width: 100%;
    border: white 2px solid;
    border-radius: 90px;
    grid-row: span 3;
   
}
.article_2 {
    height: 300px;
    width: 100%;
    border: red 2px solid;
    border-radius: 60px;
    grid-row: span 2;
}
}
</style>
