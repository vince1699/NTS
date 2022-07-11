<template>
    <i class="first">
        {{task.name}}
    </i>
    <i class="second">
        {{task.supervisor}}
    </i>
    <i class="third">
        {{task.priority}}
    </i>
    <i @click="onDelete(task.id)" class="fas fa-times"></i>
</template>
<script>

export default {
    name:'Task',
    props: {
        task: Object,
    },
    methods:{
        onDelete(id) {
            this.$emit('delete-task', id)
        },
    }
}
</script>

<style scoped>

    .first{
        width: 40%;
        min-width: 650px;
    }

    .second{
        width: 8%;
        min-width: 150px;
    }

    .third{
        width: 2%;
        min-width: 20px;
    }

</style>