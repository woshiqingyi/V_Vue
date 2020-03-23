<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">水平垂直居中布局</span>
    </div>
    <div class="v-menu-title">第一种方案 只需要给父级设置就好了 且浏览器兼容性比较好 缺点vertical-align有继承性</div>
    <div class="parent_style1">
      <div class="child_style1">woshiqingyi</div>
    </div>
     <div class="v-menu-title">第二种方案 缺点就是兼容性不好（不做例子）</div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.parent_style1 {
 display: table-cell;
 vertical-align: middle;
 background-color: whitesmoke;
 width: 300px;
 height: 300px;
}

.child_style1 {
 display: table;
 margin:0 auto;
 background-color: turquoise;
 display: flex;
    
}

</style>