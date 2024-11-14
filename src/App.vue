<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { UserRound, ShoppingCart, Menu, Gem } from 'lucide-vue-next'
import DrawerRightMenu from './components/RightMenu.vue'
import Cart from './components/Cart.vue'
import { provide, ref } from 'vue'
import LoginForm from './components/LoginForm.vue'

const drawerCart = ref(false)
const drawerRightMenu = ref(false)
const popUpLoginForm = ref(false) // реакт.переменная передается через emit через 2 компонента

//Тест provide
provide('drawerCart', drawerCart)

const closeRightMenu = () => {
  drawerRightMenu.value = false
}
</script>

<template>
  <DrawerRightMenu v-if="drawerRightMenu" @closeRightMenu="closeRightMenu" />
  <Cart v-if="drawerCart" />
  <!-- <Auth v-if="popUpAuth" :popUpAuth="popUpAuth" Почему нельзя передать реактивную переменную через :?/> -->
  <!-- Важно!!! название в род.комп. @popUpAuth такое же как и в доч.комп. в const emit = defineEmits(['popUpAuth']) -->
  <!-- <Auth v-if="popUpAuth" @popUpAuth="popUpAuth = !popUpAuth" /> -->
  <LoginForm v-if="popUpLoginForm" @popUpLoginForm="popUpLoginForm = !popUpLoginForm" />
  <did class="container">
    <header>
      <div class="nav">
        <div>
          <Gem class="gem" />
          <RouterLink to="/" class="name">DIAMOND</RouterLink>
        </div>
        <div>8-800-777-77-77</div>
      </div>
      <div class="nav">
        <UserRound @click="popUpLoginForm = !popUpLoginForm" />
        <ShoppingCart @click="drawerCart = !drawerCart" />
        <Menu @click="drawerRightMenu = !drawerRightMenu" />
      </div>
    </header>

    <!-- ЛЕЙАУТ корневой роут:-->
    <secttion>
      <RouterView />
    </secttion>
  </did>
</template>

<style scoped lang="scss">
.container {
  width: 85%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  /* background-color: rgb(252, 167, 237); */
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 30px;

  header {
    width: 100%;
    height: 120px;
    /* background-color: #84c5f9; */
    background-color: black;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .nav {
      display: flex;
      align-items: center;
      gap: 50px;
      margin-left: 30px;
      margin-right: 30px;
      div {
        display: flex;
        .gem {
          color: rgb(230, 0, 255);
        }
      }
    }
    .name {
      font-size: 23px;
      font-weight: 900;
    }
  }
  secttion {
    width: 100%;
    min-height: 800px;
    border: 1px solid #fca3a3;
    box-shadow: 0 0 20px 30px #fca3a3;
    border-radius: 37px;
    background-color: #ffc4c4;
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
  }
}
</style>
