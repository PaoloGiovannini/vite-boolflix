<script>
import{ store } from '../store.js';
export default{
    data(){
        return{
            store
        }
    },
    name: 'AppCard',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote: Number,
        image: String,
        description: String
    }
}
</script>

<template>
    <div>
        
        
        <div class="flip-card">
            <div class="flip-card-inner">

                <div class="flip-card-front">
                    <img v-if="image !== null" class="poster" :src="'https://image.tmdb.org/t/p/w342' + image" :alt = title>
                    <img v-else class="poster" src="https://placehold.co/224x336.png" alt="placeholder foto">
                </div>

                <div class="flip-card-back">
                    <ul>
                        <li>Titolo: {{ title }}</li>
                        <li v-if="original_title !== title">Titolo originale:{{ original_title }}</li>
                        <li>
                            <img class="flag" v-if="original_language == 'it'" src="https://flagsapi.com/IT/flat/64.png" alt="it">
                            <img class="flag" v-else-if="original_language == 'en'" src="https://flagsapi.com/GB/flat/64.png" alt="us">
                            <img class="flag" v-else-if="original_language == 'de'" src="https://flagsapi.com/DE/flat/64.png" alt="de">
                            <img class="flag" v-else-if="original_language == 'ja'" src="https://flagsapi.com/JP/flat/64.png" alt="jp">
                            <p v-else>Lingua originale: {{ original_language }}</p>
                        </li>
                        <li>
                            <span id="star" v-for="(i, index) in 5" :key="index">
                            <i v-if="i <= Math.ceil(vote / 2)" class="fa-solid fa-star"></i>
                            <i v-if="i > Math.ceil(vote / 2)" class="fa-regular fa-star"></i>
                        </span>
                        </li>
                        <li>
                            <p>{{ description }}</p>
                        </li>
                        <h3>Cast:</h3>
                        <li class="column" v-if="store.castArray.length > 0" >
                            <p v-for="(cast, index) in store.castArray.slice(0,5)" :key="index">{{ cast.name }}</p></li>
                        <li class="column" v-else-if="store.castSerie.length > 0">
                            <p v-for="(element, index) in store.castSerie.slice(0,5)" :key="index">{{ element.name }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>       
    </div>

</template>

<style scoped lang="scss">
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 336px;
  perspective: 1000px;
    &:hover .flip-card-inner {
        transform: rotateY(180deg);
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

        .flip-card-back {
            background-color: #2980b9;
            color: white;
            transform: rotateY(180deg);
            padding: 30px 0px;
            overflow-y: scroll;
            & .column{
                    flex-direction: column;
                }
            .flag{
                width: 20px;
                padding: 10px 0px;
            }
            ul li{
                list-style: none;
                display: flex;
                justify-content: center;
                margin: 10px 0px;
                & i{
                    color: goldenrod;
                }
                
            }
        }
        
        .flip-card-front {
            background-color: #bbb;
            color: black;
            .poster{
                width: 100%;
                height: 100%;
            }
        }
        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
    }
}

</style>