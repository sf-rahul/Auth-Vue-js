<template>
  <div>
     
     <header id = "header">
       <div class="logo">
           <router-link to="/"> Simple Kanban  </router-link>
       </div>
       
       <nav>
            <ul>
                <li v-if="!isAuth">
                    <router-link  to="/signup">Signup</router-link>
                </li>
                <li v-if="!isAuth">
                    <router-link to="/login" > Login </router-link>
                </li>
                <li v-if="isAuth">
                    <router-link to="/Dashboard"> Dashboard</router-link>
                </li>
                <li v-if="isAuth">
                    <button @click="doLogout">Logout</button>
                </li>
            
            </ul>

       </nav>

     </header>
     
      </div>
</template>

<script>

 
export default {

    methods:{
 
      doLogout(){

          this.$store.dispatch('clearAuth')
      }

    },

    computed:{
        isAuth(){

             return this.$store.getters.isAuthenticated;
        }
    },

    created(){
        this.$store.dispatch('tryAutoLogin');
    }
     
}
</script>

<style scoped>
  #header {
   
    height:56px;
    display:flex;
    flex-flow:row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px
   }
   
   .logo{
       font-weight: bold;
       color:white;
   }

   .logo a {

       text-decoration: none;
       color: white;
   }
   nav {
    height: 100%;
  }
  ul{
      list-style: none;
      margin:0;
      padding: 0;
      height: 100%;
      display:flex;
      flex-flow:row;
      align-items: center;
  }
  li{

      margin: 0 16px;
  }

  li a {
      text-decoration: none;
      color:white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
      color: #fa923f;
  }

  button{
      background-color: transparent;
      border: none;
      font:inherit;
      color:white;
      cursor: pointer;

  }
</style>