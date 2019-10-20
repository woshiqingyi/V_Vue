<template>
  <div>
    <div>
      <el-radio-group v-model="ruleForm.resource">
        <el-radio v-for="item in StationItems" :key="item.Code" :label="item.Code">{{item.Name}}</el-radio>
      </el-radio-group>
    </div>

    <!-- https://filesvc.yqytest.com/api/gateway/upload?FilePath=TRD_TranData -->
    <!-- v-show="ruleForm.resource == 'local'" -->

    <el-upload
      class="upload-demo"
      style="margin-top:10px;"
      drag
      v-show="ruleForm.resource == 'local'"
      action="https://filesvc.yqytest.com/api/gateway/upload?FilePath=TRD_TranData"
      :on-success="handleAvatarSuccess"
      multiple
      ref="upload"
      :on-remove="removeFile"
      :limit="IsMultiSelection"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
    </el-upload>

    <!-- <el-button @click="clickName">检验Name</el-button> -->

    <div>
      <img
        v-show="ruleForm.resource == 'weixin'"
        class="icon_style"
        src="../../../../static/image/icon/erweima.jpg"
        alt
      />
    </div>
    <el-button class="button_style" @click="confirmUpload">确认上传</el-button>
    <!-- <el-button class="button_style" @click="clearFiles">清除上传</el-button> -->
  </div>
</template>
<script>
import bus from "@/components/nav-menu/basic/zhongyan";
export default {
  data() {
    return {
      ceshishuju:{

      },
      msg: "",
      Name:'',
      UplodItems: [],
      ruleForm: {
        imageUrl: "",
        resource: "local"
      },
      StationItems: [
        {
          Name: "微信扫码上传",
          Code: "weixin"
        },
        {
          Name: "本地电脑上传",
          Code: "local"
        }
      ],

      WeiXinItems: [],

      props: {
        IsMultiSelection: "",
        
       
      }
    };
  },

  created() {
    var that = this;
    bus.$on("sends", function(val) {
        console.log('val',val)
        that.Name = val
    });

    
  },

  methods: {
 /*    Success() {},

    clickName() {
      console.log("Name", this.Name);
    }, */

    handleAvatarSuccess(res, file) {
       var that = this
      // if(this.IsMultiSelection){
      //    this.UplodItems.push(res.Data[0])
      // }else{
      //   this.UplodItems = []
      //   this.UplodItems.push(res.Data[0])
      // }
      for (var key in res.Data) {
        that.UplodItems[key] = res.Data[key];
      }

      for(var i = 0;that.UplodItems.length>i;i++){
       that.UplodItems[i].Name = that.Name
      }

      console.log('结果',that.UplodItems)
      /* if(this.Name){
          for(var i = 0;this.UplodItems.length>0;i++){
              console.log(this.UplodItems[i])
             
          }
      } */
        /* this.UplodItems.push(res.Data[0]) */

      //   this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    clearFiles() {
      this.$refs["upload"].clearFiles();
    },

    confirmUpload() {
      console.log('confirmUpload',this.UplodItems)
      this.$emit('confirmUpload',this.UplodItems)
    },

    removeFile(res) {
      for (var i = 0; this.UplodItems.length > i; i++) {
        if (this.UplodItems[i].ClientFileName == res.name) {
          this.UplodItems.splice(i, 1);
        }
      }
    }
  }
};
</script>
<style>
</style>