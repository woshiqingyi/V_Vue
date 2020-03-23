<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">水平居中布局</span>
    </div>
    <div class="v-menu-title">第一种方案（需要在父和子上添加）优点浏览器兼容性比较好 缺点text-align具有继承性</div>
    <div class="parent_style1">
      <div class="child_style1">woshiqingyi</div>
    </div>
    <div class="v-menu-title">第二种方案 优点只需要对子级配置 缺点如果子级元素脱离文档流导致margin属性的值无效</div>
    <div class="parent_style2">
      <div class="child_style2">woshiqingyi</div>
    </div>
     <div class="v-menu-title">第三种方案 优点脱离文档流也可以,css浏览器支持不行</div>
    <div class="parent_style3">
      <div class="child_style3">woshiqingyi</div>
    </div>
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
  background-color: whitesmoke;
  text-align: center;
}

.child_style1 {
  text-align: left;
  height: 100px;
  width: 200px;
  display: inline-block;
  background-color: yellowgreen;
}

.parent_style2 {
  height: 100px;
  background-color: whitesmoke;
}

.child_style2 {
  display: table;
  /* display的值为table和block */
  margin:0 auto;
  /* 一个值 上右下左
  两个值 一个表示上下 第二个表示左右
  三个值 第一个表示上 第二个表示左右 第三个表示下
  四个值 上右下左 */
}

.parent_style3 {
  background-color: whitesmoke;
  width: 600px;
  height: 100px;
  position: relative;
}

.child_style3 {
  height: 100px;
  width: 200px;
  background-color: yellowgreen;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
}
</style>