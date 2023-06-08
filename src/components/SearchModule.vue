<script>
import { store } from '../store';

export default{
    data() {
        return {
        store,
        }
  },

}
</script>

<template>
    <form class="d-flex" role="search">
        <!-- Input con valore collegato allo store -->
        <input class="form-control me-2" v-model="store.searchValue" type="search" placeholder="Search" aria-label="Search">
        <!-- Emit personalizzato per far partire la chiamata API -->
        <button class="btn btn-outline-danger" type="submit" @click.prevent="$emit('search')">Search</button>
    </form>
</template>

<style >

</style>
