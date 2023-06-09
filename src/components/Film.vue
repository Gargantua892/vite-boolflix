<script>
import { store } from '../store';
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
    },
},

props: {
    filmProp: Object,
},
}
</script>

<!-- https://api.themoviedb.org/3/configuration/languages?api_key=e99307154c6dfb0b4750f6603256716d -->

<template>
    <div class="col-md-4 col-lg-3 d-flex" v-if="filmProp.poster_path">
        <!--Creare componente film singolo -->
        <div class="card border-dark position-relative overflow-hidden" v-if="filmProp.title || filmProp.original_name">
            <img class="object-fit-cover h-100 poster" :src="`${store.imgPrefix}${filmProp.poster_path}`" alt="">
            <div class="h-100 d-flex flex-column justify-content-between card-content">
                <div class="card-body overflow-auto">
                    <h4 v-if="filmProp.title" class="card-title">{{filmProp.title}}</h4>
                    <h4 v-else>{{filmProp.original_name}}</h4>
                    <h6 v-if="filmProp.title !== filmProp.original_title" class="mb-2 text-secondary">{{ filmProp.original_title }}</h6>
                    <p>{{ filmProp.overview }}</p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                    <span id="stelle" class="card-text me-3">
                        <Stars :counter="stars(filmProp)" />
                    </span>
                    <img class="shadow-sm" :src="`https://flagcdn.com/${lang(filmProp)}.svg`" width="20" onerror="this.remove()" :alt="filmProp.original_language">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card-content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: linear 0.2s;

    &:hover{
        background-color: black;
        opacity: 1;
    }
    .card-body{
        color: #fff;

        height: 6px;

    }

}

</style>