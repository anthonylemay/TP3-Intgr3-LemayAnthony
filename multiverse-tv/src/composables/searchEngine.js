import { ref, watchEffect } from "vue";

export default function getPersoByName() {
  const inputRecherche = ref("");
  const listeResultats = ref([]);
  const aucunResultatMsg = ref("");

  const rechercher = async (input) => {
    if (input.trim() === "") {
      //on vérifie si le nom n'est pas vide.
      listeResultats.value = [];
      aucunResultatMsg.value = "";
      return;
    }

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
          input
        )}`
      ); // rend le prompt url friendly
      console.log(response);
      const data = await response.json();
      // console.log(data);
      if (data.results && data.results.length > 0) {
        console.log(listeResultats.value);
        listeResultats.value = data.results;
        aucunResultatMsg.value = "";
      } else {
        listeResultats.value = [];
        aucunResultatMsg.value = "Aucun personnage trouvé. Veuillez réessayer.";
        //   console.log(aucunResultatMsg.value);
      }
    } catch (error) {
      console.log("Erreur lors de la requête:", error);
      aucunResultatMsg.value = "Échec lors de la requête. Veuillez réessayer.";
    }
  };

  let delaisApi;

  watchEffect(() => {
    console.log("watchEffect triggered", inputRecherche.value);
    clearTimeout(delaisApi);
    delaisApi = setTimeout(() => {
      rechercher(inputRecherche.value);
    }, 500);
  });

  return { inputRecherche, listeResultats, aucunResultatMsg };
}
