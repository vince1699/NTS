<template>
    <form @submit="onSubmit" class="update-task">
        <div class="form-control">
        <label for="task-select">List of tasks : </label>
            <select v-model="chosenTask" name="taskList" id="task-select" >
                <option value=""> -- Choose a task --</option>
                <option v-bind:value="{id:task.id,name:task.name,supervisor:task.supervisor,priority:task.priority,category:task.category,auto1:task.auto1,auto2:task.auto2}" :key="task.id" v-for="task in tasks"  >{{task.name}}</option>
            </select>
        </div>
        <div class="form-control">
            <label>Name of the task : </label>
            <input type="text" name="name" v-model="this.chosenTask.name"> 
        </div>
        <div class="form-control">
            <label>Surpervisor : </label>
            <input type="text" name="surpervisor" v-model="this.chosenTask.supervisor"> 
        </div>
        <div class="form-control">
            <label>Priority : </label>
            <input type="mail" name="priority" v-model="this.chosenTask.priority">
        </div>
        <div class="form-control">
            <label for="category">Select the status : </label>
                <select v-model="this.chosenTask.category" name="category" id="category" >
                    <option value=""> -- Choose a category --</option>
                    <option value="admini"> Administrative </option>
                    <option value="discov"> Discovery </option>
                    <option value="other"> Others </option>
                </select>
        </div>   
        <legend>Select the types of employees for whom the task will be automatically integrated:</legend>
            <div>
                <input type="checkbox" name="auto1" v-model="this.chosenTask.auto1" >
                <label for="auto1">Intern</label>
            </div>
            <div>
                <input type="checkbox" name="auto2" v-model="this.chosenTask.auto2">
                <label for="auto2">External</label>
            </div>               
        <input type="submit" value="Update Task" class="btn">
    </form>
</template>

<script>

    export default{
        name: 'UpdateTask',
        props:{
            tasks:Array,
        },
        data(){
            return{
                id:null,
                name: '',
                surpervisor: '',
                priority: '',
                category: '',
                auto1: this.auto1,
                auto2: this.auto2,
                chosenTask: '',
            }
        },
        methods:{
            
            onSubmit(e){
                e.preventDefault()
                if(!this.chosenTask){
                    alert('Select a task')
                    return
                }

                const Task = {
                    id:this.chosenTask.id,
                    name: this.chosenTask.name,
                    supervisor: this.chosenTask.supervisor,
                    category : this.chosenTask.category,
                    priority: this.chosenTask.priority,
                    auto1: this.chosenTask.auto1,
                    auto2: this.chosenTask.auto2,
                }

                this.$emit('update-task',Task)

                this.chosenTask = '',
                this.name = '',
                this.supervisor = '',
                this.priority = '',
                this.category = '',
                this.chosenTask = ''

            }
        },
    }
</script>

<style scoped>
    form{
        font-size: 28px;
        border: 5px solid #041647;
        padding: 20px;
        margin: 10px;
        width:40%;
        box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.7);
    }

    div{
        margin: 10px 5px;
    }

    input:not([type="radio"]),select,textarea{
        background-color: white;
        width:40%;
        height: 32px;
        font-size: 24px;
    }

    input[type="radio"], input[type="checkbox"] {
        height: 20px !important;
        width: 20px;
        margin-right: 20px;
    }

    input[type="submit"]{
        height: 50px;
        width: auto;
        font-size: 20px;
    }

</style>
