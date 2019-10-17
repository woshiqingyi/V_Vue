<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">对象</span>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
        shuju1:{
            data1:'1',
            data2:'1'
        },

        shuju2:{
            data2:'2',
            data4:'7'
        },
        shuju3:{
            data1:''
        }
    };
  },
  created(){
    Object.assign(this.shuju1, this.shuju2)
    this.shuju1.data3 = [{a:1}]
    // console.log(this.shuju1)
    // console.log('111',Object.keys(this.shuju3))
    
    var arr = [1,2,3,4,5,6,7,8,9]
    console.log('1',arr)
    var r = arr.filter(function (y) {
    return y % 2 !== 0;
   });
   console.log('111',r)
  }
};
</script>

<style>
</style>
