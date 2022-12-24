<script setup>
  import { ref } from 'vue'

  const showModal = ref(false);
  const newNote = ref("");
  const notes = ref([]);

  const errorMessage = ref("");

  function randomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const addNote = () => {
    if(newNote.value.length < 10) {
      return errorMessage.value = "Name of note need to have at least 10 characters"
    }
    notes.value.push({
      id: Math.floor(Math.random() * 2219),
      text: newNote.value,
      date: new Date(),
      backgroundColor: randomColor(),
    });
    showModal.value = false;
    newNote.value = "";
    errorMessage.value = "";
  }

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea placeholder="Write a note ..." v-model.trim="newNote" name="notes" id="notes" cols="30" rows="10"></textarea>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button @click="addNote()">
          Add Note
        </button>
        <button class="close" @click="showModal = false, errorMessage = ''">
          Close
        </button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true, errorMessage = ''">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor: note.backgroundColor}">
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">
            {{ note.date.toLocaleDateString("en-US") }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
  }
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 25px;
    font-size: 75px;
  }
  header button {
    background-color: black;
    color: white;
    font-weight: 700;
    font-size: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
  .card {
    width: 225px;
    height: 225px;
    background-color: aquamarine;
    padding: 10px;
    border-radius: 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .date {
    font-size: 12px;
    font-weight: 600;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    width: 750px;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 30px;
    border: 2px solid black;
    gap: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .modal button {
    background-color: brown;
    color: white;
    font-weight: 700;
    font-size: 24px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 16px;
  }
  .modal .close {
    background-color: red;
  }
  textarea {
    font-size: 18px;
    padding: 20px;
  }
  .error-message {
    color: red;
    font-size: 18px;
  }
</style>

