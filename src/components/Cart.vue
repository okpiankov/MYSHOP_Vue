<script setup lang="ts">
import { CircleX } from 'lucide-vue-next'
import { inject, reactive, ref, watch } from 'vue'
import CartItem from './CartItem.vue'
import InfoBlock from './InfoBlock.vue'
import { useCartStore } from '../store/cart'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

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

//Подписка на товары из Pinia
const cartStore = useCartStore()
itemsCart.value = cartStore.$state

// watch(cartStore.$state, () => {
//   if (!cartStore.$state) {
//       return;
//     }
//     itemsCart.value = cartStore.$state
//   }, {deep: true})

// // Функция удаления товара из корзины и Pinia
//   const handlelDeleteClick = id => {
//     // const cartStore = useCartStore()
//     // const arrayItem = cartStore.$state
//     const arrayItem = itemsCart.value.map(item => ({ ...item }));
//     console.log(JSON.parse(JSON.stringify(arrayItem)))

//     //получаю новый массив исключающий объект по id
//     const newArray = arrayItem.filter(item => item.id !== id);
//     console.log(JSON.parse(JSON.stringify(newArray)))

//     //записываю новый массив товаров в Pinia после каждого удаления товара
//     cartStore.set(newArray);
//     itemsCart.value = newArray;
//   };

// Функция увеличения и уменьшения колличества товара в корзине и Pinia
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
const arrayPrices = itemsCart.value.map(item => item.price * item.quantity).map(parseFloat);
console.log(arrayPrices);
const totalPrice = arrayPrices.reduce((sum, current) => sum + current, 0);
console.log(totalPrice)

const isLoading = ref(false)
const formData = reactive({
  nameUser: '',
  tel: '',
  // pay: '',
  // delivery: '',
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
  // user_id: useSelector(getUser)?.data.id,
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
    navigate.push('/ordersPage')
  }
}
// cartStore.clear()
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10 cursor-pointer"
    @click="drawerCart = !drawerCart"
  ></div>
  <section
    class="showRight w-[440px] h-full bg-red-200 fixed top-0 right-0 z-20 flex flex-col pt-12 pl-5 pr-5 gap-5 text-xl overflow-y-auto"
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
      @handlelDeleteClick="handlelDeleteClick"
      @handlelQuantityClick="handlelQuantityClick"
    />

    <div v-if="itemsCart.length === 0" class="gap-5 text-[22px]">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте вашу мечту"
        image="/basket_empty.jpg"
      />
    </div>

    <!-- Карта оформления заказа  -->
    <div class="mb-4">
      <div class="flex justify-start gap-4 text-[22px]">
        <div>Итого:</div>
        <div>{{ totalPrice }} руб.</div>
      </div>
      <form @submit.prevent="" class="flex flex-col gap-3 bg-red-200 mt-3">
        <input
          v-mode="formData.nameUser"
          type="text"
          placeholder="Введите ваше имя"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none pl-1"
        />

        <input
          v-model="formData.tel"
          type="text"
          placeholder="Введите ваш телефон"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none pl-1"
        />

        <!-- <select v-model="formData.pay"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none active-outline-color-red"
        >
          <option disabled value="">Выберите способ оплаты:</option>
          <option>Карта</option>
          <option>Наличные</option>
          <option>Счет</option>
        </select>

        <select
          v-model="formData.delivery"
          class="bg-red-300 h-[40px] border-2 border-white border-solid outline-none"
        >
          <option disabled value="">Выберите способ доставки:</option>
          <option>Самовывоз</option>
          <option>СДЭК</option>
        </select> -->
        <button
          @click="orderSet(); drawerCart = !drawerCart"
          type="submit"
          class="w-ful h-[50px] bg-red-300 border-2 border-white border-solid rounded-3xl cursor-pointer text-white text-2xl hover:border-black hover:text-black"
        >
          <!-- <RouterLink to="/orderPageAllUsers">Оформить заказ</RouterLink> -->
          Оформить заказ
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.showRight {
  position: fixed;
  animation: showRight 0.8s;
  transition: animation 0.5s ease-in-out;
  z-index: 31;
  }
  @keyframes showRight {
  from {right:-100%;}
  to {right:0;}
  }
</style>

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

<!-- <div class="flex gap-5 text-[22px]">
      <span> Итого:</span>
      <b> {{ result }} руб.</b>
    </div>
    <button
      class="w-ful h-[50px] bg-red-300 border-2 border-white border-solid rounded-3xl cursor-pointer text-white text-2xl hover:border-black hover:text-black"
    >
      Оформить заказ
    </button> -->
