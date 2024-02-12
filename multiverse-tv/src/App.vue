<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navHeader from './components/navHeader.vue'
import navFooter from './components/navFooter.vue';

</script>

<template>
  <navHeader/>
  <RouterView />
  <navFooter/>
</template>

<style>
@font-face{
  font-family: get-schwifty;
  src: url(./assets/fonts/get_schwifty.ttf);
}

@font-face{
  font-family: space-grotesk;
  src: url(./assets/fonts/SpaceGrotesk-VariableFont_wght.ttf);
}

@font-face{
  font-family: jost;
  src: url(./assets/fonts/Jost-VariableFont_wght.ttf);
}

@font-face{
  font-family: jost-italic;
  src: url(./assets/fonts/Jost-Italic-VariableFont_wght.ttf);
}

html{
    background-color: #011B1A;
}

#app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.container{
  margin: 0 auto;
  max-width: 1280px;
}


.flex{
  display:flex;
}

.flexCol{
  display:flex;
  flex-direction: column;
}

.flexRow{
  display:flex;
  flex-direction: row;
}

.tonic{
  font-family: get-schwifty;
}

</style>
