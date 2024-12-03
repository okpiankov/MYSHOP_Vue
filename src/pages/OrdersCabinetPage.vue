<script setup lang="ts">
import Order from '../components/Order.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../store/auth'

type TypeGoods = [
  {
    id: number
    name: string | null
    quantity: string | null
    price: string | null
  },
]
type TypeOrder = {
  user: { fullName: string | null; email: string | null; tel: string | null }
  tel: string | null
  delivery: string | null
  id: number
  goods: TypeGoods
  total_price: number | null
  pay: string | null
  user_id: number
}
const authStore = useAuthStore()

const orders = ref<TypeOrder[] | []>([])
const isLoading = ref(false)

//Сделать фильтрацию по id авторизованного пользователя
onMounted(async () => {
  isLoading.value = true
  try {
    // Связываю покупателя именно с его заказами через orders?_relations=users  &  user_id
    const result = await axios.get(
      `https://5063b1fd5cab69bc.mokky.dev/orders?_relations=users&user_id=${authStore.$state.data.id}`,
    )
    console.log(result.data)
    orders.value = result.data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="mt-5 ml-5 text-2xl text-white s:text-center">Мои заказы</div>
  <div v-if="isLoading" class="text-[22px] text-white ml-5">Загрузка...</div>
  <div v-else-if="orders.length === 0" class="mt-5 ml-5 text-2xl text-white">У вас нет заказов</div>
  <section class="w-full h-full flex flex-col gap-5 mb-5 overflow-y-auto s:items-center">
    <Order
      v-for="order in orders"
      :key="order.id"
      :user="order?.user"
      :tel="order?.tel"
      :pay="order?.pay"
      :delivery="order?.delivery"
      :id="order?.id"
      :goods="order?.goods"
      :totalPrice="order?.total_price"
    />
    <div class="flex justify-center max-w-[500px]">
      <img
        v-if="orders.length > 0"
        src="/basket_full.webp"
        alt="Info image"
        class="size-48 rounded-3xl"
      />
    </div>
  </section>
</template>

<!-- <template>
  <div class="title">Мои заказы</div>
  <section>
    <Order />
    <Order />
    <Order />
  </section>
</template>

<style scoped lang="scss">
.title {
  margin: 20px 0px 0px 20px;
  font-size: 25px;
  color: white;
}
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}
</style> -->
