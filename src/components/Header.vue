<script>
import { store } from '../store';

export default{
    data() {
        return {
        store,
        }
  },
  components: {
  
  }

}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid justify-content-between">
            <a class="navbar-brand" href="#">Navbar</a>
            <form class="d-flex" role="search">
        <input class="form-control me-2" v-model="store.filmSearchValue" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" @click.prevent="$emit('search')">Search</button>
    </form>
        </div>
    </nav>
</template>

<style >

</style>
