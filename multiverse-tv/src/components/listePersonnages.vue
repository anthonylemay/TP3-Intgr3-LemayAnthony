<template>
  <section class="flex">
    <div class="grid container">
      <cartePersonnage v-for="personnage in personnages" :key="personnage.name" :personnage="personnage" @ouvrirPopUp="ouvrirZoomModal"/>
      <ficheZoom :personnage="targetPersonnage" :isVisible="ouvrirPopUp" @update:isVisible="togglePopUpVisibility" />    
    </div>    

  </section>
</template>

<style scoped>

.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .25rem;
  width:100%;
  
}

</style>

<script setup>

import useFetchListePersonnagesRandom from '../composables/listePersonnagesRandom';
import { onMounted, ref } from 'vue';
import cartePersonnage from './cartePersonnage.vue'; 
import ficheZoom from '../components/modals/ficheZoom.vue';

//utilise la composable du randomizer
const { personnages, chargerListePersonnages } = useFetchListePersonnagesRandom();

const ouvrirPopUp = ref(false);
const targetPersonnage = ref({});

function ouvrirZoomModal(personnage) {
  targetPersonnage.value = personnage;
  ouvrirPopUp.value = true;
}

function togglePopUpVisibility(visible) {
  ouvrirPopUp.value = visible;
}

onMounted(async () => {
  await chargerListePersonnages();
});



</script>


