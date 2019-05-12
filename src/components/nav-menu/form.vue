<template>
    <el-card style=''>
      <el-form  :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" label-width="80px">
         <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option v-for="item in FormData" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
      </el-form>
      
      <el-button type="info" v-on:click='dianji'></el-button>

      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
   
    <div class="small-title">多选</div>

    <el-form :model="form" label-width="80px">
        <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活" ></el-checkbox>
            <el-checkbox label="地推活动" ></el-checkbox> 
            <el-checkbox label="线下主题活动" ></el-checkbox>
            <el-checkbox label="单纯品牌曝光" ></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
    </el-form>

    {{this.form.type}}

    <div class="small-title">单选</div>
      <el-form :model="form" label-width="80px">
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

   </el-card>
</template>

<script>
export default {
     data() {
      return {
     
        value2: true,
        FormData: [
            {
              value:'123',
              name:'区域一',
            },
            {
              value:'321',
              name:'区域二',
            },
            {
              value:'564',
              name:'区域三',
            }
        ],

        form: {
          name: '',
          region: '',



          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
     },

     methods:{
         dianji(){
             console.log('this.form.region',this.form.region)
         }
     }

     
}
</script>

<style>
  .small-title{
    margin-top: 10px;
    margin-left: 5px;
    color: rgb(0, 112, 204)
  }
</style>
