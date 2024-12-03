<script setup lang="ts">
// import products from '../service/data.ts'
import CardMini from '../components/CardMini.vue'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import { useCartStore } from '../store/cart'
import { useRoute } from 'vue-router'

type TypeProducts = [
  {
    image: string
    type: string
    name: string
    price: string
    description: string
    id: number
  },
]

const products = ref<TypeProducts | []>([])
const isLoading = ref(false)

//Обращаться здесь к useRoute().query.title не надо работать не будет!
//к  title  обращаться .query.title непосредственно в fetchProducts и  watch()
//const title = useRoute().query.title
const title = useRoute()
console.log(title)

const fetchProducts = async () => {
  isLoading.value = true
  try {
    const result = await axios.get(
      `https://5063b1fd5cab69bc.mokky.dev/products?name=*${title.query.title}`,
    )
    console.log(result.data)
    products.value = result.data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
// fetchProducts()
// onMounted(fetchProducts)

//Подписка на  title(что ввел в инпут поиска)
watch(
  () => title.query.title,
  fetchProducts,
  // Магия, ищи сейчас, не лениво:
  { immediate: true },
)
</script>

<template>
  <div v-if="isLoading" class="loading">Загрузка...</div>
  <div v-else-if="products.length === 0" class="notSuccessful">Ничего не найдено</div>
  <section>
    <CardMini
      v-for="item in products"
      :key="item.id"
      :image="item.image"
      :name="item.name"
      :price="item.price"
      :description="item.description"
      :id="item.id"
      @handleAddItem="handleAddItem(item.id)"
    />
  </section>
</template>

<style scoped lang="scss">
.notSuccessful,
.loading {
  font-size: 22px;
}

section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
