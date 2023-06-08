<script>

export default {
    setup () {
        

        return {}
    },

    props: {
        counter: Function,
    }

    // methods: {
    //     starsGen(vote){
    //         for(let i = 0; i <= vote; i++){

    //         }
    //     }
    // }
}
</script>

<template>
    <div class="stars-container">
        <i v-for="(stars, i) in 5" class="bi" :class="i <= counter ? 'bi-star-fill' : 'bi-star'"></i>
    </div> 
</template>

<style lang="scss">
    .stars-container{
        color: #F4C430;
    }
</style>