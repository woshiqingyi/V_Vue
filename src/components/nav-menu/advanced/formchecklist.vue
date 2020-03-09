<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">勾选单选列表</span>
    </div>
    <div class="v-menu-title">勾选单选列表</div>
    <div class="v-line-style"></div>

    <el-table class="table-style" :data="tableData">
      <el-table-column prop label width="100">
        <template slot-scope="scope">
          <el-radio v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-button @click="onTo" style="margin-top:10px;">下一步</el-button>
    <div class="v-menu-title">多选列表输入框</div>
    <div class="v-line-style"></div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      class="table-style"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="handleSelectionChange2"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button v-on:click="modifyInfo(scope.row)" type="text" size="small">编辑</el-button> -->
          <el-input v-model="shuzhi" :disabled="scope.row.disabled"></el-input>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      shuzhi: "",
      radio: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          disabled: true
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          disabled: true
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          disabled: true
        }
      ]
    };
  },
  methods: {
    onTo() {
      console.log("table", this.tableData[this.radio]);
    },

    handleSelectionChange(Checked) {
      for(var i = 0;this.tableData.length>i;i++){
        this.tableData[i].disabled = true
      }
      console.log("1111", Checked);
      for (var i = 0; Checked.length > i; i++) {
        Checked[i].disabled = false;
      }
    }
    // handleSelectionChange2(Checked){
    //   console.log('2222',Checked)
    // }
  }
};
</script>

<style scoped>
.table-style {
  border: 1px rgb(223, 223, 223) solid;
  padding: 20px;
  width: 800px;
  border-radius: 10px;
}
</style>
