<template>
    <div class="parent">
        <i class="first">
            {{task.name}}
        </i>
        <i class="second">
            {{task.supervisor}}
        </i>
        <i class="third">
            {{task.priority}}
        </i>
        <i @click="showUpdate()" class="fas fa-cogs"></i>
        <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i>
    </div>
    <div id="update" v-show="showUpdateTask">        
        <UpdateTask @update-task="updateTask" @show-update="showUpdate" :task="task"  />
    </div>
</template>
<script>

import UpdateTask from '../components/UpdateTask.vue';
import axios from "axios";


export default {
    name:'Task',
    props: {
        task: Object,
    },
    components : {
            UpdateTask,
    },
    data(){
        return{
            showUpdateTask:false,
        }
    },
     methods:{
            showUpdate(){
                this.showUpdateTask =!this.showUpdateTask
            },
            updateTask(data) {
                if(confirm('Are you sure?')){
                    this.showUpdateTask =!this.showUpdateTask
                    return (axios.put(`http://localhost:3000/tasks/${data.id}`, data))
                }
            },
     },
    emits:['delete-task'],

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