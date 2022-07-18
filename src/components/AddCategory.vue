<template>
    <form @submit="onSubmit" class="add-category">
        <div class="form-control">
            <label>Name : </label>
            <input type="text" name="name" v-model="name" placeholder="Name of the category">
        </div>              
        <input type="submit" value="Save Category" class="btn">
    </form>
</template>

<script>
    export default{
        name: 'AddCategory',
        data(){
            return{
                name: '',
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault()
                if(!this.name){
                    alert('Please add a category')
                    return
                }

                const Category = {
                    name: this.name,
                }

                this.$emit('add-category',Category)

                this.name = ''
            }
        }
    }
</script>

<style scoped>
    

    input[type=text],input[type=mail],input[type=number]{
        background-color: white;
        width:40%;
        height: 28px;
        font-size: 24px;
    }

</style>
