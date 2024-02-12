<template>
    <section v-if="personnage">
        <div class="flexRow container">

            <button>Précédent</button>

            <div class="ficheZoom">
                <img :src="personnage.image" :alt="personnage.name" />
                    <div class="flexCol">
                    <h2>{{ personnage.name }}</h2>
                    <p v-if="personnage.status">Status: {{ personnage.status }}</p>
                    <p v-if="personnage.species">Espèce: {{ personnage.species }}</p>
                    <p v-if="personnage.type">Type: {{ personnage.type }}</p>
                    <p v-if="personnage.gender">Genre: {{ personnage.gender }}</p>
                    <p v-if="personnage.origin && personnage.origin.name">Origine: {{ personnage.origin.name }}</p>
                    <p v-if="personnage.location && personnage.location.name">Localisation: {{ personnage.location.name }}</p>

                    <button><RouterLink :to="{ name: 'personnages'}">Retour à la liste aléatoire</RouterLink></button>
                    <!-- Ajouter ici bouton favoris **** -->
                </div>
            </div>
            <button>Suivant</button>
        </div>
    </section>
</template>

<style scoped>

.ficheZoom{

    margin: 5rem auto;
    display:flex;
    flex-direction: row;
    background-color:rgba(100,100,100,0.5);
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.2);
    border-radius: 1.25rem;
    width:70%;
}

.ficheZoom .flexCol{
  padding:1rem
}

.ficheZoom img{
    border-radius:1.25rem 0 0 1.25rem;
    object-fit: cover;
    width:50%;
}

.ficheZoom h2{
  font-size:2.25rem;
  color:white;
}


.ficheZoom p{
  color:white;
  font-size: 1rem;
}

a{
  all: unset;
}
.ficheZoom button{
  all: unset;
  font-family: jost;
    font-weight:bold;
    color: white;
    text-decoration: none;
    margin: 1rem;
    padding: 2rem;
    font-size:1.5rem;
    background-color: rgba(222, 222, 222, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.1);
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
import { useFetchPersonnageDetails } from '../composables/ficheZoomPersonnage';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { personnage, chargerDetailsPersonnage } = useFetchPersonnageDetails();
const route = useRoute();

onMounted(() => {
  chargerDetailsPersonnage(route.params.id);
});
</script>
  