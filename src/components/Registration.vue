<script setup lang="ts">
import { emailRegex, nameRegexp, telRegexp } from '@/service/validate';
import axios from 'axios'
import { computed, reactive, ref } from 'vue'

const emit = defineEmits(['popUpLoginForm'])
// console.log(emit)

// const formData = reactive({
//   fullName: '',
//   email: '',
//   password: '',
//   role: 'client',
// })

// Определение начального состояния
const initialState = { fullName: '', email: '', password: '', phone: '', role: 'client' }

// Создание реактивного объекта
const formData = reactive({ ...initialState })

// Функция для сброса формы
function resetForm() {
  Object.assign(formData, initialState)
}

//Валидация формы
const errorName = computed(() => {
  const isValid = formData.fullName.match(nameRegexp)
  if (!isValid && formData.fullName !=='') {
    return 'Это не похоже на имя'
  } else {
    return ''
  }
})
const errorEmail = computed(() => {
  const isValid = formData.email.match(emailRegex)
  if (!isValid && formData.email !=='') {
    return 'Это не похоже на Email'
  } else {
    return ''
  }
})
const errorPassword = computed(() => {
  if (formData.password.length < 3 && formData.password !=='') {
    return 'Пароль не менее 3 символов'
  }
  return ''
})
const errorPhone = computed(() => {
  const isValid = formData.phone.match(telRegexp)
  if (!isValid && formData.phone !=='') {
    return 'Это не похоже на телефон'
  } else {
    return ''
  }
})

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
  <!-- <div class="reg" v-else >Не удачная попытка регистрации!</div> -->
   
  <form @submit.prevent="">
    <div class="nameError">{{ errorName }}</div>
    <input type="text" placeholder="Введите ваше имя*" v-model="formData.fullName" />
    <div class="nameError">{{ errorEmail }}</div>
    <input type="email" placeholder="Почта ваш логин*" v-model="formData.email" />
    <div class="nameError">{{ errorPassword }}</div>
    <input type="password" placeholder="Придумайте пароль*" v-model="formData.password" />
    <div class="nameError">{{ errorPhone }}</div>
    <input type="text" placeholder="Введите ваш телефон*" v-model="formData.phone" />
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
  min-height: 320px;
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
  .nameError {
    color: white;
    font-size: 17px;
    line-height: 1.2;
    display: contents;
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
      background-color: white;
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
