<template>
  <el-card class='v-card-layout' style>
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">模拟表单</span>
    </div>
   
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="left"
    >
      <!-- 输入框 -->
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"  max="100"></el-input> 
      </el-form-item>

      <!-- 单选下拉框 -->
      <el-form-item label="区" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域" @canplay="changeshuju">
          <el-option
            v-for="item in AreaItems"
            :key="item.Code"
            :value="item.Code"
            :label="item.Description"
          ></el-option>
        </el-select>
      </el-form-item>
      
      <!-- 单选 -->
      <el-form-item label="站点名字" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio v-for="item in StationItems" :key="item.Code" :label="item.Code">{{item.Name}}</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 多选 -->
      <el-form-item label="货币类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox
            v-for="item in CurrencyItems"
            :key="item.Code"
            :label="item.Code"
            name="type"
          >{{item.Name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="图片" prop="image">
        <el-upload
          class="uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl" @click="handlePreview(ruleForm.imageUrl)" :src="ruleForm.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <!-- 选择时间 -->
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        imageUrl: "",
        name: "",
        region: "",
        type: [],
        date1: "",
        date2: ""
        // 多选是数组
      },
      AreaItems: [
        {
          Description: "上海",
          Code: "shanghai"
        },
        {
          Description: "北京",
          Code: "beijin"
        },
        {
          Description: "深圳",
          Code: "shenzhen"
        }
      ],

      StationItems: [
        {
          Name: "亚马逊",
          Code: "Amazon"
        },
        {
          Name: "印度站",
          Code: "India"
        },
        {
          Name: "ebay",
          Code: "Ebay"
        }
      ],

      CurrencyItems: [
        {
          Name: "美元",
          Code: "USD"
        },
        {
          Name: "欧元",
          Code: "Euro"
        },
        {
          Name: "英镑",
          Code: "Pound"
        }
      ],

      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],

        image: [
          { required: true, message: "请上传营业执照", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    changeshuju(){
      console.log('11111')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log("数据", this.ruleForm);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
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
