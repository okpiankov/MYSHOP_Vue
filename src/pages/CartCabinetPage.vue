<script setup lang="ts">
import CartItem from '../components/CartItem.vue'
import InfoBlock from '../components/InfoBlock.vue'
import { useCartStore } from '../store/cart'
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import axios from 'axios'
import { storeToRefs } from 'pinia'

type TypeCart = {
  id: number
  name: string
  price: string
  image: string
  description: string
  quantity: number
} 

const itemsCart = ref<TypeCart[]>([])
const authStore = useAuthStore()
const cartStore = useCartStore()
// const { cart, total_cost } = storeToRefs(cartStore)
// watch(
//  cart,
//   (cart) => {
//     itemsCart.value = cart
//   }, { deep: true, immediate: true }


//Подписка на товары из Pinia обязательно нужно возвращать стор () => cartStore.$state.cart и { immediate: true }
watch(
  () => cartStore.$state.cart,
  () => {
    itemsCart.value = cartStore.$state.cart
  },
  { immediate: true },
)

// Функция удаления товара из корзины и Pinia
// Почти вся логика функций удаления и изменения количества товара ушла в стор Pinia
const handlelDeleteClick = (id) => {
  cartStore.delete(id)
}

// Функция увеличения и уменьшения колличества товара в корзине и Pinia
const handlelQuantityClick = (id, action) => {
  if (action === 'add') {
    cartStore.increment(id)
  } else {
    cartStore.decrement(id)
  }
}

const isLoading = ref(false)
const formData = reactive({
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

const navigate = useRouter()
const orderSet = async () => {
  isLoading.value = true
  try {

    const arrayOrder = {
  // Указываю id user в таком формате: user_id для связи покупателя именно его заказами
  user_id: authStore.$state.data.id,
  ...formData,
  total_price: cartStore.total_cost,
  goods: [...arrayProducts],
}
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
  <section class="w-full h-full flex flex-col gap-5 pb-5 text-xl overflow-y-auto s:w-[310px] s:items-center">
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
      
      v-if="itemsCart.length === 0"
      class="flex flex-col gap-5 text-white indent-5 text-[22px]"
    >
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте вашу мечту"
        image="/basket_empty.jpg"
      />
      
    </div>

    <!-- Карта оформления заказа  -->
    <div class="mb-4 max-w-[370px] s:w-[310px]">
      <div class="flex justify-start gap-4 text-[22px] text-white">
        <div>Итого:</div>
        <div>{{ cartStore.total_cost }} руб.</div>
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
        <!-- @click="orderSet(); cartStore.clear()" -->
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


<!-- // const cartStore = useCartStore()


// //Подписка на товары из Pinia
// const arrayCarts = cartStore.$state.cart
// console.log(arrayCarts)
// itemsCart.value = arrayCarts

// // Функция удаления товара из корзины и Pinia
// const handlelDeleteClick = id => {
//     // const cartStore = useCartStore()
//     // const arrayItem = cartStore.$state
//     const arrayItem = itemsCart.value.map(item => ({ ...item }));
//     console.log(JSON.parse(JSON.stringify(arrayItem)))

//     //получаю новый массив исключающий объект по id
//     const newArray = arrayItem.filter(item => item.id !== id);
//     console.log(JSON.parse(JSON.stringify(newArray)))

//     //записываю новый массив товаров в Pinia после каждого удаления товара
//     // localStorage.setItem('itemCart', JSON.stringify(newArray));

//     cartStore.set(newArray);
    
//     itemsCart.value = newArray;
//   };

// const handlelQuantityClick = (id, action) => {
//   //Делаю копию массива
//   // const newArray = [...items];
//   const newArray = itemsCart.value.map((item) => ({ ...item }))
//   // console.log(newArrayInCart);

//   //Достаю объект из массива
//   const product = newArray.find((item) => item.id === id)
//   // console.log(product)

//   //Обращаюсь в объекте к полю quantity
//   product.quantity = action === 'add' ? product.quantity + 1 : product.quantity - 1
//   if (product.quantity <= 0) {
//     return
//   }
//   // Записываю копию массива в Pinia
//   cartStore.set(newArray)
//   itemsCart.value = newArray
// }

// // //Логика подсчета общей стоимости с учетом quantity
// const arrayPrices = itemsCart.value.map((item) => item.price * item.quantity).map(parseFloat)
// console.log(arrayPrices)
// const totalPrice = arrayPrices.reduce((sum, current) => sum + current, 0)
// console.log(totalPrice) -->

