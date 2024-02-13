import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Personnages from "../views/Personnages.vue";
import Favoris from "../views/Favoris.vue";
import Recherche from "../views/Recherche.vue";
import fichePersonnage from "../views/fichePersonnage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: Accueil,
    },
    {
      path: "/personnages",
      name: "personnages",
      component: Personnages,
    },
    {
      path: "/personnages/:id",
      name: "fichePersonnage",
      component: fichePersonnage,
    },
    {
      path: "/favoris",
      name: "favoris",
      component: Favoris,
    },
    {
      path: "/recherche",
      name: "recherche",
      component: Recherche,
    },
  ],
});

export default router;
