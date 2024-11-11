<script setup lang="ts">
import {  CircleX } from 'lucide-vue-next';
import Search from './Search.vue';

// Передача через emit результата вызова функции closeRightMenu т.е false
const emit = defineEmits(['closeRightMenu'])


</script>

<template>
  <!-- <div class="overlay" @click="drawerRightMenu = !drawerRightMenu" ></div> -->
  <div class="overlay" @click="emit('closeRightMenu')" ></div>
    <nav class="nav" >
    <CircleX  @click="emit('closeRightMenu')"/>
    <Search />
    <div class="decoration">Все товары</div>
    <div class="decoration">Кольца</div>
    <div class="decoration">Серьги</div>
    <div class="decoration">Браслеты</div>
    <div class="decoration">Цепи</div>
    <RouterLink to="/blog" class="decoration blog">
       Блог
    </RouterLink>
    <RouterLink to="/cabinet" class="decoration">
       Личный кабинет
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  width: 280px;
  height: 100%;
  background-color: #fca3a3;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 48px;
  padding-left: 20px;
  z-index: 20;
  font-size: 23px;
  font-weight: 700;
  .decoration {
    border-bottom: 1px solid black;
    // box-shadow: #6e0000 0px 0px 10px 0px;
    &:hover {
      box-shadow: #6e0000 0px 0px 10px 0px;
    }
    &.blog {
      margin-top: 40px;
    }
  }
  // transform: translateX(170px);
  // transition: transform .3s ease-in-out;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  z-index: 10;
}
// .active {
//   transform: translateX(-300px);
//   transition: transform .3s ease-in-out;
// }
</style>

<!-- Реализовать 3 анимации: PopUpMenu-плавный выезд слева,Cart-плавное появление,
LK - -плавный выезд сверху, главная страница - полоса прогресса и баннер текст  меняющий цвет -->