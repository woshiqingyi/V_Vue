<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created(){
    window.woshiqingyi = this.test10
  },

  methods:{
    test10(){
      console.log('10')
    }
  }
}
</script>

<style>
body{
    margin:0;
    padding:0;
    border: 0;
    background-color: rgb(194, 194, 194)
  }

.v-card-layout{
  min-height:700px;
}

.v-menu-title{
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
}

.v-line-style{
  margin-top: 10px;
  height: 5px;
  background-color: whitesmoke;
  margin-bottom: 20px;
}




</style>
