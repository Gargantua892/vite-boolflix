import { reactive } from "vue"

export const store = reactive({
    //Api per chiamare tutti i film
    allFilmsApi: "https://api.themoviedb.org/3/search/movie",

    //Chiave per far funzionare le API
    myApiKey: "?api_key=82aa0260bc86c93d9e09ac808331317b&query=",

    filmsList: [],

    //Valore variabile associato al v-model del componente "searchBar.vue"
    filmSearchValue: "",
});