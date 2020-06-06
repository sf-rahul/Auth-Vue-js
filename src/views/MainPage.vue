<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>

    </div>
</template>


<script>

import header from '../components/header/header'

    export default{
       name:"HomePage",
       
       components:{
         appHeader:header
       },

       data: function(){

           return {

               msg:"hello"
           }
       }


     }


</script>