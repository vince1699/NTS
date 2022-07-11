<template>
    <div class="parent">
        <i class="first">
            {{taskNew.name}}
        </i>
        <i class="second">
            {{taskNew.supervisor}}
        </i>
        <i class="third">
            {{taskNew.priority}}
        </i>
        <i class="second">
            {{taskNew.type}}
        </i>
        <i class="second">
            {{taskNew.comment}}
        </i>
        <i class="second">
            {{taskNew.datePlan}}
        </i>
        <i class="second" v-if="taskNew.status=='done'" style="color:green">
            Done
        </i>
        <i class="second" v-if="taskNew.status=='program'" style="color:gray">
            To Program
        </i>
        <i class="second" v-if="taskNew.status=='planned'" style="color:yellow">
            Planned / In Progress
        </i>
        <i @click="showUpdate()" class="fas fa-cogs"></i>
        <i @click="$emit('delete-task',taskNew.id)" class="fas fa-times"></i>
    </div>
    <div id="update" v-show="showUpdateTask">        
        <UpdateTaskToNew2 @update-task="updateTaskToNew" :taskNew="taskNew"  />
    </div>

</template>

<script>
    import UpdateTaskToNew2 from '../components/UpdateTaskToNew2.vue';
    import axios from "axios";


    export default {
        name:'TaskToNew',
        props: {
            taskNew: Object,
        },
        components : {
            UpdateTaskToNew2,
        },
        data(){
            return {
                showUpdateTask:false,
            };
        },
        methods:{
            updateTaskToNew(data) {
                if(confirm('Are you sure?')){
                    return (axios.put(`http://localhost:3000/tasksNew/${data.id}`, data))
                }
            },
            showUpdate(){
                this.showUpdateTask =!this.showUpdateTask
            }
        },
        emits:['delete-task'],
        
    }
</script>

<style scoped>
    .first{
        width: 30%;
        min-width: 250px;
    }

    .second{
        width: 12%;
        min-width: 125px;
    }

    .third{
        width: 2%;
        min-width: 20px;
    }
    #update{
        width: 100%;
    }

</style>