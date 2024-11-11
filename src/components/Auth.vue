<script setup lang="ts">
// Передача через emit значения реактивной переменной "popUpAuth = !popUpAuth" т.е true
const emit = defineEmits(['popUpAuth'])
// console.log(emit)
</script>

<template>
  <!-- <div class="overlay" @click="popUpAuth = !popUpAuth"></div> -->
  <div class="overlay" @click="emit('popUpAuth')"></div>
  <form @submit.prevent="">
    <input type="text" placeholder="Логин" />
    <input type="password" placeholder="Пароль" />
    <button>Войти</button>
  </form>
</template>

<style scoped lang="scss">
form {
  height: 180px;
  width: 330px;
  background-color: #000000 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border: 1px solid #fca3a3;
  border-radius: 20px;
  // box-shadow: 0 0 10px 20px #fca3a3;
  padding: 10px;
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 18;

  input {
    height: 40px;
    width: 315px;
    border-radius: 20px;
    border: 1px solid #fca3a3;
    background-color: #fca3a3;
    font-size: 20px;
    padding-left: 10px;
    &:focus {
      outline-color: #ea4335;
    }
  }
  button {
    height: 40px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #fca3a3;
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