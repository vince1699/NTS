<template>
    <section>

    <div id="fond">
        <div id="form">
            <h1 v-if="mode == 'login'">Connexion</h1>
            <h1 v-else>Inscription</h1>
            <p v-if="mode == 'login'">Tu n'as pas encore de compte ? <button id="change" @click="switchToCreateAccount()"><span>Créer un compte</span></button></p>
            <p v-else>Tu as déjà un compte ? <button id="change" @click="switchToLogin()"><span >Se connecter</span></button></p>
            <div>
                <input v-model="email" type="text" placeholder="Adresse mail"/>
            </div>
            <div v-if="mode == 'create'">
                <input v-model="prenom" type="text" placeholder="Prénom"/>
                <input v-model="nom" type="text" placeholder="Nom"/>
            </div>
            <div>
                <input v-model="password" type="password" placeholder="Mot de passe"/>
            </div>
            <div v-if="mode == 'login' && status == 'error_login'" >
            Adresse mail et/ou mot de passe invalide
            </div>
            <div v-if="mode == 'create' && status == 'error_create'">
            Adresse mail déjà utilisée
            </div>
            <div>
                <button @click="login()" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
                    <span v-if="status == 'loading'">Connexion en cours...</span>
                    <span v-else>Connexion</span>
                </button>
                <button @click="createAccount()" :class="{'button--disabled' : !validatedFields}" v-else>
                    <span v-if="status == 'loading'">Création en cours...</span>
                    <span v-else>Créer mon compte</span>
                </button>
            </div>
        </div>
    </div>
    <!--
    <div id="fond">
        <form class="connect">
            <button click="deconnect()">Se déconnecter</button>
        </form>
    </div>
    -->
    </section>
</template>

<script>

import axios from 'axios';



export default {
    name: "login",
    data: function(){
        return{
            mode:"login",
            email: "",
            nom:"",
            prenom:"",
            password:"",
            status:"lol",
        }
    },
    computed: {
        validatedFields: function(){
            if(this.mode=="create"){
                if (this.email != "" && this.prenom != "" && this.nom != "" && this.password != "" ){
                    return true;
                }
                else {
                    return false;
                }
            }
            else{
                if(this.email != "" && this.password != ""){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    },
    methods: {
        switchToCreateAccount: function (){
            this.mode = 'create';
        },
        switchToLogin: function (){
            this.mode = 'login';
        },
        async fetchUsers(){
                const res = await fetch('http://localhost:3000/register')
                const data = await res.json()
                return(data)
            }, 
        login(){
            const data = {
                nom:this.nom,
                prenom:this.prenom,
                email:this.email,
                password:this.password,
            };
            console.log(data);
        } ,
        createAccount(){
            const data = {
                nom:this.nom,
                prenom:this.prenom,
                email:this.email,
                password:this.password,
            };
            const token = jwt.sign( process.env.TOKEN);
            axios.post('http://localhost:3000/register',data,token)
                

                .then(
                    res=>{
                        console.log(res)
                    }
                ).catch(
                err=> {
                    console.log(err)
                }
            )
            this.mode = 'login';
        },
        async created(){
            this.users = await this.fetchUsers();
        },     
    }  
}
</script>


<style scoped>
    #fond{
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        padding:30px 0;
        font-size: 24px;
        width: 700px;
        margin-top: 10% !important;
        height: 500px;
        margin:auto;
        vertical-align: middle;
        border: solid 5px #182757;
        border-radius: 30px;
        background-color: rgba(165, 187, 235, 0.8);
    }

    #form{
        margin-left: 10%;
    }

    p{
        font-style: italic;
    }
    input {
        width: 50%;
        height: 40px;
    }
    input,button{
        font-size: 20px;
        margin: 2%;
        border: 2px solid #182757;
        color: white;
        background-color: #182757;
    }

    input[type=submit],input[type=reset]{
        border-radius: 10px;
        width: 25%;
        cursor: pointer;
    }
    button{
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
    }
    input[type=submit]:hover,input[type=reset]:hover,button:hover{
        border: 2px solid white;
    }

    ::placeholder {
        color: white;
    }

    input[type=number]:focus,input[type=text]:focus,input[type=password]:focus{
        border: 2px solid white;
        border-radius: 5px;
        outline: none;
    } 
    #change{
        width:30%;
    }

    .button--disabled {
        background:#cecece;
        color:#182757;
    }
    .button--disabled:hover {
        cursor:not-allowed;
        background:#cecece;
    }

</style>