<template>
  <section>
    <br>
    <Button @btn-click="showAdd" :showAddTask="showAddTask" :text="showAddTask ? 'Close' : 'Add Task To Newcomer'"  :color="showAddTask ? '#9a0000' : '#008c64'"/>
    <Button @btn-click="showUpdate" :showUpdateTask="showUpdateTask" :text="showUpdateTask ? 'Close' : 'Update Task'"  :color="showUpdateTask ? '#9a0000' : '#df6800'"/>
    <div v-show="showAddTask">        
        <AddTaskToNew @add-task-to-new="addTaskToNew" :tasks="tasks" :newcomers="newcomers" />
    </div>
    <div v-show="showUpdateTask">        
        <UpdateTaskToNew @update-task="updateTaskToNew"  :tasksNew="tasksNew" />
    </div>
    <div v-if="showAddTask==false && showUpdateTask==false">
        <label for="new-select">List of newcomers : </label>
            <select v-model="choice" name="newcomerList" id="new-select" >
                <option value=""> -- Choose a newcomer --</option>
                <option v-bind:value="{id:newcomer.id}" :key="newcomer.id" v-for="newcomer in newcomers" >{{newcomer.firstname}} - {{newcomer.surname}}</option>
            </select>
    </div>

    <h1 style="color:black"> Administrative </h1>
    <div :key="taskNew.id" v-for="taskNew in tasksNew">
        <div v-if="taskNew.category=='administrative' && this.choice.id==taskNew.idNewcomer">
            <TaskToNew @delete-task="deleteTask" :taskNew="taskNew"/>
        </div>
    </div>
    <h1 style="color:black"> Discovery </h1>
    <div :key="taskNew.id" v-for="taskNew in tasksNew">
        <div v-if="taskNew.category=='discovery' && this.choice.id==taskNew.idNewcomer">
            <TaskToNew @delete-task="deleteTask" :taskNew="taskNew"/>
        </div>
    </div>
    <br>
  </section>
</template>

<style scoped>
    .first{
        width: 30%;
        min-width: 250px;
    }

    .second{
        width: 8%;
        min-width: 125px;
    }

    .third{
        width: 2%;
        min-width: 20px;
    }

    section{
        font-size: 24px;
        margin-top:150px;
        margin-left: 20px;
        
    }
    select{
        width: 20%;
        height: 32px;
        font-size: 24px;
        margin-bottom: 20px;
    }

</style>
  
<script>
    import Button from '../components/Button.vue';
    import Newcomers from '../components/NewcomerList.vue';
    import AddTaskToNew from '../components/AddTaskToNew.vue';
    import UpdateTaskToNew from '../components/UpdateTaskToNew.vue';
    import TaskToNew from '../components/TaskToNew.vue';
    import axios from "axios";


    export default{
        name:'Home',
        props : {
            title : String,
        },
        components : {
            Button,
            Newcomers,
            AddTaskToNew,
            UpdateTaskToNew,
            TaskToNew,
        },
        data(){
            return {
                tasks:[],
                newcomers:[],
                tasksNew:[],
                showAddTask:false,
                showUpdateTask:false,
                chosenTask:'',
                choice:'',
            };
        },
        methods:{
            async fetchNewcomers(){
                const res = await fetch('http://localhost:3000/newcomers')
                const data = await res.json()
                return(data)
            },  
            async fetchTasks(){
                const res2 = await fetch('http://localhost:3000/tasks')
                const data2 = await res2.json()
                return(data2)
            },     
            async fetchTasksNew(){
                const res3 = await fetch('http://localhost:3000/tasksNew')
                const data3 = await res3.json()
                return(data3)
            },
            async addTaskToNew(tasksNew){
                const gestionnaire1 = {};

                const infoTask=this.tasks.filter(task =>task.id == tasksNew.idTask);
                const t =JSON.parse(JSON.stringify(infoTask[0]))
                const data2 = {...tasksNew,...t};
                delete data2.id;
                delete data2.auto1;
                delete data2.auto2;
                
                const dataCompleted = new Proxy(data2,gestionnaire1)

                const res = await fetch('http://localhost:3000/tasksNew', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(dataCompleted),

                })
                const data = await res.json()
                this.tasksNew = [...this.tasksNew,data]
            },
            updateTaskToNew(data) {
                if(confirm('Are you sure?')){
                    return (axios.put(`http://localhost:3000/tasksNew/${data.id}`, data))
                }
            },
            deleteTask(id){
                if(confirm('Are you sure?')){
                    this.tasksNew = this.tasksNew.filter((taskNew) => taskNew.id !==id)
                    return (axios.delete(`http://localhost:3000/tasksNew/${id}`)) 
                }
            },
            showAdd(){
                this.showAddTask =!this.showAddTask
            },
            showUpdate(){
                this.showUpdateTask =!this.showUpdateTask
            },
        },
        async created(){
            this.newcomers = await this.fetchNewcomers();
            this.tasks = await this.fetchTasks();
            this.tasksNew = await this.fetchTasksNew();
        },
    }

</script>
