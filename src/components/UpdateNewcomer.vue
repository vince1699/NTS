<template>
    <form @submit="onSubmit" class="update-newcomer">
        <div class="form-control">
            <label>Firstname : </label>
            <input type="text" name="firstname" v-model="this.newcomer.firstname"> 
        </div>
        <div class="form-control">
            <label>Surname : </label>
            <input type="text" name="surname" v-model="this.newcomer.surname"> 
        </div>
        <div class="form-control">
            <label>Mail : </label>
            <input type="mail" name="mail" v-model="this.newcomer.email">
        </div>         
        <input type="submit" value="Update Newcomer" class="btn">        
        <Button type="button" @click="$emit('show-update')" :text="'Close'"  :color="'#9a0000'"/>
    </form>
</template>

<script>
    import Button from '../components/Button.vue';

    export default{
        name: 'UpdateNewcomer',
        props:{
            newcomer:Object,
        },
        components : {
            Button,
        },
        data(){
            return{
                id:null,
                firstname: '',
                surname: '',
                email: '',
                intern: this.intern,
                external: this.external,
                choice: '',

            }
        },
        methods:{
            
            onSubmit(e){
                e.preventDefault()
                if(!this.newcomer.firstname){
                    alert('Select a newcomer')
                    return
                }

                const Newcomer = {
                    id:this.newcomer.id,
                    firstname: this.newcomer.firstname,
                    surname: this.newcomer.surname,
                    email: this.newcomer.email,
                    intern: this.newcomer.intern,
                    external: this.newcomer.external,
                }

                this.$emit('update-newcomer',Newcomer)

                this.chosenTask = '',
                this.firstname = '',
                this.surname = '',
                this.email = '',
                this.choice = ''

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

    input[type="submit"]{
        height: 50px;
        width: auto;
        font-size: 20px;
    }

</style>
