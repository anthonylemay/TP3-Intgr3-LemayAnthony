<template>
  <section class="flex">
    <div class="grid container">
      <div class="cartePerso" v-for="personnage in personnages" :key="personnage.id" >
        <img class="img" :src="personnage.image" :alt="personnage.name" @click="ouvrirZoomModal(personnage)"/>
        <div class="openPopUp" @click="ouvrirZoomModal(personnage)" > 
          <img src="../assets/img/zoomIcon.svg">
          </div>
        <div class="flexCol">
          <h2>{{ personnage.name }}</h2>
          <p v-if="personnage.status">État: {{ personnage.status }}</p>
          <p v-if="personnage.species">Espèce: {{ personnage.species }}</p>
                    <!-- Ajouter ici bouton favoris ***** -->
          <button><RouterLink :to="{ name: 'fichePersonnage', params: { id: personnage.id }}">Fiche complète</RouterLink></button>
        </div>
      </div>    
    </div>
    <ficheZoom :personnage="targetPersonnage" :isVisible="showModal" @update:isVisible="showModal = $event" />
  </section>
</template>

<style scoped>

.openPopUp{
  position:absolute;
  top: 0;
  right:0;
    width:40px;
    border-radius:1.25rem;
    cursor: pointer;
    padding:1rem;
    margin:.5rem;
    box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
  }

  .openPopUp:hover{
    padding:2rem;
  }
  .openPopUp img{
    width:100%;
  }


.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .25rem;
  width:100%;
  
}

.cartePerso{
  margin: .5rem .5rem;
    display:flex;
    flex-direction: column;
    background-color:rgba(100,100,100,0.5);
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.2);
    border-radius: 1.25rem;
}

.cartePerso img.img{
  border-radius: 1.25rem 1.25rem 0 0;
  object-fit: cover;
  position: relative;
  cursor:pointer;
}

.cartePerso img.img:hover{
  margin:.5rem;
  border-radius: 1.25rem;
}

.cartePerso .flexCol{
  padding:1rem
}

.cartePerso h2{
  font-size:2.25rem;
  color:white;
}


.cartePerso p{
  color:white;
  font-size: 1.5rem;
}

a{
  all: unset;
}
.cartePerso button{
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
const targetPersonnage = ref({});

onMounted(async () => {
  await chargerListePersonnages();
});

function ouvrirZoomModal(personnage) {
  targetPersonnage.value = personnage;
  showModal.value = true;
}

</script>


