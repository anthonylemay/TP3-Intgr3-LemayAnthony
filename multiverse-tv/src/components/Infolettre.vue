<template>

<section id="newsletter" class="hero2">
        <div class="heroContent">
            <div class="heroTextCard">
                <div class="flexRow">
                <img class="iconSpace" src="../assets/img/notification.svg" alt="icône de notification">
                <h2>INSCRIPTION AUX NOUVELLES</h2>
                </div>
                <p>Soyez à l'affût des nouveautés sur notre site!</p>

    <form @submit.prevent="valider">

        <div class="flexRow"> 
            <div class="flexCol formName">
                <label for="prenom">Votre prénom</label>
                <input type="text" id="prenom" v-model.trim="newSub.prenom" />
                <p class="error" v-if="newSub.erreurs.prenom">Veuillez inscrire votre prénom.</p>
            </div>
            <div class="flexCol formName">
                <label for="nom">Votre nom</label>
                <input type="text" id="nom" v-model.trim="newSub.nom" />
                <p class="error" v-if="newSub.erreurs.nom">Veuillez inscrire votre nom.</p>
            </div>
       </div>
        
        <div class="flexCol">
          <label for="email">Votre courriel</label>
          <input type="email" id="email" v-model.trim="newSub.email" />
          <p class="error" v-if="newSub.erreurs.email">Veuillez inscrire votre courriel.</p>
        </div>

        <div>
          <label class="checkBoxText" for="check">Vous consentez à recevoir des offres et des nouvelles de notre site :</label>
          <input class="checkBox" type="checkbox" id="check" v-model="newSub.checkBox" />
          <p class="error" v-if="newSub.erreurs.checkBox">Veuillez valider votre consentement.</p>
        </div>
      <button type="submit">S'inscrire</button>
    </form>
  
            </div>
        </div>
    </section>
  </template>

  
<style scoped>


p{
    color:white;
    padding:1rem;
}

.heroContent{
    padding: 15rem 0;
    text-align:center;
    font-size:2rem;
}

.heroTextCard{
    margin: 0 auto;
    display:flex;
    align-items:center;
    flex-direction:column;
    background-color:rgba(100,100,100,0.5);
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.2);
    border-radius: 2rem;
    width:60%;
}

.hero2{
    border-radius:2rem;
    background-image: url('../assets/img/accueil-2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.iconSpace{
    margin:1rem;
}

form{
    font-family: jost;
  font-weight: bold;
  color:white;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-items:center;
}


form input{
  font-family: jost;
  font-weight: bold;
  font-size:2rem;
  color:black;
  padding:1rem;
  border: solid 0px;
  border-radius: .25rem;

}

form .checkBoxText{
  font-size:1.25rem;
}

form .checkBox{
  transform: scale(3); /* Adjust the scale value as needed */
  margin: 2rem; /* To ensure there's space around the scaled checkbox */
  cursor: pointer; 
}

.formName{
  margin:1rem;
}


form button{
  all: unset;
  font-family: jost;
    font-weight:bold;
    color: white;
    text-decoration: none;
    margin: 1rem;
    padding: 2rem;
    background-color: rgba(222, 222, 222, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 1px 27px 26px rgba(0,0,0,0.1);
    border-radius: 2rem;
    cursor: pointer; 

}

form button:hover{
    padding:2.5rem;
    background-color: rgba(66,202,129, 0.8)
}


.error {
  color: rgb(255, 168, 168);
  text-align:center;
  padding:1rem;
}

  
  </style>





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
  