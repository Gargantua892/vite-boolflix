<script>
import { store } from './../store.js'
import Film from './Film.vue';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
  },
    components:{
        Film
    },

}
</script>

<template>
    <div class="filmList p-5 bg-dark">
        <div class="row g-3">
            <h2 class="text-white">Film</h2>
            <Film v-for="film in store.filmsList.results" :filmProp="film"/>
        </div>
        <div class="row g-3 mt-5">
            <h2 class="text-white">TV Series</h2>
            <Film v-for="series in store.seriesList.results" :filmProp="series"/>
        </div>
    </div>
   
</template>

<style lang="scss" scoped>

</style>