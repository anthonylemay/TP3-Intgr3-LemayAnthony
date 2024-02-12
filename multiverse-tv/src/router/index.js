import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Personnages from '../views/Personnages.vue'
import Favoris from '../views/Favoris.vue'
import Recherche from '../views/Recherche.vue'
import succesInfoLettre from '../views/succesInfoLettre.vue'
import ficheZoom from '../views/ficheZoom.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/personnages',
      name: 'personnages',
      component: Personnages
    },
    {
      path: '/personnages/:id',
      name: 'ficheZoom',
      component: ficheZoom
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: Favoris
    },
    {
      path: '/recherche',
      name: 'recherche',
      component: Recherche
    },
    {
      path: '/succes-infolettre',
      name: 'success-infolettre',
      component: succesInfoLettre
    }
  ]
})

export default router
