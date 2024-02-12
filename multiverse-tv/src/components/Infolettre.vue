<template>
    <form @submit.prevent="valider">
      <div class="sectionForm">
        <div class="labelIn">
          <label for="prenom">Votre prénom</label>
          <input type="text" id="prenom" v-model.trim="newSub.prenom" />
        </div>
      </div>
      <div class="sectionForm">
        <div class="labelIn">
          <label for="nom">Votre nom</label>
          <input type="text" id="nom" v-model.trim="newSub.nom" />
        </div>
      </div>
      <div class="sectionForm">
        <div class="labelIn">
          <label for="email">Votre courriel</label>
          <input type="email" id="email" v-model.trim="newSub.email" />
        </div>
      </div>
      <div class="sectionForm">
        <div class="labelIn">
          <label for="check">Vous consentez à recevoir des offres et nouvelles de notre site</label>
          <input type="checkbox" id="check" v-model="newSub.checkBox" />
        </div>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  </template>
  




  <script setup>
  
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const newSub = reactive({
    prenom: '',
    nom: '',
    email: '',
    checkBox: false,
    erreurs: {
      prenom: false,
      nom: false,
      email: false,
      checkBox: false
    }
  })
  
  const router = useRouter()
  
  function valider() {
    const formData = {
      prenom: newSub.prenom,
      nom: newSub.nom,
      email: newSub.email,
      checkBox: newSub.checkBox
    }
  
    resetErreurs()

    let valide = validateMail(formData)
  
    if (valide) {
      ajoutUsager(formData)
      resetForm()
      console.log('usager ajoutée') // debug
      router.push({ name: 'success-infolettre' })
    }
  }
  
  function validateMail(formData) {

    let valide = true
  
    if (formData.prenom === '') {
      newSub.erreurs.prenom = true
      valide = false
    }
    if (formData.nom === '') {
      newSub.erreurs.nom = true
      valide = false
    }
    if (formData.email === '') {
      newSub.erreurs.email = true
      valide = false
    }
    if (!formData.checkBox) {
      newSub.erreurs.checkBox = true
      valide = false
    }
  
    return valide
  }
  
  function resetForm() {
    newSub.prenom = ''
    newSub.nom = ''
    newSub.email = ''
    newSub.checkBox = false
    resetErreurs()
  }
  
  function resetErreurs() {
    newSub.erreurs.prenom = false
    newSub.erreurs.nom = false
    newSub.erreurs.email = false
    newSub.erreurs.checkBox = false
  }
  
  function ajoutUsager(formData) {
    // Données d'inscription à l'infolettre / DB...
    console.log("données de l'usager:", formData)
  }
  </script>
  