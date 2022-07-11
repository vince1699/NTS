<template>
    <form @submit="onSubmit" class="update-task">
        <div class="form-control">
            <label>Supervisor : </label>
            <input type="text" name="supervisor" v-model="this.taskNew.supervisor" placeholder="Name of the supervisor?">
        </div>
        <div class="form-control">
            <label>Priority : </label>
            <input type="text" name="priority" v-model="this.taskNew.priority" placeholder="Priority of the task?">
        </div>
        <div class="form-control">
            <legend>Select if the task is obligatory or optional:</legend>
            <div>
                <input type="radio" v-model="this.taskNew.type1" name="type" value="type1" checked>
                <label for="type1">Obligatory</label>
            </div>
            <div>
                <input type="radio" v-model="this.taskNew.type2" name="type" value="type2">
                <label for="type2">Optional</label>
            </div>
        </div>    
        <div class="form-control">
            <label>Comment : </label>
            <textarea name="comment" v-model="this.taskNew.comment" placeholder="Any comments?"></textarea>
        </div>
        <div class="form-control">
            <label>Date planned : </label>
            <input type="date" name="datePlan" v-model="this.taskNew.datePlan" >
        </div>
        <div class="form-control">
            <label for="new-select">Select the status : </label>
                <select v-model="this.taskNew.status" name="status" id="status" >
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
            taskNew: Object,
        },
        data(){
            return{                
                supervisor: '',
                priority: '',
                type: [],
                comment: '',
                datePlan:'',
                status:'program',
                type1:true,
                type2:false,
            }
        },
        methods:{
            
            onSubmit(e){
                e.preventDefault()
                if(!this.taskNew.priority){
                    alert('Please select a priority')
                    return
                }

                if(this.taskNew.type1==true){
                    this.taskNew.type="obligatory";
                }
                else{this.taskNew.type="optional"}
                const Task = {
                    id:this.taskNew.id,
                    idTask: this.taskNew.idTask,
                    idNewcomer:this.taskNew.idNewcomer,
                    category:this.taskNew.category,
                    name:this.taskNew.name,
                    supervisor:this.taskNew.supervisor,
                    priority:this.taskNew.priority,
                    type:this.taskNew.type,
                    comment: this.taskNew.comment,
                    datePlan: this.taskNew.datePlan,
                    status:this.taskNew.status,
                }

                this.$emit('update-task',Task)

                this.priority = ''
                this.supervisor = ''
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
