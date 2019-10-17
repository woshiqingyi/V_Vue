<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">图片组件</span>
    </div>
    <imageassembly v-on:dianji="dianji" Name='ceshi1' :Url='ceshi1' ></imageassembly>
    <imageassembly v-on:dianji="dianji" Name='ceshi2' :Url='ceshi2' ></imageassembly>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="500px">

      <uploadimageassembly v-if="dialogVisible" :IsMultiSelection="1" :UplodItems.sync="UplodItems" :Name='Name'></uploadimageassembly>
      <el-button @click="uploadImage">主界面按钮上传</el-button>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmUploadImage">确 定</el-button>
      </span>
    </el-dialog>

  </el-card>
</template>

<script>
import imageassembly from "@/components/nav-menu/basic/imageassembly";
import uploadimageassembly from "@/components/nav-menu/basic/uploadimageassembly";

export default {
  components: { imageassembly, uploadimageassembly },
  data() {
    return {
      dialogVisible: false,
      UplodItems: [],
      Name:'',
      ConfirmUploadImage:[],
      ceshi1:'',
      ceshi2:''
    };
  },

  methods: {
    dianji(data) {
      console.log("data", data);
      this.Name = data
      if (data) {
        this.dialogVisible = true;
      }
    },

    overSuccess(){
      console.log('overSuccess')
    },

    uploadImage() {
      console.log("UplodItems", this.UplodItems);
    },

    confirmUploadImage(){
      console.log('this.Name',this.Name)
     if(this.Name == 'ceshi1'){
       this.ceshi1 = this.UplodItems[0].Url
       this.dialogVisible = false
     }else if(this.Name == 'ceshi2'){
        this.ceshi2 = this.UplodItems[0].Url
        this.dialogVisible = false
     }
      // if(this.UplodItems[0].Name == 'ceshi1'){
      //     ConfirmUploadImage.push({

      //     })
      // }
    }
  }
};
</script>

<style>
</style>
