<script setup lang="ts">
import Order from '../components/Order.vue'
// defineProps({
//   title: String,
//   description: String,
//   image: String,
// })
</script>

<template>
  <div class="mt-5 ml-5 text-2xl text-white">Мои заказы</div>
  <section class="w-full h-full flex flex-col gap-5 mb-5">
    <Order />
    <Order />
    <Order />
  </section>
</template>


<!-- <template>
  <div class="title">Мои заказы</div>
  <section>
    <Order />
    <Order />
    <Order />
  </section>
</template>

<style scoped lang="scss">
.title {
  margin: 20px 0px 0px 20px;
  font-size: 25px;
  color: white;
}
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}
</style> -->
