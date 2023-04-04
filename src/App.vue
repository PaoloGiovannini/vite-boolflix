<script>
import axios from 'axios';
import{ store } from './store.js';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue'
export default{
  components:{
    MyHeader,
    MyMain
  },
    data() {
        return {
            store
        };
    },
    methods: {
      getFilm(){
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79fa47aa93f64aa97d20631a74952dff&query=${store.search}&language=it-IT`)
        .then(response => {
          this.store.filmArray = response.data.results;
          
        });
      },
      getSerie(){
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=79fa47aa93f64aa97d20631a74952dff&query=${store.search}&language=it-IT`)
        .then(response => {
          this.store.serieArray = response.data.results;
          
        });
      },
      getAll(){
        this.getFilm();
        this.getSerie();
      },
      getGenreFilm(){
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=79fa47aa93f64aa97d20631a74952dff')
          .then(response => {
            this.store.genresArray = response.data.genres;
          })
      },

    },
    created(){
      this.getGenreFilm();
      }
    
    
}
</script>

<template>

  <MyHeader @doSearch="getAll" />
  <MyMain/>

</template>

<style lang="scss">
@use './styles/general.scss';

</style>

