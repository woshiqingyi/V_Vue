<template>
  <el-card style=''>
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="info" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
  </el-card>
</template>

<script>
export default {
     data () {
      return {
        dialogVisible: false
      };
    },
    methods: {
      
    }
}
</script scoped>

<style>
  .dialog-footer{
      display: flex;
      justify-content: center;
  }
</style>
