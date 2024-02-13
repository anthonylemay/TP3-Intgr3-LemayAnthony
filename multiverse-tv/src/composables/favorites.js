import { useFavoritesStore } from '@/stores/favorites';

export default function useToggleFavorite() {
  const store = useFavoritesStore();

  const addFavorite = (id) => store.addFavorite(id);
  const removeFavorite = (id) => store.removeFavorite(id);
  const toggleFavorite = (id) => store.toggleFavorite(id);
  const isFavorite = (id) => store.isFavorite(id);

  return {
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  }
}
