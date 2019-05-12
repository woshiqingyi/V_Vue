<template>
  <el-card style=''>
     <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="日期" width="300">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="300">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
       <el-table-column fixed='right' label="操作" width="100">
          <template slot-scope="scope">
              <el-button v-on:click="modifyInfo(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        id:0
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        id:1
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        id:2
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        id:3
      }]
    }
  },

  methods :{
    modifyInfo(row){
        var newObj = JSON.parse(JSON.stringify(row)); 
        // 在row后面row.id既可获取对应的数据
        console.log('编辑的信息',newObj)
    },
  }
}
</script>
  
<style>

</style>
