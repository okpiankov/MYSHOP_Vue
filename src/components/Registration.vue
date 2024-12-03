<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'

const emit = defineEmits(['popUpLoginForm'])
// console.log(emit)

// const formData = reactive({
//   fullName: '',
//   email: '',
//   password: '',
//   role: 'client',
// })

// Определение начального состояния
const initialState = { fullName: '', email: '', password: '', role: 'client' }

// Создание реактивного объекта
const formData = reactive({ ...initialState })

// Функция для сброса формы
function resetForm() {
  Object.assign(formData, initialState)
}

const reg = ref(null)

const register = async () => {
  try {
    const result = await axios.post('https://5063b1fd5cab69bc.mokky.dev/register', formData)
    console.log(result.data)

    reg.value = result.data.token
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="overlay" @click="emit('popUpLoginForm')"></div>
  <div class="reg" v-if="reg !== null">Вы успешно зарегистрировались!</div>
  <form @submit.prevent="">
    <input type="text" placeholder="Введите ваше имя" v-model="formData.fullName" />
    <input type="email" placeholder="Придумайте логин" v-model="formData.email" />
    <input type="password" placeholder="Придумайте пароль" v-model="formData.password" />
    <button
      @click="
        register();
        resetForm()
      "
    >
      Зарегистрироваться
    </button>
  </form>
</template>

<style scoped lang="scss">
form {
  height: 260px;
  width: 360px;
  background-color: #000000 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid #fca3a3;
  border-radius: 20px;
  // box-shadow: 0 0 10px 20px #fca3a3;
  padding: 15px;
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 18;
  @media (max-width: 440px) {
    width: 320px;
  }
  input {
    height: 45px;
    width: 330px;
    border-radius: 20px;
    border: 1px solid #fca3a3;
    background-color: #fca3a3;
    font-size: 16px;
    padding-left: 10px;
    font-size: 20px;
    @media (max-width: 440px) {
      width: 280px;
    }
    &:focus {
      outline-color: #ea4335;
    }
  }
  button {
    height: 45px;
    width: 100%;
    border-radius: 20px;
    border: 2px solid white;
    background-color: #fca3a3;
    font-size: 20px;
    @media (max-width: 440px) {
      width: 280px;
    }
    &:hover {
      border-color: black;
      background-color: white;
    }
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 8;
  cursor: pointer;
}
.reg {
  position: fixed;
  top: 450px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 58;
  color: white;
  font-size: 22px;
}
</style>
