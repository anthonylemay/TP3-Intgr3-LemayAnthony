<template>
  <div class="cartePerso">
    <img
      class="img"
      :src="personnage.image"
      :alt="personnage.name"
      @click="handleClick"
    />
    <div class="popUp" @click="handleClick">
      <img src="../assets/img/zoomIcon.svg" />
    </div>
    <div class="favorites" @click="handleFavClick">
      <img v-if="favorite" src="../assets/img/favLike.svg" />
      <img v-if="!favorite" src="../assets/img/favDislike.svg" />
    </div>

    <div class="flexCol">
      <h2>{{ personnage.name }}</h2>
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
      <div class="btn-container">
        <RouterLink
          :to="{ name: 'fichePersonnage', params: { id: personnage.id } }"
          ><button>Fiche complète</button></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
}

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

.popUp {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  border-radius: 1.25rem;
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
}

.popUp:hover {
  padding: 2rem;
}
.popUp img {
  width: 100%;
}

.favorites {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  border-radius: 1.25rem;
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
}

.favorites:hover {
  padding: 2rem;
}
.favorites img {
  width: 100%;
}

.cartePerso {
  margin: 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(100, 100, 100, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 1px 27px 26px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;
}

.cartePerso img.img {
  border-radius: 1.25rem 1.25rem 0 0;
  object-fit: cover;
  position: relative;
  cursor: pointer;
}

.cartePerso img.img:hover {
  margin: 0.5rem;
  border-radius: 1.25rem;
}

.cartePerso .flexCol {
  padding: 1rem;
}

.cartePerso h2 {
  font-size: 2.25rem;
  color: white;
}

.cartePerso p {
  color: white;
  font-size: 1.5rem;
}

a {
  all: unset;
}
.cartePerso button {
  all: unset;
  font-family: jost;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 1rem;
  padding: 2rem;
  font-size: 1.5rem;
  background-color: rgba(222, 222, 222, 0.2);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 1px 27px 26px rgba(0, 0, 0, 0.1);
  border-radius: 4rem;
  cursor: pointer;
  text-align: center;
  margin: auto;
  width: 250px;
}

button:hover {
  padding: 2.5rem;
  background-color: rgba(66, 202, 129, 0.8);
}
</style>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import useToggleFavorite from "../composables/favorites";

const props = defineProps({
  personnage: Object,
});

const emit = defineEmits(["ouvrirPopUp"]);

function handleClick() {
  emit("ouvrirPopUp", props.personnage);
}

const { toggleFavorite, isFavorite } = useToggleFavorite();
const favorite = computed(() => isFavorite(props.personnage.id));

function handleFavClick() {
  toggleFavorite(props.personnage.id);
}

//console.log(props.personnage); // debug
</script>
