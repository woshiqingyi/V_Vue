<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">累积</span>
    </div>
    <div class="v-menu-title">对象的合并</div>
    <div class="v-line-style"></div>
    <el-button @click="dianji">数组合并</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      shuju1: {
        data1: "1",
        data2: "2"
      },
      shuju2: {
        data1: "3",
        data2: "4"
      },
      shuju3:['1','2','1']
    };
  },
  methods: {
    dianji() {
      // console.log("shuju3", this.shuju3);
      // console.log("shuju2", this.shuju2);
      var a = Object.assign(this.shuju1, this.shuju2);
      console.log("zongde", a);
    },
    //event.stopPropagation();阻止点击事件冒泡
  }
};
</script>
<style>
</style>
