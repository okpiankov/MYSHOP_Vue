<script setup lang="ts"></script>

<template>
  <div class="card">
    <img src="/test.jpg" alt="image" />

    <div class="info">
      <strong>Название</strong>
      <div>Цена: руб.</div>
      <div class="description">
        DIAMOND – международный ювелирный бренд, представленный на рынках СНГ, Европы, Ближнего
        Востока, Азии и Америки. В центре внимания бренда – совершенство его произведений и принципы
        высочайшего качества.
      </div>
      <div class="sizes">
        <div>Размеры, мм</div>
        <div class="sizeBox">
          <div class="size">16,5</div>
          <div class="size">17</div>
          <div class="size">17,5</div>
          <div class="size">18</div>
          <div class="size">18,5</div>
          <div class="size">19</div>
        </div>
      </div>
      <button>Добавить в корзину</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  background-color: white;
  border: 1px solid #fca3a3;
  border-radius: 37px;
  margin: 10px;

  img {
    width: 700px;
    height: 700px;
    align-items: center;
    object-fit: cover;
    border-radius: 37px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;
    height: 100%;
    width: 100%;
    padding: 20px;
    // background-color: #bcdff8;
    height: calc(100% - 40px);
    font-size: 20px;

    .sizes {
      // border: #000000 solid 1px;
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 18px;
      .sizeBox {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 10px;
        .size {
          height: 40px;
          width: 40px;
          border: #fca3a3 solid 2px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          &:hover {
            border-color: black;
          }
        }
      }
    }

    button {
      width: 100%;
      height: 50px;
      font-size: 20px;
      border-radius: 20px;
      border: 1px solid #fca3a3;
      background-color: #fca3a3;
      color: white;
      font-weight: 700;
    
      &:hover {
        color: black;
        border-color: black;
      }
    }
  }
}
</style>
