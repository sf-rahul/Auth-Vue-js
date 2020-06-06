<template>

    <div id = "dashboard">

    
       <h1>That's the dashboard!</h1>
    <div v-if="email">
    <p>You should only get here if you're authenticated!
        {{email}}
    </p>
    </div>


    </div>
  
</template>

<script>


export default {

 
  name:"dashboardcmp",

  computed: {
       
       email(){
         
          return this.$store.state.user.email;

       }
   }
   ,
   created(){
     
         
   }

}
</script>

<style>

</style>