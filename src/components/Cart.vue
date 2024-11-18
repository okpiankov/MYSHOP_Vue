<script setup lang="ts">
import { CircleX } from 'lucide-vue-next'
import { inject, reactive, ref, watch } from 'vue'
import CartItem from './CartItem.vue'
import InfoBlock from './InfoBlock.vue'
import { useCartStore } from '../store/cart'

const drawerCart = inject('drawerCart')

type TypeCart = {
  id: number
  name: string
  price: string
  image: string
  description: string
  quantity: number
}

const itemsCart = ref<TypeCart[]>([])
const cartStore = useCartStore()

//Подписка на товары из Pinia
const arrayCarts = cartStore.$state
console.log(arrayCarts)

itemsCart.value = arrayCarts

// Как в react через useEffect аналог watch делать не надо!
// watch(arrayCarts, () => {
//   itemsCart.value = arrayCarts
// })
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10 cursor-pointer"
    @click="drawerCart = !drawerCart"
  ></div>
  <section
    class="w-[440px] h-full bg-red-200 fixed top-0 right-0 z-20 flex flex-col pt-12 pl-5 pr-5 gap-5 text-xl"
  >
    <div class="flex items-center gap-20 mb-5 text-xl font-extrabold">
      <CircleX @click="drawerCart = !drawerCart" />
      <div>КОРЗИНА</div>
    </div>
    <CartItem
      v-for="item in itemsCart"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :image="item.image"
      :description="item.description"
      :quantity="item.quantity"
      :id="item.id"
    />
    <!-- <CartItem /> -->

    <div v-if="itemsCart.length === 0" class="gap-5 text-[22px]">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте вашу мечту"
        image="/basket_empty.jpg"
      />

      <!-- <InfoBlock
        title="Заказ оформлен!"
        :description="`Ваш заказ ${id} скоро будет передан курьерской службе`"
        image="/basket_full.webp"
      /> -->
    </div>

    <div class="flex gap-5 text-[22px]">
      <span> Итого:</span>
      <b> totalPrice руб.</b>
    </div>
    <button
      class="w-ful h-[50px] bg-red-300 border-2 border-white border-solid rounded-3xl cursor-pointer text-white text-2xl hover:border-black hover:text-black"
    >
      Оформить заказ
    </button>
  </section>
</template>

<!-- <template>
  <div class="overlay" @click="drawerCart = !drawerCart"></div>
  <section>
    <div class="cart">
      <CircleX @click="drawerCart = !drawerCart" />
      <div>КОРЗИНА</div>
    </div>
    <CartItem />
    <CartItem />

    <div class="InfoBlock">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте вашу мечту"
        image="/basket_empty.jpg"
      />

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
  width: 440px;
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
  cursor: pointer;
}
button {
  width: 100%;
  height: 50px;
  background-color: #fca3a3;
  border: white 2px solid;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: black;
    border-color: black;
  }
}
</style> -->
