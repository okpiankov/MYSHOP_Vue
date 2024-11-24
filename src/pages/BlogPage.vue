<script setup lang="ts"></script>

<template>
  <section>
    <!-- <h2>Блог</h2> -->
    <div class="article_1 showTop"></div>
    <div class="article_2 showTop"></div>
    <div class="article_1 showRight"></div>
    <div class="article_2 showLeft"></div>
    <div class="article_1 showLeft"></div>
    <div class="article_2 showRight"></div>
    <div class="article_1 showRight"></div>
    <div class="article_2 showLeft"></div>
  </section>
</template>

<style scoped lang="scss">
section {
  min-height: 800px;
  width: 100%;
  border-radius: 40px;

  background-color: black;
  // display: flex;
  // justify-content: center;
  // h2 {
  //   color: white;
  // }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  padding: 20px;

  .article_1 {
    height: 450px;
    width: 100%;
    // border: white 2px solid;
    background-color: #be65fe;
    opacity: 0.9;
    border-radius: 90px;
    grid-row: span 3;
    transition: all 1s ease-in-out;
    transform: translateX(-100%);
    transform: translateX(0);
    &:hover {
      scale: 1.3;
      border: red 3px solid;
    }
  }
  .article_2 {
    height: 300px;
    width: 100%;
    // border: red 2px solid;
    background-color: #6f9fff;
    opacity: 0.9;
    border-radius: 60px;
    grid-row: span 2;
    transition: all 1s ease-in-out;
    &:hover {
      scale: 1.3;
      border: red 3px solid;
    }
  }
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
.showTop {
  position: relative;
  animation: showTop 2s;
  z-index: 1;
}
@keyframes showTop {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
}
.showLeft {
  position: relative;
  animation: showLeft 2s;
  z-index: 1;
}
@keyframes showLeft {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}

.showRight {
  position: relative;
  animation: showRight 2s;
  z-index: 1;
}
@keyframes showRight {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}
</style>
