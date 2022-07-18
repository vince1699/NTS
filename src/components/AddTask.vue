<template>
    <form @submit="onSubmit" class="add-task">
        <div class="form-control">
            <label>Name : </label>
            <input type="text" name="name" v-model="name" placeholder="Name of the task">
        </div>
        <div class="form-control">
            <label>Supervisor : </label>
            <input type="text" name="supervisor" v-model="supervisor" placeholder="Supervisor of the task">
        </div>
        <div class="form-control">
            <label>Priority : </label>
            <input type="number" name="priority" v-model="priority" placeholder="Task priority">
        </div>
        <div class="form-control">
            <label for="category">Select the status : </label>
                <select v-model="category" name="category" id="category" >
                    <option value=""> -- Choose a category --</option>
                    <option value="admini"> Administrative </option>
                    <option value="discov"> Discovery </option>
                    <option value="other"> Others </option>
                </select>
        </div> 
        <div class="form-control">
            <legend>Select the types of employees for whom the task will be automatically integrated:</legend>
            <div>
                <input type="checkbox" v-model="auto1" name="auto1" value="auto1" checked>
                <label for="auto1">Intern</label>
            </div>
            <div>
                <input type="checkbox" v-model="auto2" name="auto2" value="auto2">
                <label for="auto2">External</label>
            </div>
        </div>                  
        <input type="submit" value="Save Task" class="btn">
    </form>
</template>

<script>
    export default{
        name: 'AddTask',
        data(){
            return{
                name: '',
                supervisor: '',
                priority: 1,
                category:'',
                auto: [],
                auto1:true,
                auto2:false
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault()
                if(!this.name){
                    alert('Please add a task')
                    return
                }

                const Task = {
                    name: this.name,
                    supervisor: this.supervisor,
                    priority: this.priority,
                    category:this.category,
                    auto: [this.auto1,this.auto2],
                }

                this.$emit('add-task',Task)

                this.name = ''
                this.supervisor = ''
                this.priority = 1
                this.category = ''
                this.auto = []
            }
        }
    }
</script>

<style scoped>
    

    input[type=text],input[type=mail],input[type=number]{
        background-color: white;
        width:40%;
        height: 28px;
        font-size: 24px;
    }

</style>
