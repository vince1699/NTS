<template>
    <form @submit="onSubmit" class="add-task">
        <div class="form-control">
            <label>Task name : </label>
            <input type="text" name="name" v-model="name" placeholder="Name of the task">
        </div>
        <div class="form-control">
            <label>Task supervisor : </label>
            <input type="text" name="supervisor" v-model="supervisor" placeholder="Supervisor of the task">
        </div>
        <div class="form-control">
            <label>Task priority : </label>
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

    input[type=text],input[type=mail],input[type=number]{
        background-color: white;
        width:40%;
        height: 28px;
        font-size: 24px;
    }

</style>
