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
      :on-remove='removeFile'
      :limit='IsMultiSelection'
      :name='Name'
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
    </el-upload>

    <el-button @click="clickName">检验Name</el-button>

    <div>
      <img
        v-show="ruleForm.resource == 'weixin'"
        class="icon_style"
        src="../../../../static/image/icon/erweima.jpg"
        alt
      >
    </div>
    <!-- <el-button class="button_style" @click="confirmUpload">确认上传</el-button> -->
    <!-- <el-button class="button_style" @click="clearFiles">清除上传</el-button> -->
  </div>
</template>

<script>
// import imageassembly from "@/components/nav-menu/basic/imageassembly";
export default {
  data() {
    return {
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

      WeiXinItems:[],
     
     

    };
  },

  props:{
    IsMultiSelection:'',
    UplodItems:'',
    Name:''
  },

  methods: {
    Success(){
      
    },

    clickName(){
      console.log('Name',this.Name)
    },
    handleAvatarSuccess(res, file) {
      // if(this.IsMultiSelection){
      //    this.UplodItems.push(res.Data[0])
      // }else{
      //   this.UplodItems = []
      //   this.UplodItems.push(res.Data[0])
      // }
      console.log('res',res.Data)
      for(var key in res.Data){
        this.UplodItems[key] = res.Data[key]
      }
     
      // this.UplodItems.push(res.Data[0])
    
      //   this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    clearFiles(){
      this.$refs['upload'].clearFiles();
      
    },

    confirmUpload(){
      console.log('xinxi',this.UplodItems)
     
    },

    removeFile(res){
      for(var i = 0;this.UplodItems.length>i;i++){
        if(this.UplodItems[i].ClientFileName == res.name){
          this.UplodItems.splice(i, 1);
        }
      }
      

    },

    // requestFile(res){
    //   console.log('1111',res)
    // }
    
  }
};
</script>

<style scoped>
.icon_style {
  height: 200px;
  width: 200px;
}

.button_style {
  margin-top: 25px;
  margin-left: 30px;
}

.uploader:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.uploader {
  margin-top: 15px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
