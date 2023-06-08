<script>
import { store } from './../store.js'
import axios from 'axios';
import Stars from './Stars.vue';

export default {
    data() {
        return {
            store,
        }
  },

  components:{
    Stars
  },

  methods: {
    //metodo per rendere maiuscola la :src per la bandiera
    // toUppercase(film){
    //     let prova = film.original_language.toUpperCase();
    //     return prova;
    // },
    lang(film){
        let myLang = film.original_language;
        // .replace('en', 'us');
        if(myLang === "en"){
            myLang = "gb-eng"
        }
        if(myLang === "ja"){
            myLang = "jp"
        }
        else{
            myLang
        }
        return myLang;
    },

    stars(film){
        return Math.round(film.vote_average / 2).toFixed();
    }
  
},

    computed:{
        
    }
}
</script>

<!-- https://api.themoviedb.org/3/configuration/languages?api_key=e99307154c6dfb0b4750f6603256716d -->

<template>
                
    <div class="col-md-3 d-flex" v-for="film in store.filmsList.results">
        <!--Creare componente film singolo -->
        <div class="card">
            <div class="card-body" @click="toUppercase">
                <img class="img-fluid" :src="`${store.imgPrefix}${film.poster_path}`" alt="">
                <h5 class="card-title">{{film.title}}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ film.original_title }}</h6>
                <span id="stelle" class="card-text me-3">
                    <Stars :counter="stars(film)" /></span>
                <!-- <img :src="`https://flagsapi.com/${toUppercase(film)}/flat/64.png`"> -->
                <img :src="`https://flagcdn.com/${lang(film)}.svg`" width="20" onerror="this.remove()" :alt="film.original_language">
            </div>
        </div>
    </div>

</template>

<style lang="scss">

</style>