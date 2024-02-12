import { ref, watchEffect } from "vue"

export default function getPersoByName(){

    const inputRecherche = ref('');
    const listeResultats = ref([]);
    const aucunResultatMsg = ref('');

    const rechercher = async (input)=>{
        if (input.trim() === '') //on vérifie si le nom n'est pas vide.
        {
            listeResultats.value = [];
            aucunResultatMsg.value = '';
            return;
        }

        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(input)}`)
            console.log(response);
            const data = await response.json();
            console.log(data); // Log the data to see if it's what you expect
            if (data.results && data.results.length > 0){
                console.log(listeResultats.value);
                listeResultats.value = data.results;
                aucunResultatMsg.value = '';
            } else{
                listeResultats.value = [];
                aucunResultatMsg.value = 'Aucun personnage trouvé. Veuillez réessayer.'
                console.log(aucunResultatMsg.value); // Verify it's being updated
            }
        } catch (error) {
            console.log('Erreur lors de la requête:', error);
            aucunResultatMsg.value = 'Échec lors de la requête. Veuillez réessayer.'
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

    return { inputRecherche,
            listeResultats,
            aucunResultatMsg
    };
}