import { reactive } from "vue"

export const store = reactive({
    

    //Api per chiamare tutti i film
    allFilmsApi: "https://api.themoviedb.org/3/search/movie",

    //Api per chiamare tutte le serie tv
    allSeriesApi: "https://api.themoviedb.org/3/search/tv",

    //Chiave per far funzionare le API
    myApiKey: "?api_key=82aa0260bc86c93d9e09ac808331317b&query=",

    imgPrefix: "https://image.tmdb.org/t/p/w500/",

    filmsList: [],

    seriesList: [],

    mixList: [],

    //Valore variabile associato al v-model del componente "searchBar.vue"
    searchValue: "",
});