<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="title">Данные пользователя</div>
    <div>Здравствуйте: Имя</div>
    <div>Ваш логин:</div>
    <div>Ваш пароль:</div>
    <div>Ваш ID:</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  color: white;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  text-indent: 20px;
  margin-top: 20px;
  .title {
    font-size: 25px;
  }
}
</style>
