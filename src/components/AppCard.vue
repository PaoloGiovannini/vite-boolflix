<script>
export default{
    name: 'AppCard',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote: Number
    }
}
</script>

<template>
    <div>
        <p>titolo: {{ title }}</p>
        <p v-if="original_title !== title">titolo originale:{{ original_title }}</p>
        <img v-if="original_language == 'it'" src="https://flagsapi.com/IT/flat/64.png" alt="it">
        <img v-else-if="original_language == 'en'" src="https://flagsapi.com/GB/flat/64.png" alt="us">
        <img v-else-if="original_language == 'de'" src="https://flagsapi.com/DE/flat/64.png" alt="de">
        <img v-else-if="original_language == 'ja'" src="https://flagsapi.com/JP/flat/64.png" alt="jp">
        <p v-else>original language: {{ original_language }}</p>
        <p>voto medio: {{ vote }}</p>
    </div>


</template>


<style scoped lang="scss">

img{
    width: 20px;
}
</style>