<script setup lang="ts">
// import CartItem from '../components/CartItem.vue'
</script>

<template>
  <div class="left showLeft"></div>
  <div class="right showRight"></div>
  <div class="container">
    <nav class="nav">
      <div class="decoration cabinet">Личный кабинет</div>

      <!-- Для children прописывается полный путь начиная с / "/cabinet/dataPage" -->
      <router-link to="/cabinet/dataPage" class="decoration"> Пользователь </router-link>

      <router-link to="/cabinet/cartCabinetPage" class="decoration"> Моя корзина </router-link>

      <router-link to="/cabinet/ordersCabinetPage" class="decoration"> Мои заказы </router-link>
    </nav>

    <!-- ЛЕЙАУТ личный кабинет:-->
    <!-- Аналогично как и в App указывать корень <RouterView />-->
    <section>
      <RouterView />
    </section>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  // border: black 1px solid;
  border-radius: 37px;
  background-color: black;

  nav {
    width: 170px;
    min-height: 750px;
    background-color: #fca3a3;
    // bottom: 200px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    // padding-top: 20px;
    font-size: 23px;
    font-weight: 700;
    padding-right: 3px;
    .cabinet {
      font-size: 25px;
      padding-left: 30px;
      box-shadow: #6e0000 0px 0px 10px 0px;
    }
    .decoration {
      border-bottom: 1px solid black;
      // box-shadow: #6e0000 0px 0px 10px 0px;
      &:hover {
        box-shadow: #6e0000 0px 0px 10px 0px;
      }
    }
  }
  section {
    width: 100%;
    min-height: 750px;
    border-top-right-radius: 37px;
    border-bottom-right-radius: 37px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    // padding-top: 48px;
    // background-color: #fff;
  }
}
.right {
  // background-color: #fca3c5;
  background: url("right.jpg");
  // background-position: 100% 100%;
  background-size: cover;
  opacity: 0.9;
  position: absolute;
  top: 0;
  right: -100%;
  width: 50vw;
  height: 100vh;
  z-index: 31;
}
.showRight {
  position: fixed;
  animation: showRight 8s;
  z-index: 31;
}
@keyframes showRight {
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
}
.left {
  // background-color: black;
  background: url("left.jpg");
  background-position: 100% 100%;
  background-size: cover;
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: -100%;
  width: 50vw;
  height: 100vh;
  z-index: 31;
}
.showLeft {
  position: fixed;
  animation: showLeft 8s;
  z-index: 31;
}
@keyframes showLeft {
  from {
    left: 0;
  }
  to {
    left: -100%;
  }
}
</style>
