<script setup lang="ts">
import CartItem from '../components/CartItem.vue'
import InfoBlock from '../components/InfoBlock.vue'
import { useCartStore } from '../store/cart'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import axios from 'axios'

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
const authStore = useAuthStore()

//Подписка на товары из Pinia
const arrayCarts = cartStore.$state
console.log(arrayCarts)
itemsCart.value = arrayCarts

const handlelQuantityClick = (id, action) => {
  //Делаю копию массива
  // const newArray = [...items];
  const newArray = itemsCart.value.map((item) => ({ ...item }))
  // console.log(newArrayInCart);

  //Достаю объект из массива
  const product = newArray.find((item) => item.id === id)
  // console.log(product)

  //Обращаюсь в объекте к полю quantity
  product.quantity = action === 'add' ? product.quantity + 1 : product.quantity - 1
  if (product.quantity <= 0) {
    return
  }
  // Записываю копию массива в Pinia
  cartStore.set(newArray)
  itemsCart.value = newArray
}

// //Логика подсчета общей стоимости с учетом quantity
const arrayPrices = itemsCart.value.map((item) => item.price * item.quantity).map(parseFloat)
console.log(arrayPrices)
const totalPrice = arrayPrices.reduce((sum, current) => sum + current, 0)
console.log(totalPrice)

const isLoading = ref(false)
const formData = reactive({
  nameUser: authStore.$state.data.fullName,
  tel: '',
  pay: '',
  delivery: '',
})

//Формирую массив из объектов в которых присутствуют только необходимые поля
const arrayProducts = itemsCart.value.map((item) => ({
  id: item.id,
  name: item.name,
  quantity: item.quantity,
  price: item.price,
}))
// console.log(arrayProducts);
//arrayOrder(заказ) это объект не массив
const arrayOrder = {
  ...formData,
  total_price: totalPrice,
  user_id: authStore.$state.data.id,
  goods: [...arrayProducts],
}
console.log(arrayOrder)
const navigate = useRouter()
const orderSet = async () => {
  isLoading.value = true
  try {
    const result = await axios.post('https://5063b1fd5cab69bc.mokky.dev/orders', arrayOrder)
    // console.log(result.data)
  } catch (error) {
    console.log(error)
  } finally {
    // isLoading.value = false
    navigate.push('ordersCabinetPage')
  }
}
</script>

<template>
  <section class="w-full h-full flex flex-col gap-5 pb-5 text-xl overflow-y-auto">
    <div class="text-2xl text-white mt-5 ml-5">Моя корзина</div>
    <CartItem
      v-for="item in itemsCart"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :image="item.image"
      :description="item.description"
      :quantity="item.quantity"
      :id="item.id"
      @handlelDeleteClick="handlelDeleteClick"
      @handlelQuantityClick="handlelQuantityClick"
    />

    <div
      div
      v-if="itemsCart.length === 0"
      class="flex flex-col gap-5 text-white indent-5 text-[22px]"
    >
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

    <!-- <div class="flex gap-5 text-white indent-5 text-[22px]">
      <span> Итого:</span>
      <b> totalPrice руб.</b>
    </div>
    <button
      class="max-w-[370px] h-12 bg-red-300 border-2 border-white border-solid rounded-3xl cursor-pointer text-2xl hover:bg-white"
    >
      Оформить заказ
    </button> -->

    <!-- Карта оформления заказа  -->
    <div class="mb-4 max-w-[370px]">
      <div class="flex justify-start gap-4 text-[22px] text-white">
        <div>Итого:</div>
        <div>{{ totalPrice }} руб.</div>
      </div>
      <form @submit.prevent="" class="flex flex-col gap-3 mt-3">
        <input
          type="text"
          name="tel"
          v-model="formData.tel"
          placeholder="Введите телефон"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none pl-1"
        />

        <select
          name="pay"
          v-model="formData.pay"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none active-outline-color-red"
        >
          <option disabled value="">Выберите способ оплаты:</option>
          <option>Карта</option>
          <option>Наличные</option>
          <option>Счет</option>
        </select>

        <select
          name="delivery"
          v-model="formData.delivery"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none"
        >
          <option disabled value="">Выберите способ доставки:</option>
          <option>Самовывоз</option>
          <option>СДЭК</option>
        </select>
        <button
          @click="orderSet()"
          class="w-ful h-[50px] bg-red-300 border-2 border-white border-solid rounded-3xl cursor-pointer text-white text-2xl hover:border-black hover:text-black"
        >
          Оформить заказ
        </button>
      </form>
    </div>
  </section>
</template>

<!-- <template>
  <section>
    <div class="title">Мои заказы</div>
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
    // color: white;
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;
    &:hover {
      color: black;
      border-color: black;
      background-color:white;
    }
  }
}
</style> -->
