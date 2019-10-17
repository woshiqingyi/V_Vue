<template>
  <el-card>
    <div>
      <el-form class="niefni" ref="word" :model="word" :rules="rules1" label-width="80px">
        <el-form-item label="活动名" prop="efno1">
          <el-input v-model="word.efno1" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="efno2">
          <el-input v-model="word.efno2" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      rules1: {
        efno1: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        efno2: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      }
    };
  },

  props: {
    word: {
      efno1: "",
      efno2: "",
      check:'',
    },
    
  },

  methods: {
    child() {
      this.$refs['word'].validate(valid => {
        this.word.check = valid;
        if (valid) {

        } else {
         
        }
      });
    }
  },

  watch: {
    shuju: {
      handler(newValue, oldValue) {
        console.log("newValue", newValue);
        // console.log('newValue.data1',newValue.data1)
        // console.log('newValue.data2',newValue.data2)
        console.log("11111", this.word);
        // this.word.efno1 = newValue.data1
        // this.word.efno2 = newValue.data2
      },
      // word(newValue, oldValue) {
      //   console.log("word", newValue);
      // },
      deep: true
    }

    // imagedata:{
    //     handler(newValue,oldValue){
    //         console.log('newValue',newValue)
    //         this.$emit("CompleteNewValue",newValue);
    //     },
    //    deep:true
    // }

    // imagedata:{
    //     handler(newValue,oldValue){

    //         this.$emit("update:word",newValue);
    //     },
    //    deep:true
    // }
  }
};
</script>

<style>
</style>
