<template>
  <div>
    <el-button @click="fasong">发送组件</el-button>
  </div>
</template>
<script>
import bus from "@/components/nav-menu/basic/zhongyan";
export default {
 props:{
     name:''
 },
  methods: {
      fasong(){
          bus.$emit('sends',this.name)
      }
  }
};
</script>

<style>
</style>