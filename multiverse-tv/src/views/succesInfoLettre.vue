<script setup>
</script>


<template>

<main>
<section class="hero">
    <div class="heroContent">
        <div class="heroTextCard">
            <div class="flexRow">
                <img class="iconSpace" src="../assets/img/notification.svg" alt="icône de notification">
                <h1>INSCRIPTION RÉUSSIE!</h1>
            </div>
            <p>Vous recevrez un courriel de confirmation sous peu. À bientôt!</p>
            <div class="flex flexRow btnLine">
                    <RouterLink :to="{name:'accueil'}" class="btnNav">Retour à l'accueil</RouterLink>
                </div>
            </div>
        </div>
</section>
</main>
</template>


<style scoped>

h1{
    color:white;
}

p{
    color:white;
    width:70%;
}

.btnLine{
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom:4rem;
}

.btnNav{
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
}

.btnNav:hover{
    padding:2.5rem;
    background-color: rgba(66,202,129, 0.8)
}

.heroContent{
    padding: 25rem 0;
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

.hero{
    border-radius:2rem;
    background-image: url('../assets/img/infolettre-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.iconSpace{
    margin:1rem;
}


</style>