import { ref } from 'vue';

export default function useFetchListePersonnagesRandom() {
  const personnages = ref([]);

  const chargerListePersonnages = async () => {
    try {
      // Fetch le nombre total de pages
      const infoResponse = await fetch('https://rickandmortyapi.com/api/character');
      const infoData = await infoResponse.json();
      const totalPages = infoData.info.pages;
    
      // Generère un nombre aléatoire
      const pageAleatoire = Math.floor(Math.random() * totalPages) + 1; // math.floor retourne un entier aléatoire, si ça correspond à un ID, on l'ajoute.
      
      // Fetch les personnages sélectionnés
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

  // Retourne les valeurs pour être ensuite facile à décortiquer.
  return { personnages, chargerListePersonnages };
}