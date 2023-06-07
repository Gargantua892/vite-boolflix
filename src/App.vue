<script>
import { store } from './store.js'
import axios from 'axios'
import Header from './components/Header.vue';

// import Footer from './components/Footer.vue';

export default{
  components: {
    Header
},
data() {
    return {
      store,
    }
  },
  methods: {

    //Metodo che chiama le API dei film
    getFilms(){

      let myUrl = `${store.allFilmsApi}${store.myApiKey}${store.filmSearchValue}`;
      
      // if(store.filmSearchValue !== ""){
      //   // myUrl = `${myUrl}?archetype=${store.filterModel}`;
      //   myUrl
      // }

      console.log(myUrl)

      axios.get(myUrl)
      .then(res => {
        store.filmsList = res.data;
      })
      .catch( err => {
        console.log(err);
      })
    },
  },
  created() {
    this.getFilms();
  }
}

</script>

<template>
    <Header @search="getFilms"/>
     <!--Creare componente filmList  -->
    <div class="filmList">

      <!--Creare componente film singolo -->
      <div class="films" v-for="film in store.filmsList.results">
        <p>{{ film.original_title }}</p>
      </div>
    </div>

       <!-- <pre>{{ store.filmsList }}</pre>  -->
</template>

<style scoped>

</style>
