<template>
    <section>
      <div class="flex">
        <div class="character" v-for="personnage in personnages" :key="personnage.id">
          <img :src="personnage.image" :alt="personnage.name" />
          <h2>{{ personnage.name }}</h2>
          <p>Status: {{ personnage.status }}</p>
          <p>Species: {{ personnage.species }}</p>
          <RouterLink :to="{ name: 'ficheZoom', params: { id: personnage.id }}">Voir les détails</RouterLink>
        </div>    
      </div>
    </section>
  </template>
  

<style scoped>


</style>

<script setup>

import useFetchListePersonnagesRandom from '../composables/listePersonnagesRandom';
import {onMounted} from 'vue';
const { personnages, chargerListePersonnages } = useFetchListePersonnagesRandom();

onMounted(async () => {
  await chargerListePersonnages();
});

</script>


