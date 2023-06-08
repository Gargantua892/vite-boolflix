<script>
import { store } from './store.js'
import Header from './components/Header.vue';
import SearchModule from './components/SearchModule.vue';
import FilmList from './components/FilmList.vue';
import Film from './components/Film.vue';


// import Footer from './components/Footer.vue';

export default{
  components: {
    Header,
    SearchModule,
    FilmList,
    Film,
},
data() {
    return {
      store,
    }
  },
}

</script>

<template>
    <Header />
    <FilmList />
    <div class="container">
      <div class="row">
        <div class="col-6">
          <pre>{{ store.filmsList }}</pre> 
        </div>
        <div class="col-6">
          <pre>{{ store.seriesList }}</pre> 
        </div>

        <div class="col-12">
          <pre>{{  }}</pre> 
        </div>
      </div>
    </div>
       
</template>

<style scoped>

</style>
