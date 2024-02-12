<template>
    <div v-if="isVisible" class="popUp" @click.self="close">
        <div class="ficheZoom">

            <div class="fichePerso">
                <img :src="personnage.image" :alt="personnage.name" />
                <div class="flexCol">
                    <h2>{{ personnage.name }}</h2>
                    <p v-if="personnage.status">Status: {{ personnage.status }}</p>
                    <p v-if="personnage.species">Espèce: {{ personnage.species }}</p>
                    <p v-if="personnage.type">Type: {{ personnage.type }}</p>
                    <p v-if="personnage.gender">Genre: {{ personnage.gender }}</p>
                    <p v-if="personnage.origin && personnage.origin.name">Origine: {{ personnage.origin.name }}</p>
                    <p v-if="personnage.location && personnage.location.name">Localisation: {{ personnage.location.name }}</p>
                    <button @click="close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

  
  <script setup>
  const props = defineProps({
    personnage: Object,
    isVisible: Boolean
  });
  
  const emit = defineEmits(['update:isVisible']);
  
  function close() {
    emit('update:isVisible', false);
  }
  </script>
  
  <style scoped>
  .popUp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ficheZoom {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  