<template>
    <section>
      <h1>PERSONNAGES FAVORIS</h1>
      <div class="grid container">
            <div v-if="favoriteCharacters.length > 0">
                <cartePersonnage v-for="character in favoriteCharacters" :key="character.id" :personnage="character"/>
            </div>
            <div v-else>
                <p>Aucun personnage favoris d'ajouté pour le moment. Continuez à naviger!</p>
            </div>
    </div>
    </section>
  </template>
  
<style scoped>

h1{
  text-align:center;
  font-size: 3rem;
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
  
}
</style>


  <script setup>
  import { onMounted, ref } from 'vue';
  import { useFavoritesStore } from '../stores/favorites';
  import cartePersonnage from './cartePersonnage.vue';
  
  const store = useFavoritesStore();
  const favoriteCharacters = ref([]);
  
  const fetchFavoriteCharacters = async () => {
    const ids = store.favorites;
    const promises = ids.map(id =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json())
    );
    favoriteCharacters.value = await Promise.all(promises);
  };
  
  onMounted(fetchFavoriteCharacters);
  </script>
  