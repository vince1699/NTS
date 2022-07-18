<template>
    <div class="parent">
        <i class="firstTN">
            {{taskNew.name}}
        </i>
        <i class="secondTN">
            {{taskNew.supervisor}}
        </i>
        <i class="thirdTN">
            {{taskNew.priority}}
        </i>
        <i class="secondTN">
            {{taskNew.type}}
        </i>
        <i class="secondTN">
            {{taskNew.comment}}
        </i>
        <i class="secondTN">
            {{taskNew.datePlan}}
        </i>
        <i class="secondTN" v-if="taskNew.status=='done'" style="color:green">
            Done
        </i>
        <i class="secondTN" v-if="taskNew.status=='program'" style="color:gray">
            To Program
        </i>
        <i class="secondTN" v-if="taskNew.status=='planned'" style="color:yellow">
            Planned / In Progress
        </i>
        <i @click="showUpdate()" class="fas fa-cogs"></i>
        <i @click="$emit('delete-task',taskNew.id)" class="fas fa-times"></i>
    </div>
    <div id="update" v-show="showUpdateTask">        
        <UpdateTaskToNew2 @update-task="updateTaskToNew" @show-update="showUpdate" :taskNew="taskNew"  />
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
    #update{
        width: 100%;
    }

</style>