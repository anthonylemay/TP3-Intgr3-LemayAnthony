<template>
     <section class="hero">
        <div class="heroContent">
            <div class="heroTextCard">
                <h1>LE PICKLE RICK API</h1>
                <p>Pour en savoir plus sur les personnages et l'univers de Rick and Morty</p>
                <div class="flex flexRow btnLine">
                    <RouterLink :to="{name:'personnages'}" class="btnNav">Personnages</RouterLink>
                    <RouterLink :to="{name:'favoris'}" class="btnNav">Favoris</RouterLink>
                    <RouterLink :to="{name:'recherche'}" class="btnNav">Recherche</RouterLink>
                </div>
                <a class="btnLine" href="#newsletter"><img src="../assets/img/notification-anchor.svg"></a>
            </div>
        </div>

    </section>
</template>

<style scoped>
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

.hero{
    border-radius:2rem;
    background-image: url('../assets/img/accueil-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>