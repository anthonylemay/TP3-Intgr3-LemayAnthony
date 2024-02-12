<template>
  <section class="flex center">
    <div class="grid container">
      <div class="dudeCard" v-for="personnage in personnages" :key="personnage.id" >
        <img :src="personnage.image" :alt="personnage.name" />
        <div class="flexCol">
          <h2>{{ personnage.name }}</h2>
          <p v-if="personnage.status">État: {{ personnage.status }}</p>
          <!-- Ajouter ici bouton favoris ***** -->
          <p v-if="personnage.species">Espèce: {{ personnage.species }}</p>
          <button @click="openModal(personnage)">Zoom</button>
          <button><RouterLink :to="{ name: 'fichePersonnage', params: { id: personnage.id }}">Fiche complète</RouterLink></button>
        </div>
      </div>    
    </div>
    <ficheZoom :personnage="selectedPersonnage" :isVisible="showModal" @update:isVisible="showModal = $event" />
  </section>
</template>

  

<style scoped>

.center{
  align-items:center;
}
.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;
  
}

.dudeCard{
  margin: .5rem .5rem;
    display:flex;
    flex-direction: column;
    background-color:rgba(100,100,100,0.5);
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.2);
    border-radius: 1.25rem;
}

.dudeCard img{
  border-radius: 1.25rem 1.25rem 0 0;
  object-fit: cover;
}

.dudeCard .flexCol{
  padding:1rem
}

.dudeCard h2{
  font-size:2.25rem;
  color:white;
}


.dudeCard p{
  color:white;
  font-size: 1.5rem;
}

a{
  all: unset;
}
.dudeCard button{
  all: unset;
  font-family: jost;
    font-weight:bold;
    color: white;
    text-decoration: none;
    margin: 1rem;
    padding: 2rem;
    font-size:1.5rem;
    background-color: rgba(222, 222, 222, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.1);
    border-radius: 4rem;
    cursor: pointer; 
    text-align:center;

}

button:hover{
    padding:2.5rem;
    background-color: rgba(66,202,129, 0.8)
}

</style>

<script setup>

import useFetchListePersonnagesRandom from '../composables/listePersonnagesRandom';
import { onMounted, ref } from 'vue';
import ficheZoom from '../components/modals/ficheZoom.vue';
const { personnages, chargerListePersonnages } = useFetchListePersonnagesRandom();

const showModal = ref(false);
const selectedPersonnage = ref({});

onMounted(async () => {
  await chargerListePersonnages();
});

function openModal(personnage) {
  selectedPersonnage.value = personnage;
  showModal.value = true;
}

</script>


