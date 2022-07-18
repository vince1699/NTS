<template>
  <section>
    <br>
    <Button @btn-click="showAdd" :showAddCat="showAddCat" :text="showAddCat ? 'Close' : 'Add Category'"  :color="showAddCat ? '#9a0000' : '#008c64'"/>
    <div v-show="showAddCat">        
        <AddCategory @add-category="addCategory" :categories="categories" />
    </div>
    
    <div v-if="showAddCat==false">
        <label for="new-select">List of categories : </label>
            <select v-model="choice" name="cateogryList" id="new-select" >
                <option value=""> -- Choose a category --</option>
                <option v-bind:value="{id:category.id}" :key="category.id" v-for="category in categories" >{{category.name}}</option>
            </select>
        
        <div class="header">
            <i class="TN">
                Name
            </i>
        </div>
    </div>
    <Category v-if="showAddCat==false" @delete-category="deleteCategory" :categories="categories"/>
    <br>
  </section>
</template>

<style scoped>
    .TN{
        width: 27%;
        min-width: 250px;
    }
    .short{
        width: 4%;
        min-width: 50px;
    }

    section{
        font-size: 24px;
        margin-top:150px;
        margin-left: 20px;
        
    }
    select{
        width: 20%;
        height: 32px;
        font-size: 24px;
        margin-bottom: 20px;
    }

</style>
  
<script>
    import Button from '../components/Button.vue';
    import AddCategory from '../components/AddCategory.vue';
    import Category from '../components/CategoryList.vue';
    
    import axios from "axios";


    export default{
        name:'Home',
        props : {
            title : String,
        },
        components : {
            Button,
            AddCategory,
            Category,

        },
        data(){
            return {
                categories:[],
                showAddCat:false,
                choice:'',
            };
        },
        methods:{
            async fetchCategories(){
                const res = await fetch('http://localhost:3000/categories')
                const data = await res.json()
                return(data)
            },  
            async addCategory(category){
                const res = await fetch('http://localhost:3000/categories', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(category),

                })
                const data = await res.json()
                this.categories = [...this.categories,data]
                this.showAddCat =!this.showAddCat
            },
            deleteCategory(id){
                if(confirm('Are you sure?')){
                    this.categories = this.categories.filter((category) => category.id !==id)
                    return (axios.delete(`http://localhost:3000/categories/${id}`)) 
                }
            },
            showAdd(){
                this.showAddCat =!this.showAddCat
            },
        },
        async created(){
            this.categories = await this.fetchCategories();
        },
    }

</script>
