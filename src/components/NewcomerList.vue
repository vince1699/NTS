<template>
    <div :key="newcomer.id" v-for="newcomer in newcomers">
        <Newcomer @toggle-intern="$emit('toggle-intern',newcomer.id)" @delete-newcomer="$emit('delete-newcomer',newcomer.id)" :newcomer="newcomer"/>
    </div>
</template>
<script>

    import Newcomer from "./Newcomer";

    export default {
        name:"Newcomers",
        props: {
            newcomers:Array,
        },
        components:{
            Newcomer,
        },
        emits:['delete-newcomer', 'toggle-intern'],
    }
</script>

<style scoped>

</style>