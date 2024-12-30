<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'

// type TypeProducts =
//   {
//     image: string
//     type: string
//     name: string
//     price: number
//     description: string
//     quantity: number
//   }

const fileInput = ref<HTMLInputElement | null>(null)
const files = ref()

function handleFileChange() {
  files.value = fileInput.value?.files
}

const fileFormData = new FormData()
function addFile() {
  const file = files.value[0]
  console.log(file)
  fileFormData.append('file', file)
}

//Стейт для загрузки картинки на mokky.dev
const stateUrl = ref('')
//Загружаю картинку на mokky.dev получаю ссылку на url
const addImage = async () => {
  try {
    const result = await axios.post('https://5063b1fd5cab69bc.mokky.dev/uploads', fileFormData)
    console.log(result.data.url)
    stateUrl.value = result.data.url
  } catch (error) {
    console.log(error)
  }
}

// const image = stateUrl.value;
// console.log('image',image)


const initialState = {  type: 'earrings', name: '', description: '', price: 0, quantity: 1 }
// Создание реактивного объекта
const formData = reactive({ ...initialState })

// Функция для сброса формы
function resetForm() {
  Object.assign(formData, initialState)
}
const addProduct = async () => {
  try {
    const result = await axios.post('https://5063b1fd5cab69bc.mokky.dev/products', { stateUrl,...formData })
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="section">
    <div class="title">Редактирование продуктов</div>

    <div>Форма отправки изображения товара</div>
    <form @submit.prevent="">
      <label
        >Загрузка изображения
        <input
          ref="fileInput"
          type="file"
          @change="handleFileChange"
          placeholder="Загрузите изображение"
        />
      </label>

      <button
        @click="
           addFile();
          addImage()
          //resetForm()
        "
      >
        Добавить изображение
      </button>
    </form>

    <div>Форма создания товара</div>
    <form @submit.prevent="">
      <!-- <label
        >Ссылка на изображение
        <input type="text" placeholder="Введите url" v-model="formData.image" />
      </label> -->
      <label
        >Тип продукта
        <input type="text" placeholder="Введите тип: rings/earrings/bracelets/chains" v-model="formData.type" />
      </label>
      <label
        >Название продукта
        <input type="text" placeholder="Введите название продукта" v-model="formData.name" />
      </label>
      <label
        >Название продукта
        <input type="text" placeholder="Введите описание продукта" v-model="formData.description" />
      </label>
      <label
        >Стоимость продукта
        <input type="number" placeholder="Введите стоимость" v-model="formData.price" />
      </label>
      <button
        @click="
          addProduct();
          resetForm()
        "
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.section {
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  text-indent: 20px;
  margin-top: 50px;
  form {
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 450px;
    // background-color: #000000 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #fca3a3;
    border-radius: 20px;
    @media (max-width: 440px) {
      width: 320px;
    }
    label {
      color: white;
      font-size: 18px;
    }
    input {
      height: 40px;
      width: 400px;
      color: black;
      border: 1px solid #fca3a3;
      background-color: #fca3a3;
      font-size: 20px;
      padding-left: 10px;
      display: block;
      @media (max-width: 440px) {
        width: 280px;
      }
      &:focus {
        outline-color: #ea4335;
        background-color: white;
      }
    }
    button {
      height: 40px;
      width: 400px;
      border-radius: 20px;
      border: 2px solid white;
      background-color: #fca3a3;
      font-size: 22px;
      @media (max-width: 440px) {
        width: 280px;
      }
      &:hover {
        //   border-color: black;
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
