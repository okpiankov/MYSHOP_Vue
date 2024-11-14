<script setup lang="ts">
import Card from '../components/CardMini.vue'
import axios from 'axios'
import { computed, onMounted, ref, watch } from 'vue'
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

const type = useRoute().query.type
console.log(type)

const getProducts = async () => {
  isLoading.value = true
  try {
    const result = await axios.get(`https://5063b1fd5cab69bc.mokky.dev/products?type=${type}`)
    console.log(result.data)

    products.value = result.data

    // console.log(products.value)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(getProducts)

watch(() => type, getProducts, { flush: 'post' })
// watch(() => useRoute().query.type, getProducts)
</script>

<template>
  <section>
    <Card
      v-for="item in products"
      :key="item.id"
      :image="item.image"
      :name="item.name"
      :price="item.price"
      :description="item.description"
      :id="item.id"
    />
  </section>
</template>

<style scoped lang="scss">
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
