<template>
  <section v-if="personnage">
      <div class="flexRow container">

          <img class="navBtnArrow" src="../assets/img/arrow-left.svg" @click="naviguerPersonnages(-1)">

          <div class="fichePerso">
              <img :src="personnage.image" :alt="personnage.name" />
              <div class="flexCol">
                <div class="headerPopUp">
                        <h2>{{ personnage.name }}</h2>
                        <div flexCol>
                        <div class="favorites" @click="handleFavClick" > 
                        <img v-if="(favorite)" src="../assets/img/favLike.svg">
                        <img v-if="(!favorite)" src="../assets/img/favDislike.svg">
                        </div>
                      </div>
                    </div>
                  <p v-if="personnage.status">Status: {{ personnage.status }}</p>
                  <p v-if="personnage.species">Espèce: {{ personnage.species }}</p>
                  <p v-if="personnage.type">Type: {{ personnage.type }}</p>
                  <p v-if="personnage.gender">Genre: {{ personnage.gender }}</p>
                  <p v-if="personnage.origin && personnage.origin.name">Origine: {{ personnage.origin.name }}</p>
                  <p v-if="personnage.location && personnage.location.name">Localisation: {{ personnage.location.name }}</p>
                  <RouterLink :to="{ name: 'personnages'}"><button>Retour à la liste aléatoire</button></RouterLink>
              </div>
          </div>

          <img class="navBtnArrow" src="../assets/img/arrow-right.svg" @click="naviguerPersonnages(1)">
      </div>
  </section>
</template>

<style scoped>


.navBtnArrow{
  width: 50px;
  opacity: 0.2;
  cursor: pointer;
}

.navBtnArrow:hover{
  opacity: 0.5;
}



.favorites{
  display:flex;
      align-items:center;
      justify-content:center;
      position: absolute;
      top: 0;
      right: 0;
      width:50px;
      border-radius:1.25rem;
      cursor: pointer;
      padding:1rem;
      margin:1rem;
      box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
    }
    .favorites img{
      width:100%;
    }
    .favorites img:hover{
      width:30px;
    }



.fichePerso{

  margin: 5rem auto;
  display:flex;
  flex-direction: row;
  background-color:rgba(100,100,100,0.5);
  backdrop-filter: blur(10px);
  box-shadow: 1px 27px 26px rgba(0,0,0,0.2);
  border-radius: 1.25rem;
  width:70%;
}

.fichePerso .flexCol{
padding:1rem
}

.fichePerso img{
  border-radius:1.25rem 0 0 1.25rem;
  object-fit: cover;
  width:50%;
}

.fichePerso h2{
font-size:2.25rem;
color:white;
}


.fichePerso p{
color:white;
font-size: 1rem;
}

a{
all: unset;
}
.fichePerso button{
all: unset;
font-family: jost;
  font-weight:bold;
  color: white;
  text-decoration: none;
  margin: 1rem;
  padding: 2rem;
  font-size:1.5rem;

  border-radius: 1rem;

  box-shadow: 5px 5px 10px 1px rgb(206, 255, 253, 0.4);
  border-radius: 4rem;
  cursor: pointer; 
  text-align:center;

}

button:hover{
  padding:2.5rem;
  background-color: rgba(66,202,129, 0.8)
}


</style>


<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFetchPersoDetails } from '../composables/fichePersonnage';
import useToggleFavorite from '../composables/favorites';

const { personnage, chargerDetailsPersonnage } = useFetchPersoDetails();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  chargerDetailsPersonnage(route.params.id);
});

const idActuel = ref(route.params.id);

watch(() => route.params.id, (newId) => {
  idActuel.value = newId;
  chargerDetailsPersonnage(newId);
});

function naviguerPersonnages(direction) {
  const nextId = parseInt(idActuel.value) + direction;
  router.push({ name: 'fichePersonnage', params: { id: nextId } });
}

const { toggleFavorite, isFavorite } = useToggleFavorite();
const favorite = computed(() => personnage.value ? isFavorite(personnage.value.id) : false);

function handleFavClick() {
  if (personnage.value) {
    toggleFavorite(personnage.value.id);
  }
}

</script>
