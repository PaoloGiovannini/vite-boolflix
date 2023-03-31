<script>
export default{
    name: 'AppCard',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote: Number,
        image: String
    }
}
</script>

<template>
    <div>
        <img v-if="image !== null" class="poster" :src="'https://image.tmdb.org/t/p/w342' + image" :alt = title>
        <img v-else class="poster" src="https://placehold.co/224x336.png" alt="placeholder foto">
        <p>titolo: {{ title }}</p>
        <p v-if="original_title !== title">titolo originale:{{ original_title }}</p>
        <img v-if="original_language == 'it'" src="https://flagsapi.com/IT/flat/64.png" alt="it">
        <img v-else-if="original_language == 'en'" src="https://flagsapi.com/GB/flat/64.png" alt="us">
        <img v-else-if="original_language == 'de'" src="https://flagsapi.com/DE/flat/64.png" alt="de">
        <img v-else-if="original_language == 'ja'" src="https://flagsapi.com/JP/flat/64.png" alt="jp">
        <p v-else>original language: {{ original_language }}</p>
        <p>voto medio: {{ Math.ceil(vote / 2) }}</p>

        <span v-for="(i, index) in 5" :key="index">
            <i v-if="i <= Math.ceil(vote / 2)" class="fa-solid fa-star"></i>
            <i v-if="i > Math.ceil(vote / 2)" class="fa-regular fa-star"></i>
        </span>
        
    </div>


</template>


<style scoped lang="scss">

img{
    width: 20px;
}

.poster{
    width: 100%;
}
</style>