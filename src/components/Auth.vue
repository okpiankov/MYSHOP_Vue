<script setup lang="ts">
import axios from 'axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useIsLoadingStore, useAuthStore } from '../store/auth'
import { useRoute } from 'vue-router'

// Передача через emit значения реактивной переменной "popUpAuth = !popUpAuth" т.е true
// Все значения(и транзитные и текущие) передаются через 1 emit

const emit = defineEmits(['popUpLoginForm', 'auth'])
// console.log(emit)

const formData = reactive({
  email: 'user@test.com',
  password: '123',
})
const IsLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const navigate = useRouter()

const login = async () => {
  IsLoadingStore.set(true)
  try {
    const result = await axios.post('https://5063b1fd5cab69bc.mokky.dev/auth', formData)
    // console.log(result.data)

    authStore.set(result.data)
  } catch (error) {
    console.log(error)
  } finally {
    navigate.push({ name: 'dataPage' })
    IsLoadingStore.set(false) 
  }
}
// authStore.$reset()
// authStore.clear()
</script>

<template>
  <!-- <div class="overlay" @click="popUpLoginForm = !popUpLoginForm"></div> -->

  <div class="overlay" @click="emit('popUpLoginForm')"></div>
  <form @submit.prevent="" class="show">
    <input type="email" placeholder="Логин user@test.com" v-model="formData.email" />
    <input type="password" placeholder="Пароль 123" v-model="formData.password" />
    <button
      @click="
        login();
        emit('popUpLoginForm')
      "
    >
      Войти
    </button>
    <div @click="emit('auth')">Регистрация</div>
    <!-- <button @click="authStore.clear()">Очистить стор</button> -->
  </form>
</template>

<style scoped lang="scss">
form {
  height: 245px;
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
    font-size: 20px;
    padding-left: 10px;
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
  div {
    font-size: 20px;
    color: rgb(255, 206, 206);
    cursor: pointer;
    &:hover {
      color: white;
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
}
.show {
  animation: show 4s;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
