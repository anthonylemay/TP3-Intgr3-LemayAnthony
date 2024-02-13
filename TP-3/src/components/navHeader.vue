<template>
  <header>
    <nav class="container flex">
      <div class="flexRow logoHeader">
        <img
          alt="Rick And Morty - logotype officiel"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
        <span class="tonic">Le Pickle Rick API</span>
      </div>
      <div class="flexRow navBar">
        <RouterLink :to="{ name: 'accueil' }">Accueil</RouterLink>
        <RouterLink :to="{ name: 'personnages' }">Personnages</RouterLink>
        <RouterLink :to="{ name: 'favoris' }">Favoris</RouterLink>
        <RouterLink :to="{ name: 'recherche' }">Recherche</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
nav {
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  padding: 1rem;
  font-family: space-grotesk;
  font-weight: 900;
  font-size: 2rem;
  color: #2d4a3a;
}

nav a:hover {
  color: #aefeff;
}

nav .tonic {
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
}

.logoHeader {
  justify-content: center;
  align-items: center;
}

.navBar {
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: #42ca81;
  border-bottom: solid #42b4ca 0.125rem;
}

nav a.router-link-exact-active:hover {
  color: #aefeff;
}

.logo {
  min-width: 300px;
}
</style>
