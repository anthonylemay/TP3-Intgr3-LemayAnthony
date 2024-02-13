import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(id) {
      if (!this.favorites.includes(id)) {
        this.favorites.push(id);
      }
    },
    removeFavorite(id) {
        this.favorites = this.favorites.filter(favoriteId => favoriteId !== id);
      },
      
    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.removeFavorite(id);
      } else {
        this.addFavorite(id);
      }
    },
    isFavorite(id) {
      return this.favorites.includes(id);
    }
  }
});

export const useCharacterStore = defineStore('characters', {
    state: () => ({
      characterDetails: {}, // Object to cache character details by ID
    }),
    actions: {
      cacheCharacter(character) {
        this.characterDetails[character.id] = character;
      },
      getCharacterFromCache(id) {
        return this.characterDetails[id];
      },
    },
  });