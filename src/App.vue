<template id="app">
  <div>
    <div id="navigation1" >
      <nav>
        <ul>
            
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/newcomers">Newcomers</router-link>
            </li>
            <li>
                <router-link to="/tasks">Tasks</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <div id="log">
                <router-link to="/"><img src="../src/assets/logo.png"></router-link>
            </div>
        </ul>
    </nav>
    </div>
    <router-view/>
    
  </div>  
</template>

<style>

    body{
        background-color: #e7f3ff;
        margin : 0px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #041647;
    }

    a {
    color: #041647;
    }

    .btn {
        background: linear-gradient(to bottom right, #00059c, #105e85);
        border: 0;
        border-radius: 12px;
        margin:10px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 2.5;
        outline: transparent;
        padding: 0 1rem;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
    }



    .btn:hover,.btn:focus {
       box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.7);
    }

    input[type="radio"],input[type="checkbox"]{
        height: 20px;
        width: 20px;
        margin-right: 20px;
    }

    .fas{
        font-size: 24px;
        cursor: pointer;
        margin-left: auto;
    }
    .fa-times{
        color:#f64545;
    }
    .fa-cogs{
        color:rgb(247, 154, 99);
    }

    .parent {
        border: 2px solid white;
        background: #105e85;
        display: flex;
        padding: 5px;
        margin: 3px;
        align-items: center;
        color:white;
        font-size: 20px;
    }

    i{
        margin: 0 10px;
    }

</style> 
<style scoped>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 110px;
}
section{
    margin:110px 0 0 0 ;
}


nav>ul{
    flex-flow: row wrap-reverse;
    text-align: center;
    height: 110px;
}


ul{
    display:flex;
    flex-flow: row wrap-reverse;
    align-content: flex-start;
    padding-left: 0px;
    margin: 0px;
    position: 0px;
    width: 100%;
}

nav>ul>li{
    list-style: none;
    margin: 0px 50px;
    vertical-align: middle;
}



nav>ul>li:not(#log){
    margin: 35px 50px
}



a{
    text-decoration: none;
    font-size: 30px;
    text-transform: uppercase;
}


img{
    margin:auto auto;
    width:100px;
}

#log {
    cursor:pointer;
    margin-left: auto;
    margin-right: 20px;
    }


#navigation1,#navigation2{
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #e7f3ff;
    border-bottom: 1px solid #041647;
}

#navigation1>nav>ul>li>a {
    position: relative;
}

#navigation1>nav>ul>li>a::after {
    content: '';
    transform-origin: 0 0; 
    transform: scaleX(0);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: .1em; 
    background: #041647;
    z-index: 2;
    opacity: 0.8;
    transition: transform .3s;
}
#navigation1>nav>ul>li>a:hover::after {
    transform: scaleX(1);
}

#footer {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0 5%;
}

#footer>a {
    color: #041647;
    margin: 0 40px;
    font-size: 16px;
    text-transform: uppercase;

}

 #footer>p, #footer>a {
    margin-top: 1.5%;
}

#footer img {
    width: 50px;
	height: 50px;
    position: relative;
    border-radius: 10px;
   }

#footer li {
    display: inline;
    margin: 16px
   }

</style>
