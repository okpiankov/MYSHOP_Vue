<script setup lang="ts">
import Order from '../components/Order.vue'
// defineProps({
//   title: String,
//   description: String,
//   image: String,
// })
</script>

<template>
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
</style>
