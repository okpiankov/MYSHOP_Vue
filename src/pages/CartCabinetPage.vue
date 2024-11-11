<script setup lang="ts">
import InfoBlock from '../components/InfoBlock.vue'
import CartItem from '../components/CartItem.vue'
</script>

<template>
  <section>
    <div class="title">Мои заказы</div>
    <CartItem />
    <CartItem />

    <div class="InfoBlock">
      <!-- <InfoBlock
        title="Корзина пустая"
        description="Добавьте вашу мечту"
        image="/basket_empty.jpg"
      /> -->

      <InfoBlock
        title="Заказ оформлен!"
        :description="`Ваш заказ ${id} скоро будет передан курьерской службе`"
        image="/basket_full.webp"
      />
    </div>

    <div class="totalPrice">
      <span> Итого:</span>
      <b> totalPrice руб.</b>
    </div>
    <button>Оформить заказ</button>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  padding-bottom: 20px;
  
  //   background-color: white;
  // color: white;

  .title {
    margin: 20px 0px 0px 20px;
    font-size: 25px;
    color: white;
  }
  .InfoBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    text-indent: 20px;
  }

  .totalPrice {
    display: flex;
    gap: 20px;
    color: white;
    text-indent: 20px;
  }
  button {
    max-width: 370px;
    height: 50px;
    background-color: #fca3a3;
    border: white 2px solid;
    border-radius: 20px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: black;
      border-color: black;
    }
  }
}
</style>
