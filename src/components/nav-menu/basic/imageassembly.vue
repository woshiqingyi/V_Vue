<template>
  <!-- <div class="image_assembly" @click="dianji"   @mouseenter="mouseEnter" @mouseleave='mouseLeave' :style="ID == ChooseID?Style1:Style2" >
  <img style="width:100%;height:100%" :src="Url" alt="">-->
  <!-- <img class="icon_style" src="../../../../static/image/icon/add.png" alt=""> -->

  <el-upload
    action="https://filesvc.yqytest.com/api/gateway/upload?FilePath=TRD_TranData"
    class="uploader"
    :show-file-list="false"
    :on-success="handleSuccess"
    :on-error="handleError"
    name="ceshi1"
  >
    <img v-if="img" :src="img" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      ID: "1",
      ChooseID: "",
      Style1: "border: 1px dashed rgb(35, 142, 241);",
      Style2: "border: 1px dashed rgb(167, 167, 167);",
      img: ""
    };
  },

  props: {
    Name: "",
    Url: ""
  },

  methods: {
    mouseEnter() {
      this.ChooseID = 1;
    },

    mouseLeave() {
      this.ChooseID = 0;
    },

    dianji() {
      this.$emit("dianji", this.Name);
    },

    handleSuccess(res, file) {
      console.log("res", res);
      if (res.Data[0].Name == "ceshi1") {
        
      }
    },

    handleError(res) {
        console.log(res)
    }
  }
};
</script>

<style scoped>
.image_assembly {
  height: 200px;
  width: 200px;
  border: 1px dashed rgb(167, 167, 167);
  border-radius: 5px;
}

.icon_style {
  margin-top: 81px;
  margin-left: 81px;
  height: 37px;
  width: 37px;
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
