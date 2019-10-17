<template>
  <el-card class='v-card-layout' style>
    <el-button @click="onGetCode">{{CodeName}}</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      CodeName: "获取验证码",
      Count: "",
      Counting: false
    };
  },
  methods: {
    onGetCode() {
      var that = this;
      if (!that.Counting == true) {
        /*达到要求同条件一起发送*/
        that.Count = 5;
        that.countDown(that, that.Count);
      }
    },

    countDown(that, count) {
      if (count == 0) {
          that.CodeName = "获取验证码",
          that.Counting = false
        return;
      }
      that.Counting = true,
      that.CodeName = count + "秒后获取"
      setTimeout(function() {
        count--;
        that.Count = count
        that.countDown(that, count);
      }, 1000);
    }
  }
};
</script>

<style>
</style>
