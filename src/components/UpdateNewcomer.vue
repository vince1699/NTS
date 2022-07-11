<template>
    <form @submit="onSubmit" class="update-newcomer">
        <div class="form-control">
        <label for="new-select">List of newcomers : </label>
            <select v-model="choice" name="newcomerList" id="new-select" >
                <option value=""> -- Choose a newcomer --</option>
                <option v-bind:value="{id:newcomer.id,firstname:newcomer.firstname,surname:newcomer.surname,mail:newcomer.email,intern:newcomer.intern,external:newcomer.external}" :key="newcomer.id" v-for="newcomer in newcomers"  >{{newcomer.firstname}} - {{newcomer.surname}}</option>
            </select>
        </div>
        <div class="form-control">
            <label>Firstname : </label>
            <input type="text" name="firstname" v-model="this.choice.firstname"> 
        </div>
        <div class="form-control">
            <label>Surname : </label>
            <input type="text" name="surname" v-model="this.choice.surname"> 
        </div>
        <div class="form-control">
            <label>Mail : </label>
            <input type="mail" name="mail" v-model="this.choice.mail">
        </div>               
        <input type="submit" value="Update Newcomer" class="btn">
    </form>
</template>

<script>

    export default{
        name: 'UpdateNewcomer',
        props:{
            tasks:Array,
            newcomers:Array,
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
                if(!this.choice){
                    alert('Select a newcomer')
                    return
                }

                const Newcomer = {
                    id:this.choice.id,
                    firstname: this.choice.firstname,
                    surname: this.choice.surname,
                    email: this.choice.mail,
                    intern: this.choice.intern,
                    external: this.choice.external,
                }

                this.$emit('update-newcomer',Newcomer)

                this.chosenTask = '',
                this.firstname = '',
                this.surname = '',
                this.email = '',
                this.choice = ''

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
