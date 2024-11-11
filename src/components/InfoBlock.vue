<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String,
})
</script>

<template>
  <div>
    <img :src="image" alt="Info image" />
    <div>{{ title }}</div>
    <div>{{ description }}</div>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  gap: 30px;
  img {
    height: 200px;
    width: 200px;
    border-radius: 35px;
  }
}
</style>
