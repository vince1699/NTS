<template>
    <form @submit="onSubmit" class="add-newcomer">
        <div class="form-control">
            <label>Newcomer firstname : </label>
            <input type="text" name="firstname" v-model="firstname" placeholder="Firstname of the newcomer">
        </div>
        <div class="form-control">
            <label>Newcomer surname : </label>
            <input type="text" name="surname" v-model="surname" placeholder="Surname of the newcomer">
        </div>
        <div class="form-control">
            <label>Newcomer mail : </label>
            <input type="mail" name="email" v-model="email" placeholder="aafee@somfy.com">
        </div>
        <div class="form-control">
            <legend>Select a newcomer function:</legend>
            <div>
                <input type="checkbox" v-model="intern" name="intern" value="intern" checked>
                <label for="intern">Intern</label>
            </div>
            <div>
                <input type="checkbox" v-model="external" name="external" value="external">
                <label for="external">External</label>
            </div>
        </div>                  
        <input type="submit" value="Save Newcomer" class="btn">
    </form>
</template>

<script>
    export default{
        name: 'AddNewcomer',
        data(){
            return {
                firstname: '',
                surname: '',
                email: '',
                intern: true,
                external: false,
            }
        },
        methods:{
            
            onSubmit(e){
                e.preventDefault()
                if(!this.firstname){
                    alert('Please add a newcomer')
                    return
                }

                const newComer = {
                    firstname: this.firstname,
                    surname: this.surname,
                    email: this.email,
                    intern: this.intern,
                    external: this.external,
                }

                this.$emit('add-newcomer',newComer)

                this.firstname = ''
                this.surname = ''
                this.email = ''
                this.intern = true
                this.external = false
            }
        }
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

    input[type=text],input[type=mail]{
        background-color: #f8f8f8;
        width:40%;
        height: 28px;
        font-size: 24px;
    }

</style>
