<script>
import{ store } from '../store.js';
import Appcard from './AppCard.vue'

export default{
    name: 'MyMain',
    components: {
        Appcard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <main>
        <h2 v-if="store.filmArray.length <= 0">Inserisci un film/serie tv</h2>
        <div class="container d-flex">
            <div class="card"  v-for="(film, index) in store.filmArray" :key="index">
                
                <Appcard  
                    :title="film.title"
                    :original_title="film.original_title"
                    :original_language="film.original_language"
                    :vote="film.vote_average"
                    
                />                 
            </div>
        </div>
    </main>

</template>


<style scoped lang="scss">
main{
    background-color: grey;
    .container{
        flex-wrap: wrap;
        max-width: 1170px;
        margin: auto;
    }
    .card{
            width: calc(100% / 5 - 10px);
            margin: 10px 5px; 
        }
   
}

</style>