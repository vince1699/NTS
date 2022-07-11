<template>
    <form @submit="onSubmit" class="update-task-to-new">
        <div class="form-control">
            <label for="taskToNew">Task to add : </label>
                <select v-model="chosenTask" name="taskToNew" id="taskToNew" >
                    <option value="" selected> -- Choose a task --</option>
                    <option v-bind:value="{id:taskNew.id,idNewcomer:taskNew.idNewcomer,name:taskNew.name,supervisor:taskNew.supervisor,priority:taskNew.priority,type1:taskNew.type1,type2:taskNew.type2,
                    comment:taskNew.comment,datePlan:taskNew.datePlan,status:taskNew.status}" :key="taskNew.id" v-for="taskNew in tasksNew" >{{taskNew.name}} - {{taskNew.idNewcomer}}</option>
                </select>
        </div>
        <div class="form-control">
            <label>Supervisor : </label>
            <input type="text" name="supervisor" v-model="this.chosenTask.supervisor" placeholder="Name of the supervisor?">
        </div>
        <div class="form-control">
            <label>Priority : </label>
            <input type="text" name="priority" v-model="this.chosenTask.priority" placeholder="Priority of the task?">
        </div>
        <div class="form-control">
            <legend>Select if the task is obligatory or optional:</legend>
            <div>
                <input type="radio" v-model="this.chosenTask.type1" name="type" value="type1" checked>
                <label for="type1">Obligatory</label>
            </div>
            <div>
                <input type="radio" v-model="this.chosenTask.type2" name="type" value="type2">
                <label for="type2">Optional</label>
            </div>
        </div>    
        <div class="form-control">
            <label>Comment : </label>
            <textarea name="comment" v-model="this.chosenTask.comment" placeholder="Any comments?"></textarea>
        </div>
        <div class="form-control">
            <label>Date planned : </label>
            <input type="date" name="datePlan" v-model="this.chosenTask.datePlan" >
        </div>
        <div class="form-control">
            <label for="new-select">Select the status : </label>
                <select v-model="this.chosenTask.status" name="status" id="status" >
                    <option value=""> -- Choose a status --</option>
                    <option value="program"> To program </option>
                    <option value="planned"> In process / Planned </option>
                    <option value="done"> Done </option>
                </select>
        </div>                 
        <input type="submit" value="Update Task" class="btn">
    </form>
</template>

<script>

    export default{
        name: 'UpdateNewcomer',
        props:{
            tasksNew:Array,
        },
        data(){
            return{
                chosenTask: '',
                type: [],
                supervisor: '',
                priority: '',
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
                    id:this.chosenTask.id,
                    idTask: this.idTask,
                    idNewcomer:this.idNewcomer,
                    supervisor:this.supervisor,
                    priority:this.priority,
                    type:this.type,
                    comment: this.comment,
                    datePlan: this.datePlan,
                    status:this.status,
                }

                this.$emit('update-task',Task)

                this.chosenTask = ''
                this.priority = ''
                this.supervisor = ''
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
