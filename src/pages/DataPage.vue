<script setup lang="ts">
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore()

</script>

<template>
  <div class="section">
    <div class="title">Данные пользователя</div>
    <div>Здравствуйте: {{ authStore.$state.data.fullName }}</div>
    <div>Ваш логин: {{ authStore.$state.data.email }}</div>
    <div>Ваш телефон: {{ authStore.$state.data.phone }}</div>
    <div>Ваш id: {{ authStore.$state.data.id }}</div>

    <!-- <div class="container mx-auto">
      <div class="flex justify-center items-center">
        <div class="w-full h-[3px] bg-gray-200 overflow-x-auto relative rounded-lg shadow-lg">
          <div
            class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-700 animate-scroll rounded-lg"
          ></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.section {
  color: white;
  height: 300px;
  width: hull;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  text-indent: 20px;
  margin-top: 20px;
  .title {
    font-size: 25px;
  }

  .container {
    width: 100%;
  }
  .animate-scroll {
    animation: scroll 10s infinite linear forwards alternate;
  }
  @keyframes scroll {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
</style>
