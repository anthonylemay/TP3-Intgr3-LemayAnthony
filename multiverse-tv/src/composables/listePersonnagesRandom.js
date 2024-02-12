import { ref } from 'vue';

export default function useFetchListePersonnagesRandom() {
  const personnages = ref([]);

  const chargerListePersonnages = async () => {
    try {
      // Fetch the total number of pages
      const infoResponse = await fetch('https://rickandmortyapi.com/api/character');
      const infoData = await infoResponse.json();
      const totalPages = infoData.info.pages;
    
      // Generate a random page number
      const pageAleatoire = Math.floor(Math.random() * totalPages) + 1;
      
      // Fetch characters from the randomly selected page
      const responsePage = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageAleatoire}`);
      const data = await responsePage.json();
      const personnagesPageAleatoire = data.results;
    
      let personnagesAleatoires = [];
      let i = new Set();
      while (i.size < 12 && i.size < personnagesPageAleatoire.length) {
        let randomIndex = Math.floor(Math.random() * personnagesPageAleatoire.length);
        if (!i.has(randomIndex)) {
          i.add(randomIndex);
          personnagesAleatoires.push(personnagesPageAleatoire[randomIndex]);
        }
      }

      personnages.value = personnagesAleatoires;
    } catch (error) {
      console.error('Difficulté à aller chercher les personnages:', error);
    }
  };

  // Ensure the return statement is correctly placed within the function scope
  return { personnages, chargerListePersonnages };
}