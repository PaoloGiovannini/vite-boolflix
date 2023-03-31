<script>
import axios from 'axios';
import{ store } from './store.js';
import MyHeader from './components/MyHeader.vue';

export default{
  components:{
    MyHeader
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
      }
    },
    created(){
      this.getFilm();
    }
    
}
</script>

<template>

  <MyHeader @doSearch="getFilm"/>

</template>

<style lang="scss">
@use './styles/general.scss';

</style>

