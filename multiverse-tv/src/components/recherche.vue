<template>
    <main class="minHeight">
    <div class="searchHeader">
      <h1>RECHERCHE PAR NOM</h1>
      <input type="text" id="nomPersonnage" placeholder="Tapez un nom. Ex. « Rick »" v-model="inputRecherche">
    <div class="flexRow" v-if="listeResultats.length > 0">
      <img class="alien" src="../assets/img/alien.svg" alt="tête alien">
      <h3 > Personnages trouvés: {{ listeResultats.length }}</h3>
    </div>
      
  </div>
    
    <div class="grid container">
      <cartePersonnage v-for="personnage in listeResultats" :key="personnage.name" :personnage="personnage" @ouvrirPopUp="ouvrirZoomModal"/>
      <ficheZoom :personnage="selectedPersonnage" :isVisible="showModal" @update:isVisible="togglePopUpVisibility"/>
    </div>
    
    <p class="error" v-if="aucunResultatMsg !== ''">{{  aucunResultatMsg }}</p>
  </main>
</template>

<style scoped>

.alien{
  margin:.25rem;
}
.minHeight{
    min-height:100vh;
}


h1{
  text-align:center;
  font-size: 3rem;
  padding-top: 3rem;
}
h3{
  font-family: space-grotesk;
  font-weight:bold;
  color:white;
}

.searchHeader{
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding:3rem;
}

input{
  all: unset;
  border-radius:.5rem;
  padding:1rem;
  font-family: space-grotesk;
  font-weight:bold;
  font-size:2rem;
  color: rgb(133, 133, 133);
  min-width: 450px;
  background-color:rgb(207, 236, 255)
}

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
    margin-bottom: 8rem;
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
  