<script setup lang="ts">
import { Plus, Minus, Trash2 } from 'lucide-vue-next'
// defineProps({
//   title: String,
//   description: String,
//   image: String,
// })
</script>

<template>
  <div class="card">
    <img src="/test.jpg" alt="image" />

    <div class="info">
      <b>Кольцо из золота с бриллиантами и рубинами Артикул: 4010683</b>
      <div>Количество: 1 шт.</div>
      <div>Цена:</div>
    </div>

    <div class="icons">
      <Trash2 />
      <Minus />
      <Plus />
    </div>

    <!-- Почему не применяется класс аналогичному блоку?: -->
    <!-- <div сlass="icons">
      <Trash2 />
      <Minus />
      <Plus />
    </div> -->

  </div>
</template>

<style scoped lang="scss">
.card {
  height: 130px;
  max-width: 500px;
  background-color: #fca3a3;
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 17px;

  img {
    height: 120px;
    width: 120px;
    border-radius: 20px;
    align-self: center;
    margin-left: 5px;
    // border: 1px solid #fca3a3;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .icons {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // margin-right: 10px;
    // background-color: white;
  }
}
</style>
