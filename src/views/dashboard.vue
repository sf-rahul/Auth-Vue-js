<template>
  <div id="dashboard">
   
       <dashboardcmp />

  </div>
</template>

<script>

import dashboardcmp from '../components/dashboard/dashboard'

export default {
    name:"dashboard",
    components:{
        dashboardcmp

    }

}
</script>

<style scoped>

  h1,p {
      text-align: center;
  }

  p {
      color:red;
  }
</style>