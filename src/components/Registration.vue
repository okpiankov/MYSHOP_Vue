<script setup lang="ts">
import axios from 'axios'
import { reactive } from 'vue'
const emit = defineEmits(['popUpLoginForm'])
// console.log(emit)

const formData = reactive({
  fullName: '',
  email: '',
  password: '',
  role: 'client',
})

const register = async () => {
  try {
    const result = await axios.post('https://5063b1fd5cab69bc.mokky.dev/register', formData)
    console.log(result.data)
   
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <div class="overlay" @click="emit('popUpLoginForm')"></div>
  <form @submit.prevent="">
    <input type="text" placeholder="Введите ваше имя" v-model="formData.fullName" />
    <input type="email" placeholder="Придумайте логин" v-model="formData.email" />
    <input type="password" placeholder="Придумайте пароль" v-model="formData.password" />
    <button @click="register" >Зарегистрироваться</button>
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

  input {
    height: 45px;
    width: 330px;
    border-radius: 20px;
    border: 1px solid #fca3a3;
    background-color: #fca3a3;
    font-size: 16px;
    padding-left: 10px;
    font-size: 20px;
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
}
</style>
