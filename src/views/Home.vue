<template>
  <section >
        <h1>Les Arrivants du moment </h1>
        <Button @btn-click="showAdd" :showAddNewcomer="showAddNewcomer" :text="showAddNewcomer ? 'Close' : 'Add Newcomer'"  :color="showAddNewcomer ? '#9a0000' : '#008c64'"/>
        <Button @btn-click="showUpdate" :showUpdateNewcomer="showUpdateNewcomer" :text="showUpdateNewcomer ? 'Close' : 'Update Newcomer'"  :color="showUpdateNewcomer ? '#9a0000' : '#df6800'"/>
        <div v-show="showAddNewcomer">        
            <AddNewcomer @add-newcomer="addNewcomer"/>
        </div>
        <div v-show="showUpdateNewcomer">        
            <UpdateNewcomer @update-newcomer="updateNewcomer"  :newcomers="newcomers" />
        </div>
        <Newcomers v-if="showAddNewcomer==false && showUpdateNewcomer==false" @delete-newcomer="deleteNewcomer" @toggle-intern="toggleIntern" :newcomers="newcomers"/>
        <Newcom ref='componentN' v-show="false"/>
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
    import Newcomers from '../components/NewcomerList.vue';
    import Newcom from './Newcomers.vue';
    import AddNewcomer from '../components/AddNewcomer.vue';
    import UpdateNewcomer from '../components/UpdateNewcomer.vue';
    import axios from "axios";


    export default{
        name:'Home',
        props : {
            title : String,
        },
        components : {
            Button,
            Newcom,
            Newcomers,
            AddNewcomer,
            UpdateNewcomer,
        },
        data(){
            return{
                tasks:[],
                newcomers:[],
                showAddNewcomer:false,
                showUpdateNewcomer:false,
            }
        },
        methods:{
            deleteNewcomer(id){
                if(confirm('Are you sure?')){
                    this.newcomers = this.newcomers.filter((newcomer) => newcomer.id !==id)
                    return (axios.delete(`http://localhost:3000/newcomers/${id}`))                
                }
            },
            toggleIntern(id){
                this.newcomers = this.newcomers.map((newcomer) => newcomer.id === id ? {...newcomer, intern: !newcomer.intern }:newcomer)
            },
            async addNewcomer(newcomer){
                const res = await fetch('http://localhost:3000/newcomers', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(newcomer),
                    
                })
                const data = await res.json()
                this.newcomers = [...this.newcomers,data]
                const t=this.tasks
                for (const i in t){
                    if(newcomer.intern==true){
                        if(t[i].auto1==true){
                            const taskToNewcomer = {
                                idTask: t[i].id,
                                idNewcomer:data.id,
                            }
                            this.$refs.componentN.addTaskToNew(taskToNewcomer);
                        }
                    }
                }
            },
            updateNewcomer(data) {
                if(confirm('Are you sure?')){
                    
                    return (axios.put(`http://localhost:3000/newcomers/${data.id}`, data))
                }
            },

            showAdd(){
                this.showAddNewcomer =!this.showAddNewcomer
            },
            showUpdate(){
                this.showUpdateNewcomer =!this.showUpdateNewcomer
            },
            async fetchNewcomers(){
                const res = await fetch('http://localhost:3000/newcomers')
                const data = await res.json()
                return(data)
            },
        },
        async created(){
            this.newcomers = await this.fetchNewcomers();
            this.tasks = await this.$refs.componentN.fetchTasks();
        }
    }

</script>
