<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">数据列表</span>
    </div>
    <div class="v-menu-title">基本数据列表</div>
    <div class="v-line-style"></div>

    <el-table :data="tableData" class="table-style">
      <el-table-column prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column width="250" label="地址">
         <template slot-scope="scope">
          <el-button v-on:click="modifyInfo(scope.row)" type="text" size="small">{{scope.row.address}}</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-on:click="modifyInfo(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 0
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          id: 1
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          id: 2
        },
      ]
    };
  },

  methods: {
    modifyInfo(row) {
      var newObj = JSON.parse(JSON.stringify(row));
      // 在row后面row.id既可获取对应的数据
      console.log("编辑的信息", newObj);
    }
  }
};
</script>
  
<style scoped>
.header-style {
  height: 50px;
  border-bottom: 1px lightgray solid;
}

.table-style {
  border: 1px rgb(223, 223, 223) solid;
  padding: 20px;
  width: 800px;
  border-radius: 10px;
}
</style>
