<template>
  <section >
        <Button @btn-click="showAdd" :showAddTask="showAddTask" :text="showAddTask ? 'Close' : 'Add Task'"  :color="showAddTask ? '#9a0000' : '#008c64'"/>
        <div v-show="showAddTask">        
            <AddTask @add-task="addTask"/>
        </div>
        <div v-if="showAddTask==false" class="header">
            <i class="first">
                Name
            </i>
            <i class="second">
                Supervisor
            </i>
            <i class="third">
                Priority
            </i>
        </div>
        <Tasks v-if="showAddTask==false" @delete-task="deleteTask" :tasks="tasks"/>

  </section>
</template>

<style scoped>
    h1{
        margin-top:150px;
        margin-left: 20px;;
    }
    
    .first{
        width: 38%;
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
  
<script>
    import Button from '../components/Button.vue';
    import Tasks from '../components/TaskList.vue';
    import AddTask from '../components/AddTask.vue';

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
                this.showAddTask =!this.showAddTask
            },
            
            showAdd(){
                this.showAddTask =!this.showAddTask
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
