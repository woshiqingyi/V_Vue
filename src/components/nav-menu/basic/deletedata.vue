<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">无ID删数组数据</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column width="250" label="删除">
        <template slot-scope="scope">
          <el-button
            v-on:click="deleteDate(scope.row)"
            type="text"
            size="small"
          >{{scope.row.address}}</el-button>
        </template>
      </el-table-column>
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
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {},
  methods: {
    deleteDate(Per) {
      console.log("Per", Per);
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i] == Per) {
          this.tableData.splice(i, 1);
          break;
        }
      }
      console.log('tableData',this.tableData)


    //   this.OrdersItems.remove(this.DeletePerOrderInfo)

      //   Array.prototype.remove = function(val) {
      //     for (var i = 0; i < this.length; i++) {
      //       if (this[i] == val) {
      //         this.splice(i, 1);
      //         break;
      //       }
      //     }
      //   };
    }
  }
};
</script>

<style>
</style>
