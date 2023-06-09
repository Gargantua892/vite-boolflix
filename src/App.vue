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
    <main class="bg-dark h-100">
      <div class="container-fluid background h-100 d-flex align-items-center justify-content-center" v-if="store.isActive === false">
        <div class="row">
          <div class="col-12 text-center">
            <img src="./assets/Logo.png" alt="" width="300">
            <h2 class="text-white text-uppercase my-3">Il meglio dell'intrattenimento <br>in una sola app</h2>
            <p class="text-white">Inizia subito a navigare il nostro catalogo</p>
          </div>
        </div>
      </div>
      <FilmList class="overflow-auto" v-if="store.isActive"/>
    </main>
    
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

h2, h3, h4, h5{
  font-family: 'bebas neue';
}
 

.background{
  background-image: linear-gradient(55deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.810529065349544) 61%, rgba(0,0,0,0.3029302811550152) 100%), url('https://blog.vpncity.com/wp-content/uploads/2020/01/xx.png');
}

#app{
  height: calc(100vh - 66px);
}

</style>
