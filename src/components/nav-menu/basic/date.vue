<template>
    <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">日期</span>
    </div>

    
  </el-card>
</template>

<script>
export default {
    created(){
    var TIME = new Date();
    var regg = TIME.getMonth() + 1
    var Month = (Array(2).join(0)+regg).slice(-2)
    var MDate = (Array(2).join(0)+TIME.getDate()).slice(-2)
    var FullDate = TIME.getFullYear() + '-' + Month + '-' + MDate; 
    // TIME.setDate(TIME.getDate() - 30);
    var SFullDate = TIME.getFullYear() + '-' + Month  + '-' + MDate; 
    var LFullDate = TIME.getFullYear() + '-' + Month  + '-' + MDate; 
     console.log('SFullDate',SFullDate)
     console.log('LFullDate',LFullDate)

    // console.log('year',new Date().getFullYear())
    // console.log('month',new Date().getMonth())
    // console.log('date',new Date().getDate())
    // console.log('Date1',parseInt(1))
    }
}

</script>

<style>

</style>
