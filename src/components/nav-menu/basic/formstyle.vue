<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">表单</span>
    </div>
    <div class="v-menu-title">表单风格（固定）</div>
    <div class="v-line-style"></div>

    <!-- <div class="per-info">
      <div class="per-title">姓名</div>
      <div class="per-content">郑晓峰</div>
    </div> -->

    <div class="v-menu-title">表单风格（动态框）</div>
    <div class="v-line-style"></div>

    <el-input></el-input>
  </el-card>
</template>       

<script>
export default {};
</script>
<style scoped>
.per-info {
  font-size: 15px;
  display: flex;
  margin-top: 10px;
  background-color: whitesmoke;
  padding: 10px;
  width: 430px;
  border-radius: 10px;
}

.per-title {
  margin-left: 15px;
  width: 25%;
}

.per-content {
  margin-left: 10px;
  width: 65%;

}
</style>
