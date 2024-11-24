<script setup lang="ts">
import Order from '../components/Order.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

type Goods = [
  {
    id: number
    name: string | null
    quantity: string | null
    price: string | null
  },
]

type Props = {
  user: { fullName: string | null; email: string | null }
  nameUser: string | null
  tel: string | null
  delivery: string | null
  id: number
  goods: Goods
  total_price: number | null
}

// const products = ref<TypeProducts | []>([])
const orders = ref<Props[] | []>([])
const isLoading = ref(false)

//Сделать фильтрацию по id авторизованного пользователя
onMounted(async () => {
  isLoading.value = true
  try {
    const result = await axios.get('https://5063b1fd5cab69bc.mokky.dev/orders?_relations=users')
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
  <div class="mt-5 ml-5 text-2xl text-white">Мои заказы</div>
  <div v-if="orders.length === 0" class="mt-5 ml-5 text-2xl text-white">У вас нет заказов</div>
  <section class="w-full h-full flex flex-col gap-5 mb-5 overflow-y-auto">
    <Order
      v-for="order in orders"
      :key="order.id"
      :fullName="order.user?.fullName"
      :nameUser="order.nameUser"
      :tel="order?.tel"
      :email="order.user?.email"
      :delivery="order.delivery"
      :id="order?.id"
      :goods="order?.goods"
      :totalPrice="order?.total_price"
    />
    <div class="flex justify-center max-w-[500px]">
      <img v-if="orders.length > 0" src="/basket_full.webp" alt="Info image" class="size-48 rounded-3xl" />
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
