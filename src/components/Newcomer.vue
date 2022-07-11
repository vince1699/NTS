<template>
    <div @dblclick="$emit('toggle-intern', newcomer.id)" class="parent" :class="[newcomer.intern ? 'intern' : '','newcomer']">
        <i class="first">
            {{newcomer.firstname}}
        </i>
        <i class="second">
            {{newcomer.surname}}
        </i>
        <i class="third">
            {{newcomer.email}}
        </i>
        <i @click="onDelete(newcomer.id)" class="fas fa-times"></i>
    </div> 
</template>
<script>

export default {
    name:'Newcomer',
    props: {
        newcomer: Object,
    },
    methods:{
        onDelete(id) {
            this.$emit('delete-newcomer', id)
        },
    }
}
</script>

<style scoped>
    .intern{
        border-left: 10px solid #4ed680;
    }

    .first{
        width: 10%;
        min-width: 150px;
    }

    .second{
        width: 10%;
        min-width: 150px;
    }

    .third{
        width: 20%;
        min-width: 300px;
    }
</style>