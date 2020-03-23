<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">树结构</span>
      <el-tree
        :data="data"
        node-key="id"
        :default-checked-keys="[5]"
        :props="Tree"
        :show-checkbox="true"
        highlight-current
        :expand-on-click-node="false"
      ></el-tree>
      <!--  :check-strictly="true" 加上可以点击后可以将父级的以下的所有的子级都选上 显示-->
      <!-- :show-checkbox="true" 加上去后可以每个子级会加上一个可选框 -->
      <!-- :default-checked-keys='items' 默认的数组 -->
      <!-- :default-expand-all = 'true' 默认全展开-->
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      
      data: [
        {
          id: 1,
          label: "一级 2",
          children: [
            {
              id: 3,
              label: "二级 2-1",
              children: [
                {
                  id: 4,
                  label: "三级 3-1-1"
                },
                {
                  id: 5,
                  label: "三级 3-1-2"
                }
              ]
            },
            {
              id: 2,
              label: "二级 2-2",

              children: [
                {
                  id: 6,
                  label: "三级 3-2-1"
                },
                {
                  id: 7,
                  label: "三级 3-2-2"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  
  created() {},
  methods: {
    nsg() {
      return false;
    }
  }
};
</script>
<style scoped>
</style>