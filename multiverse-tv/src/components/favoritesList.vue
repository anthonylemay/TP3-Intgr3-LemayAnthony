<template>
    <section class="minHeight">
      <h1>PERSONNAGES FAVORIS</h1>

            <div class="grid container" v-if="personnagesFavoris.length > 0">
                <cartePersonnage v-for="character in personnagesFavoris" :key="character.id" :personnage="character"  @ouvrirPopUp="ouvrirZoomModal"/>
                <ficheZoom :personnage="targetPersonnage" :isVisible="ouvrirPopUp" @update:isVisible="togglePopUpVisibility" />    
   
            </div>
            <div class="flex flexCol" v-else>
                <p>Aucun personnage favoris d'ajouté pour le moment. Continuez à naviger!</p>
                <div class="flex btnLine">
                    <RouterLink :to="{name:'personnages'}" class="btnNav">Personnages</RouterLink>
                </div>
            </div>
            
    </section>
  </template>
  
<style scoped>
.btnNav{
    font-family: jost;
    font-weight:bold;
    color: white;
    text-decoration: none;
    margin: 1rem;
    padding: 2rem;
    background-color: rgba(222, 222, 222, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.1);
    border-radius: 2rem;
    font-size:1.5rem;
}

.btnNav:hover{
    padding:2.5rem;
    background-color: rgba(66,202,129, 0.8)
}

.btnLine{
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom:4rem;
}

.minHeight{
    min-height:100vh;
}

h1{
  text-align:center;
  font-size: 3rem;
  padding: 3rem 0 ;
}
p{
    color:white;
    text-align:center;
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
    import { onMounted, ref } from 'vue';
    import useFetchPersonnagesFavoris from '../composables/useFetchPersonnagesFavoris';
    import cartePersonnage from './cartePersonnage.vue';
    import ficheZoom from '../components/modals/ficheZoom.vue';

    const { personnagesFavoris, fetchPersonnagesFavoris } = useFetchPersonnagesFavoris();

    const ouvrirPopUp = ref(false);
    const targetPersonnage = ref({});
    function ouvrirZoomModal(personnage) {
      targetPersonnage.value = personnage;
      ouvrirPopUp.value = true;
    }

function togglePopUpVisibility(visible) {
  ouvrirPopUp.value = visible;
}

    onMounted(fetchPersonnagesFavoris);
  </script>
  