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
    <FilmList class="bg-dark h-100 overflow-auto"/>
    
</template>

<style lang="scss">

#app{
  height: calc(100vh - 66px);
}

</style>
