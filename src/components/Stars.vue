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
    <i class="bi bi-star-fill position-absolute" v-for="stars in counter"></i>
    <i class="bi bi-star" v-for="stars in 5"></i>
</template>

<style lang="scss">

</style>