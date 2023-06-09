<script>
import { store } from '../store';
import SearchModule from './SearchModule.vue';
import axios from 'axios'

export default{
    data() {
        return {
        store,
        }
  },
  components: {
    SearchModule
},
methods: {

//Metodo che chiama le API dei film
getApi(){
  let filmUrl = `${store.allFilmsApi}${store.myApiKey}${store.searchValue}`;
  let tvUrl = `${store.allSeriesApi}${store.myApiKey}${store.searchValue}`;

  axios.get(filmUrl)
    .then(res => {
      store.filmsList = (res.data);
    })
    .catch( err => {
      console.log(err);
  });

  axios.get(tvUrl)
    .then(res => {
      store.seriesList = res.data;
    })
    .catch( err => {
      console.log(err);
    });

  },

},

created() {
this.getApi();
}



}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid justify-content-between px-5">
            <a class="navbar-brand" href="#">
              <img src="./../assets/Logo.png" alt="logo" height="40">
            </a>
            <!-- Componente che richiama il modulo search -->
            <SearchModule @search="getApi"/>
        </div>
    </nav>
</template>

<style >

</style>
