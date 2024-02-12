import { ref } from 'vue';

export function useFetchPersonnageDetails() {
  const personnage = ref(null); // pour storer l'information complète du personnage.

  // On cherche l'info par id
  const chargerDetailsPersonnage = async (id) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      personnage.value = data; // Garder l'information du personnage pour montrer l'info.
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du personnage:', error);
    }
  };

  return { personnage, chargerDetailsPersonnage };
}
