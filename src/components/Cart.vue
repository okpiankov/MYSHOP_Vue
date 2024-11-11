<script setup lang="ts">
import { CircleX } from 'lucide-vue-next'
import { inject } from 'vue'
import InfoBlock from './InfoBlock.vue'
import CartItem from './CartItem.vue'

const drawerCart = inject('drawerCart')

</script>

<template>
  <div class="overlay" @click="drawerCart = !drawerCart"></div>
  <section>
    <div class="cart">
      <CircleX @click="drawerCart = !drawerCart" />
      <div>КОРЗИНА</div>
    </div>
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
  width: 370px;
  height: 100%;
  background-color: #ffc4c4;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 48px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 22;
  font-size: 20px;

  .cart {
    display: flex;
    align-items: center;
    gap: 80px;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .totalPrice {
    display: flex;
    gap: 20px;
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: 12;
}
button {
  width: 100%;
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
</style>
