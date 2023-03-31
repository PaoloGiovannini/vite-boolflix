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
        <p>{{ title }}</p>
        <p v-if="original_title !== title">{{ original_title }}</p>
        <p>{{ original_language}}</p>
        <p>{{ vote }}</p>
    </div>


</template>


<style scoped lang="scss">


</style>