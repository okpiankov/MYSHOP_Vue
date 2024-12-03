<script setup lang="ts">

const props = defineProps(['user', 'id', 'goods', 'totalPrice', 'tel', 'pay', 'delivery'])
</script>

<template>
  <div class="h-auto max-w-[500px] flex flex-col gap-1 s:max-w-[310px]">
    <div class="description-order">Заказ номер: {{ props.id }}</div>
    <div class="description-order">
      <div class="mr-5">Товары:</div>
      <ul>
        <li v-for="item in goods" :key="item.id">
          <b> {{ item.name }}</b>
        </li>
      </ul>
    </div>

    <div class="description-order">К оплате: {{ props.totalPrice }} руб.</div>
    <div class="description-order">Доставка: {{ props.delivery }}</div>
    <div class="description-order">
      Покупатель: <b> {{ props.user.fullName }} тел:
      {{ props.tel && props.tel ? props.tel : props.user.tel }}</b>
    </div>
    <div
      class="min-h-[30px] w-full bg-white border border-white border-solid rounded-[15px] flex flex-row justify-between items-center pl-5 text-lg status"
    >
      Статус: На оплате!
    </div>
  </div>
</template>

<!-- <template>
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
</style> -->
