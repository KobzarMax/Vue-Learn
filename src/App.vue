<script setup>
  import { ref } from 'vue'

  const count = ref(0);
</script>

<template>
      <div class="wrapper">
          <h4>Current count is {{ count }}</h4>
          <h1 class="count">
              {{ count }}
          </h1>
          <div>
            <button class="minus" @click="count--">-</button>
            <button class="add" @click="count++">+</button>
          </div>
      </div>
</template>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  button {
    background-color: brown;
    width: 100px;
    height: 40px;
    border-radius: 16px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-right: 10px;
  }

  h1, h4 {
    text-align: center;
  }
</style>

