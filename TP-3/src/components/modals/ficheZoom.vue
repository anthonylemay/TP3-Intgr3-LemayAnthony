<template>
  <div v-if="isVisible" class="popUp" @click.self="close">
    <div class="ficheZoom">
      <img class="img" :src="personnage.image" :alt="personnage.name" />
      <div class="flexCol">
        <div class="headerPopUp">
          <h2>{{ personnage.name }}</h2>
          <div flexCol>
            <div class="closePopUp" @click="close">
              <img src="../../assets/img/closePopUp.svg" />
            </div>
            <div class="favorites" @click="handleFavClick">
              <img v-if="favorite" src="../../assets/img/favLike.svg" />
              <img v-if="!favorite" src="../../assets/img/favDislike.svg" />
            </div>
          </div>
        </div>
        <div class="status">
          <div
            class="status-circle"
            :class="{
              alive: personnage.status === 'Alive',
              dead: personnage.status === 'Dead',
              unknown: personnage.status === 'unknown' || !personnage.status,
            }"
          ></div>
          <p v-if="personnage.status">État: {{ personnage.status }}</p>
        </div>
        <p v-if="personnage.species">Espèce: {{ personnage.species }}</p>
        <p v-if="personnage.type">Type: {{ personnage.type }}</p>
        <p v-if="personnage.gender">Genre: {{ personnage.gender }}</p>
        <p v-if="personnage.origin && personnage.origin.name">
          Origine: {{ personnage.origin.name }}
        </p>
        <p v-if="personnage.location && personnage.location.name">
          Localisation: {{ personnage.location.name }}
        </p>
        <RouterLink
          :to="{ name: 'fichePersonnage', params: { id: personnage.id } }"
        >
          <button>Fiche complète</button></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import useToggleFavorite from "../../composables/favorites";

const { toggleFavorite, isFavorite } = useToggleFavorite();
const favorite = computed(() => isFavorite(props.personnage.id));

function handleFavClick() {
  toggleFavorite(props.personnage.id);
}

const props = defineProps({
  personnage: Object,
  isVisible: Boolean,
});

const emit = defineEmits(["update:isVisible"]);

function close() {
  emit("update:isVisible", false);
}
</script>

<style scoped>
.status-circle {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 1px 27px 26px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
}

.status {
  display: flex;
  align-items: center;
}

.alive {
  background-color: green;
}

.dead {
  background-color: red;
}

.unknown {
  background-color: grey;
}
.favorites {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border-radius: 1.25rem;
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
}

.favorites img:hover {
  width: 30px;
}
.favorites img {
  width: 100%;
}

.popUp {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.closePopUp {
  width: 40px;
  border-radius: 1.25rem;
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
}

.closePopUp img:hover {
  width: 38px;
}

.closePopUp img {
  width: 100%;
}

.headerPopUp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.ficheZoom {
  display: flex;
  flex-direction: row;
  background-color: rgba(100, 100, 100, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 1px 27px 26px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;
  width: 70%;
}

.ficheZoom .flexCol {
  padding: 1rem;
  width: 50%;
}

.ficheZoom .img {
  border-radius: 1.25rem 0 0 1.25rem;
  object-fit: cover;
  width: 50%;
}

.ficheZoom h2 {
  font-size: 2.25rem;
  color: white;
}

.ficheZoom p {
  color: white;
  font-size: 1rem;
}

a {
  all: unset;
}
.ficheZoom button {
  align-items: right;
  justify-content: center;
  all: unset;
  font-family: jost;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 1rem;
  padding: 2rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  min-width: 300px;

  box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
  border-radius: 4rem;
  cursor: pointer;
  text-align: center;
}

button:hover {
  padding: 2.5rem;
  background-color: rgba(66, 202, 129, 0.8);
}
</style>
