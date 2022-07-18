<template>
    <div @dblclick="$emit('toggle-intern', newcomer.id)" class="parent" :class="[newcomer.intern ? 'intern' : '','newcomer']">
        <i class="firstN">
            {{newcomer.firstname}}
        </i>
        <i class="secondN">
            {{newcomer.surname}}
        </i>
        <i class="thirdN">
            {{newcomer.email}}
        </i>
        <i @click="showUpdate()" class="fas fa-cogs"></i>
        <i @click="$emit('delete-newcomer', newcomer.id)" class="fas fa-times"></i>
    </div> 
    <div v-show="showUpdateNewcomer">        
        <UpdateNewcomer @update-newcomer="updateNewcomer" @show-update="showUpdate" :newcomer="newcomer" />
    </div>
</template>

<script>

import UpdateNewcomer from '../components/UpdateNewcomer.vue';
import axios from "axios";

export default {
    name:'Newcomer',
    props: {
        newcomer: Object,
    },
    components : {
            UpdateNewcomer,
    },
    data(){
        return{
            showUpdateNewcomer:false,
        }
    },
    methods:{
        updateNewcomer(data) {
            if(confirm('Are you sure?')){
                this.showUpdateNewcomer =!this.showUpdateNewcomer
                return (axios.put(`http://localhost:3000/newcomers/${data.id}`, data))
            }
        },
        showUpdate(){
            this.showUpdateNewcomer =!this.showUpdateNewcomer
        },
    },
    emits : ['toggle-intern','delete-newcomer'],
}
</script>

<style scoped>
    .intern{
        border-left: 10px solid #4ed680;
    }
</style>