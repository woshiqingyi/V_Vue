<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">判断</span>
    </div>
    <div class="v-menu-title">判断对象是否为空值</div>
    <div class="v-line-style"></div>
    <div></div>
    <el-button @click="judgeObject">判断对象</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      Object1: {},
      Object2: {
          Object2Data:'data'
      }
      
    };
  },
  methods: {
    judgeObject() {
        var Object1 =  Object.keys(this.Object1)
        var Object2 =  Object.keys(this.Object2)
        console.log(Object1)
         console.log(Object2)
        
        if(Object1.length){
            console.log('Object1')
        }
        if(Object2.length){
            console.log('Object2')
      }
    }
  }
};
</script>

<style scoped>

</style>
