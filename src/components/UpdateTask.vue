<template>
    <form @submit="onSubmit" class="update-task">
        <div class="form-control ">
            <label>Name : </label>
            <input class="large" type="text" name="name" v-model="this.task.name"> 
        </div>
        <div class="form-control">
            <label>Surpervisor : </label>
            <input type="text" name="surpervisor" v-model="this.task.supervisor"> 
        </div>
        <div class="form-control short">
            <label>Priority : </label>
            <input type="mail" name="priority" v-model="this.task.priority">
        </div>
        <div class="form-control">
            <label for="category">Select the category : </label>
                <select v-model="this.task.category" name="category" id="category" >
                    <option value=""> -- Choose a category --</option>
                    <option value="administrative"> Administrative </option>
                    <option value="discovery"> Discovery </option>
                    <option value="other"> Others </option>
                </select>
        </div>   
        <legend>Select the types of employees for whom the task will be automatically integrated:</legend>
            <div>
                <input type="checkbox" name="auto1" v-model="this.task.auto1" >
                <label for="auto1">Intern</label>
            </div>
            <div>
                <input type="checkbox" name="auto2" v-model="this.task.auto2">
                <label for="auto2">External</label>
            </div>               
        <input type="submit" value="Update Task" class="btn">
        <Button type="button" @click="$emit('show-update')" :text="'Close'"  :color="'#9a0000'"/>     
    </form>
</template>

<script>
    import Button from '../components/Button.vue';
   
    export default{
        name: 'UpdateTask',
        props:{
            task:Object,
        },
        components : {
            Button,
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
                if(!this.task){
                    alert('Select a task')
                    return
                }

                const Task = {
                    id:this.task.id,
                    name: this.task.name,
                    supervisor: this.task.supervisor,
                    category : this.task.category,
                    priority: this.task.priority,
                    auto1: this.task.auto1,
                    auto2: this.task.auto2,
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
        emits:['show-update']

    }
</script>

<style scoped>


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
    .large{
        width:60% !important;
    }

</style>
