<template>
    <div :key="category.id" v-for="category in categories">
        <div class="parent">
            <i class="firstTN">
                {{category.name}}
            </i>
            <i @click="showUpdate" class="fas fa-cogs"></i>
            <i @click="$emit('delete-category',category.id)" class="fas fa-times"></i>
        </div>
        <div id="update" v-show="showUpdateCat">        
            <UpdateCategory @update-category="updateCategory" @show-update="showUpdate" :category="category"  />
        </div>
    </div>
    

</template>

<script>
    import axios from "axios";
    import UpdateCategory from '../components/UpdateCategory.vue';


    export default {
        name:'CategoryList',
        props: {
            categories: Object,
        },
        components : {
            UpdateCategory,
        },
        data(){
            return {
                showUpdateCat:false,
            };
        },
        methods:{
            updateCategory(data) {
                if(confirm('Are you sure?')){
                    return (axios.put(`http://localhost:3000/categories/${data.id}`, data))
                }
            },
            showUpdate(){
                this.showUpdateCat =!this.showUpdateCat
            }
        },
        emits:['delete-category'],
        
    }
</script>

<style scoped>
    #update{
        width: 100%;
    }

</style>