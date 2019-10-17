<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">数据分页</span>
    </div>

    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        :current-page.sync="CurrentPage"
        :page-size="PageSize"
        layout="prev, pager, next"
        :total="60"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      PageSize:20
    };
  },

  created(){

  },

  methods:{
    changePage(){
      
    }
  },

  watch: {
    CurrentPage: {
      handler(newValue, oldValue) {
        console.log("newValue", newValue);
        // console.log('newValue.data1',newValue.data1)
        // console.log('newValue.data2',newValue.data2)
     
        // this.word.efno1 = newValue.data1
        // this.word.efno2 = newValue.data2
      },
      // word(newValue, oldValue) {
      //   console.log("word", newValue);
      // },
    //   deep: true
    }
  }
  
};
</script>

<style>
</style>
