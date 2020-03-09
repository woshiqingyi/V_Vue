<template>
  <el-card>
    <zi3 :ni.sync="wo"></zi3>
  </el-card>
</template>
<script>
import zi3 from "@/components/nav-menu/basic/zi3";

export default {
  components: { zi3 },
  data() {
    return {
        wo:""
    };
  },
  created() {},
  methods: {},
  watch:{
     'wo':function(Value){
         console.log('11',Value)
     }
  }
};
</script>
<style scoped>
</style>