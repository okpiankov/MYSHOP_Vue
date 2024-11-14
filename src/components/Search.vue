<script setup lang="ts">
import { Search } from 'lucide-vue-next'
</script>

<template>
  <form @submit.prevent="">
    <button><Search /></button>
    <input type="text" placeholder="Поиск" />
  </form>
</template>

<style scoped lang="scss">
form {
  height: 60px;
  width: 260px;
  display: flex;
  flex-direction: row;
  button {
    height: 40px;
    width: 40px;
    border: none;
    border-bottom: black 1px solid;
    background-color: #fca3a3;
    font-size: 19px;
    cursor: pointer;
  }
  input {
    height: 40px;
    width: 100%;
    border: none;
    background-color: #fca3a3;
    border-bottom: black 1px solid;
    font-size: 20px;
    padding-left: 10px;
    &:focus {
      outline-color: #ea4335;
      background-color: #ffc4c4;
    }
    &::placeholder {
      font-size: 22px;
    }
  }
}
</style>
