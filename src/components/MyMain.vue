<script>
import axios, { Axios, AxiosHeaders } from 'axios';
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
    },
    methods: {
        getCastMovie(id){
            store.castSerie = [];
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=79fa47aa93f64aa97d20631a74952dff`)
                .then(response =>{
                this.store.castArray=response.data.cast;
            });
        },
        getCastSerie(id){
            store.castArray = [];
            axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=79fa47aa93f64aa97d20631a74952dff`)
                .then(response =>{
                    this.store.castSerie=response.data.cast;
                });
        },
    }
}
</script>

<template>

    <main>
        <h1 v-if="store.filmArray.length <= 0">Inserisci un film/serie tv</h1>
        <h1 v-if="store.filmArray.length > 0">FILM</h1>
        <div class="container d-flex">
            
            <div class="card"  v-for="film in store.filmArray" :key="film.id" @mouseover="getCastMovie(film.id)">
                
                <Appcard  
                    :title="film.title"
                    :original_title="film.original_title"
                    :original_language="film.original_language"
                    :vote="film.vote_average"
                    :image="film.poster_path"
                    :description="film.overview"
                    :genre="film.genre_ids"
                />                 
            </div>
        </div>
        <h1 v-if="store.serieArray.length > 0">SERIE TV</h1>
        <div class="container d-flex">
            
            <div class="card"  v-for="(serie, index) in store.serieArray" :key="serie.id" @mouseover="getCastSerie(serie.id)">
                
                <Appcard  
                    :title="serie.name"
                    :original_title="serie.original_name"
                    :original_language="serie.original_language"
                    :vote="serie.vote_average"
                    :image="serie.poster_path"
                    :description="serie.overview"
                    :genre="serie.genre_ids"
                />                 
            </div>
        </div>

    </main>

</template>


<style scoped lang="scss">
main{
    background-color: grey;
    & h1{
        padding: 20px;
    }
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