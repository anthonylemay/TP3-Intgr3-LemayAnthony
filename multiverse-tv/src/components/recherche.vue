<template>
    
    <div>
      <input type="text" id="nomPersonnage" placeholder="Tapez un nom. Ex. « Rick »" v-model="inputRecherche">
      <h3 v-if="listeResultats.length > 0"> Personnages trouvés: {{ listeResultats.length }}</h3>
  </div>
    
    <hr>

    <div class="grid container">
      <cartePersonnage v-for="personnage in listeResultats" :key="personnage.name" :personnage="personnage" @ouvrirPopUp="ouvrirZoomModal"/>
      <ficheZoom :personnage="selectedPersonnage" :isVisible="showModal" @update:isVisible="togglePopUpVisibility"/>
    </div>
    
    <p class="error" v-if="aucunResultatMsg !== ''">{{  aucunResultatMsg }}</p>

</template>

<style setup>
.error {
  color: rgb(255, 168, 168);
  text-align:center;
  padding:1rem;
}

.grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .25rem;
    width:100%;
    
  }
</style>

<script setup>
    import { watch, ref } from 'vue';

    import cartePersonnage from './cartePersonnage.vue';
    import ficheZoom from './modals/ficheZoom.vue';

    import getPersoByName from '../composables/searchEngine.js';
    
    const { inputRecherche, listeResultats, aucunResultatMsg } = getPersoByName();

    watch(inputRecherche, (newValue) => {
    console.log(newValue); // This will log every time inputRecherche changes
    });

    const showModal = ref(false);
    const selectedPersonnage = ref({});
    function ouvrirZoomModal(personnage) {
    selectedPersonnage.value = personnage;
    showModal.value = true;
    }

    function togglePopUpVisibility(visible) {
    showModal.value = visible;
    }


  </script>
  