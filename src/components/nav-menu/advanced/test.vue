<template>
  <el-card>
    <!-- <el-button @click="dianji">点击</el-button> -->
      
    <!-- <template slot-scope="scope">
          <el-button v-on:click="modifyInfo(scope.row)" type="text" size="small">编辑</el-button>
    </template>-->

    

    <!-- <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-button @click="shijian">点击时间</el-button>


   <el-date-picker
      v-model="value1"
      type="datetime"
      value-format='yyyy-MM-dd HH:mm:ss'
      placeholder="选择日期时间">
    </el-date-picker> -->


    <div class="ceshi">
      <div class="ceshi1">ceshi1</div>
      <div class="ceshi2">ceshi2</div>
      <div class="ceshi3">ceshi3</div>
      
      <!-- <div class="ceshi1">ceshi1</div>
      <div class="ceshi2">ceshi2</div>
      <div class="ceshi3">ceshi3</div>
      <div class="ceshi1">ceshi1</div>
      <div class="ceshi2">ceshi2</div>
      <div class="ceshi3">ceshi3</div>
      <div class="ceshi1">ceshi1</div>
      <div class="ceshi2">ceshi2</div>
      <div class="ceshi3">ceshi3</div>
      <div class="ceshi1">ceshi1</div>
      <div class="ceshi2">ceshi2</div>
      <div class="ceshi3">ceshi3</div>
      <div class="ceshi1">ceshi1</div>
      <div class="ceshi2">ceshi2</div>
      <div class="ceshi3">ceshi3</div> -->
    </div>
    

  </el-card>
</template>

<script>
 export default {
    data() {
      return {
        value1:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        data1:['1','2','3','4','5','6']
      }
    },
    created(){
      
      // console.log(this.data1.indexOf('1'))
    },
    methods:{
      dianji(){
        
      },
      shijian(){
        console.log(this.value1)
      }
    }
  }
  
  
</script>

<style scoped>
.ceshi{
  

  
}
.ceshi1{
  background-color: red;
  width: 200px;
  float: left;
}

.ceshi2{
  background-color: rgb(0, 119, 255);
  width: 200px;
  float: left;
}

.ceshi3{
  background-color: rgb(144, 184, 70);
  width: 200px;
   float: left;
}
</style>


