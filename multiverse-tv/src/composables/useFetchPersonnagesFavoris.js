import { ref } from 'vue';
import { useFavoritesStore } from '../stores/favorites';

export default function useFetchPersonnagesFavoris() {
    const personnagesFavoris = ref([]);
    const store = useFavoritesStore();

    const fetchPersonnagesFavoris = async () => {
        const ids = store.favorites;
        if (ids.length === 0) {
            personnagesFavoris.value = [];
            return;
        }
        const idString = ids.join(',');
        const response = await fetch(`https://rickandmortyapi.com/api/character/${idString}`);
        const data = await response.json();
        
        personnagesFavoris.value = Array.isArray(data) ? data : [data];
    };

    return { personnagesFavoris, fetchPersonnagesFavoris };
}
