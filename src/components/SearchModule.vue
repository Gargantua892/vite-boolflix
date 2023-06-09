<script>
import { store } from '../store';

export default{
    data() {
        return {
        store,
        }
  },

  methods: {

  changestateTrue(){
      store.isActive = true;
    },
    changestateFalse(){
      store.isActive = false;
    }
  }

}
</script>

<template>
    <form class="d-flex" role="search">
        <!-- Input con valore collegato allo store -->
        <input class="form-control me-2" v-model="store.searchValue" type="search" placeholder="Search" aria-label="Search" @click="changestateFalse()">
        <!-- Emit personalizzato per far partire la chiamata API -->
        <button class="btn btn-outline-danger" type="submit" @click.prevent="$emit('search')" @click="changestateTrue()">Search</button>
    </form>
</template>

<style >

</style>
