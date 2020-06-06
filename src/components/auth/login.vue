<template>
<div id = "login">
    
    <div class="login-form">
        
        <form @submit.prevent= "onSubmit">
           <div class="input">
              <label for = "email"> Mail </label>
              <input type="email" id = "email" v-model= "email">
            </div>

            <div class="input">

              <label for ="password">Password </label>
              <input type = "password" id = "password" v-model= "password" >

            </div>
        
        <div class="submit" >
            <button type="submit">Submit </button>
        
        </div>

        </form>

    </div>


</div>
  
</template>

<script>
export default {

    name:"login",
    data(){

        return {email:'',
                password:''}
    },
    methods:{
        onSubmit(){
            const formData = {
                email:this.email,
                password:this.password
            }
            console.log(formData);
            this.$store.dispatch('login',formData)
        }
    }

}
</script>

<style scoped>

.login-form{
   width:400px;
   margin:30px auto;
   padding:20px;
   border :1px solid #eee;
   box-shadow: 0 2px 3px #ccc;

}

.input{
    margin:10px auto;
}

.input label {

    display: block;
    display: #4e4e4e;
    margin-bottom: 6px;
}
.input input {

    width:100%;
    font:inherit;
    padding:6px 12px;
    box-sizing:border-box;
    border: 1px solid #ccc;

}

.input input:focus{
    outline: none;
    border : 1px solid #521751;
    background-color: #eee;
}

.submit button{
    border : 1px solid #521751;
    color:#521751;
    padding: 10px 20px ;
    font:inherit;
    cursor: pointer;
}

.submit button:hover,
.submit button:active{
    background-color: #521751;
    color:white;

}

 .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>