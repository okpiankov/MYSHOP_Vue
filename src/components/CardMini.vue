<script setup lang="ts">
import { Gem } from 'lucide-vue-next'

type TypePhoto = {
  image: string
  name: string
  price: string
  description: string
}
const props = defineProps<TypePhoto>()
</script>

<template>
   
  <div class="card">
    <RouterLink to="/CardBig"> 
    <img :src="props.image" alt="picture" />
    <strong>{{ props.name }}</strong>
    </RouterLink>
    <div>Цена: {{ props.price }} руб.<Gem class="gem" /></div>
    <div class="description">{{ props.description }}</div>
  </div>

</template>

<style scoped lang="scss">
.card {
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  border: 1px solid #fca3a3;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  font-size: 17px;

  box-shadow: inset 0 20px 30px 15px #fca3a3;
  // box-shadow: 0 3px 0 #fca3a3;
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 20px 30px #fca3a3;
    transform: translateY(-5px);
  }

  img {
    border-radius: 20px;
    height: 250px;
    width: 300px;
    align-items: center;
    object-fit: cover;
    cursor: pointer;
  }
  .description {
    font-size: 16px;
  }
  .gem {
    width: 25px;
    height: 25px;
    color: rgb(237, 148, 247);
    position: relative;
    left: 140px;
    cursor: pointer;
    &:hover {
      scale: 1.7;
      color: rgb(230, 0, 255);
      rotate: 360deg;
      transition: rotate 0.38s ease-in-out;
    }
  }
}
</style>
