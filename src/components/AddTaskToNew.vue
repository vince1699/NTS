<template>
    <form @submit="onSubmit" class="add-task-to-new">
        <div class="form-control">
            <label for="new-select">List of newcomers : </label>
                <select v-model="choice" name="newcomerList" id="new-select" >
                    <option value=""> -- Choose a newcomer --</option>
                    <option v-bind:value="{id:newcomer.id}" :key="newcomer.id" v-for="newcomer in newcomers" >{{newcomer.firstname}} - {{newcomer.surname}}</option>
                </select>
        </div>
        <div class="form-control">
            <label for="new-select">Task to add : </label>
                <select v-model="chosenTask" name="task" id="task" >
                    <option value="" selected> -- Choose a task --</option>
                    <option v-bind:value="{id:task.id}" :key="task.id" v-for="task in tasks" >{{task.name}}</option>
                </select>
        </div>
        
        <div class="form-control">
            <legend>Select if the task is obligatory or optional:</legend>
            <div>
                <input type="radio" v-model="type1" name="type" value="type1" checked>
                <label for="type1">Obligatory</label>
            </div>
            <div>
                <input type="radio" v-model="type2" name="type" value="type2">
                <label for="type2">Optional</label>
            </div>
        </div>    
        <div class="form-control">
            <label>Comment : </label>
            <textarea name="comment" v-model="comment" placeholder="Any comments?"></textarea>
        </div>
        <div class="form-control">
            <label>Date planned : </label>
            <input type="date" name="datePlan" v-model="datePlan" >
        </div>
        <div class="form-control">
            <label for="new-select">Select the status : </label>
                <select v-model="status" name="status" id="status" >
                    <option value=""> -- Choose a status --</option>
                    <option value="program"> To program </option>
                    <option value="planned"> In process / Planned </option>
                    <option value="done"> Done </option>
                </select>
        </div>                 
        <input type="submit" value="Add Task" class="btn">
    </form>
</template>

<script>

    export default{
        name: 'AddTaskToNew',
        props:{
            tasks:Array,
            newcomers:Array,
        },
        data(){
            return{
                chosenTask: '',
                type: [],
                comment: '',
                datePlan:'',
                status:'program',
                type1:true,
                type2:false,
                choice: '',
            }
        },
        methods:{
            
            onSubmit(e){
                e.preventDefault()
                if(!this.chosenTask){
                    alert('Please select a task')
                    return
                }

                if(this.type1==true){
                    this.type="obligatory";
                }
                else{this.type="optional"}
                const Task = {
                    idTask: this.chosenTask.id,
                    idNewcomer:this.choice.id,
                    type:this.type,
                    comment: this.comment,
                    datePlan: this.datePlan,
                    status:this.status,
                }

                this.$emit('add-task-to-new',Task)

                this.chosenTask = ''
                this.choice = ''
                this.type = []
                this.comment = ''
                this.datePlan = ''
                this.status = 'program'

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

    input[type="submit"]{
        height: 50px;
        width: auto;
        font-size: 20px;
    }

</style>
