<template>
<div>
    <div>我搜是Ingi1</div>
      <el-input v-model="ni"></el-input>
    <el-button @click="dianji">点击</el-button>
</div>

      
</template>
<script>

export default {
   
  data() {
   return {
      
 };
},
 methods:{
    dianji(){
        console.log('222')
        this.ni = !this.ni
    }
 },

props:{
   ni:false
},

 created() {
},
 
};
</script>
<style scoped>
</style>