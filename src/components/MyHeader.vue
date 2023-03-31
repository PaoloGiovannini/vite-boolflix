<script>
import{ store } from '../store.js';

export default{
    name: 'MyHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="d-flex justify-between" id="my-header">
        <h2>BOOLFLIX</h2>
        <div>
            <input type="search" placeholder="cerca film o serie" v-model="store.search">
            <button @click="$emit('doSearch')">Cerca</button>
        </div>
        
    </div>
</template>

<style scoped lang="scss">

#my-header{
    background-color: black;
    padding: 20px;
    & input{
        padding: 5px 20px;
        margin-right: 7px;
    }
    & button{
        padding: 7px 10px;
        background-color: red;
        border: 1px solid black;
    }
    & h2{
        color: red;
    }
}
</style>