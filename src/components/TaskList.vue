<template>
    <div id="tab"> 
        <h1 style="color:black"> Administrative </h1>
        <div :key="task.id" v-for="task in tasks">
            <div class="parent"  v-if="task.category=='administrative'">
                <Task @delete-task="$emit('delete-task',task.id)" :task="task"/>
            </div>
        </div>
        <h1 style="color:black"> Discovery </h1>
        <div :key="task.id" v-for="task in tasks">
            <div class="parent" v-if="task.category=='discovery'">
                <Task @delete-task="$emit('delete-task',task.id)" :task="task"/>
            </div>
        </div>
    </div>
</template>
<script>
    import Task from "./Task";

    export default {
        name:"Tasks",
        props: {
            tasks:Array,
        },
        components:{
            Task,
        },
        emits:['delete-task'],
    }
</script>

<style scoped>
    div{
        cursor: pointer;
        color:white;
    }
</style>