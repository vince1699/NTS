<template>
    <form @submit="onSubmit" class="update-category">
        <div class="form-control ">
            <label>Name : </label>
            <input class="large" type="text" name="name" v-model="this.category.name"> 
        </div>              
        <input type="submit" value="Update Category" class="btn">
        <Button type="button" @click="$emit('show-update')" :text="'Close'"  :color="'#9a0000'"/>     
    </form>
</template>

<script>
    import Button from '../components/Button.vue';
   
    export default{
        name: 'UpdateCategory',
        props:{
            category:Object,
        },
        components : {
            Button,
        },
        data(){
            return{
                id:null,
                name: '',
            }
        },
        methods:{
            
            onSubmit(e){
                e.preventDefault()
                if(!this.category){
                    alert('Select a category')
                    return
                }

                const Category = {
                    id:this.category.id,
                    name: this.category.name,
                }

                this.$emit('update-category',Category)

                this.name = ''
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
