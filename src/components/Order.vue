<script setup lang="ts">
// defineProps({
//   title: String,
//   description: String,
//   image: String,
// })
</script>

<template>
  <div class="container">
    <div class="box">Заказ номер: ID</div>
    <div class="box">
      <div>Купленные товары:</div>
      <ul>
        <li>Кольцо из белого золота с бриллиантом Артикул: 901013246</li>
        <li>Кольцо из белого золота с бриллиантом Артикул: 901013246</li>
        <li>Кольцо из белого золота с бриллиантом Артикул: 901013246</li>
      </ul>
    </div>

    <div class="box">Общая стоимость: руб.</div>
    <div class="box">Доставка: СДЭК</div>
    <div class="box">Покупатель:</div>
    <div class="box status">Статус: В пути!</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  .box {
    min-height: 30px;
    width: 100%;
    background-color: #fca3a3;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    font-size: 17px;
  }
  .status {
    background-color: white;
  }
}

ul {
  list-style: none;
}
</style>
