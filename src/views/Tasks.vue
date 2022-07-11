<template>
  <section >
        <Button @btn-click="showAdd" :showAddTask="showAddTask" :text="showAddTask ? 'Close' : 'Add Task'"  :color="showAddTask ? '#9a0000' : '#008c64'"/>
        <Button @btn-click="showUpdate" :showUpdateTask="showUpdateTask" :text="showUpdateTask ? 'Close' : 'Update Task'"  :color="showUpdateTask ? '#9a0000' : '#df6800'"/>
        <div v-show="showAddTask">        
            <AddTask @add-task="addTask"/>
        </div>
        <div v-show="showUpdateTask">        
            <UpdateTask @update-task="updateTask"  :tasks="tasks" />
        </div>
        <Tasks v-if="showAddTask==false && showUpdateTask==false" @delete-task="deleteTask" :tasks="tasks"/>

  </section>
</template>

<style scoped>
    h1{
        margin-top:150px;
        margin-left: 20px;;
    }

</style>
  
<script>
    import Button from '../components/Button.vue';
    import Tasks from '../components/TaskList.vue';
    import AddTask from '../components/AddTask.vue';
    import UpdateTask from '../components/UpdateTask.vue';
    import axios from "axios";


    export default{
        name:'Home',
        props : {
            title : String,
        },
        components : {
            Button,
            Tasks,
            AddTask,
            UpdateTask,
        },
        data(){
            return{
                tasks:[],
                showAddTask:false,
                showUpdateTask:false,
            }
        },
        methods:{
            deleteTask(id){
                if(confirm('Are you sure?')){
                    this.tasks = this.tasks.filter((task) => task.id !==id)
                    return (axios.delete(`http://localhost:3000/tasks/${id}`)) 
                }
            },
        
            async addTask(task){
                const res = await fetch('http://localhost:3000/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(task),

                })
                const data = await res.json()
                this.tasks = [...this.tasks,data]
            },
            updateTask(data) {
                if(confirm('Are you sure?')){
                    return (axios.put(`http://localhost:3000/tasks/${data.id}`, data))
                }
            },
            showAdd(){
                this.showAddTask =!this.showAddTask
            },
            showUpdate(){
                this.showUpdateTask =!this.showUpdateTask
            },
            async fetchTasks(){
                const res = await fetch('http://localhost:3000/tasks')
                const data = await res.json()
                return(data)
            },
        },
        async created(){
            this.tasks = await this.fetchTasks()
        }
    }

</script>
