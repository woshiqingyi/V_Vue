<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">数据结构的转化</span>
    </div>
    <div class="v-menu-title">数据结构的简单转化（以一个字段为唯一标准，进行分类。剩余字段取第一个并赋值,形成一个以那个字段为依据的数组）</div>
    <el-button style="margin-top:20px;" @click="changeDate1">点击合并数据结构</el-button>
    <div class="v-menu-title">升级，并且将里面的Type不同的合并成数组</div>
    <el-button style="margin-top:20px;" @click="changeDate2">点击合并数据结构</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      image: [
        {
          name: "zhangsan",
          code: "ewjfewn1"
        },
        {
          name: "zhangsan",
          code: "ewjfewn2"
        },

        {
          name: "zhangsan",
          code: "eefwjfewn3"
        },
        {
          name: "zhangsan",
          code: "ewjfewn4"
        },
        {
          name: "zhangsan",
          code: "ewjfewn5"
        },
        {
          name: "zhangsan",
          code: "ewjfewn6"
        },

        {
          name: "lishi",
          code: "ewjfewn"
        },
        {
          name: "lishi",
          code: "ewjfewn"
        },

        {
          name: "lishi",
          code: "ewjfewn"
        }
      ],

      imageP:[
        {
            Name: "张三",
            Type:'1'
        },
        {
            Name: "张三",
            Type:'2'
        },
        {
            Name: "李四",
            Type:'1'
        },
        {
            Name: "李四",
            Type:'3'
        },
         {
            Name: "李四",
            Type:'4'
        }
        
      ]


    };
  },

  created() {

  },
  methods: {
    changeDate1() {
      var BindData = [];
      BindData.push(this.image[0]);
      if (BindData.length == 1) {
        for (var i = 0; this.image.length > i; i++) {
          for (var j = 0; BindData.length > j; j++) {
            if (BindData[j].name != this.image[i].name) {
              var Name =BindData.filter(a => a.name == this.image[i].name) || ""; //判断里面的某个对象的name跟遍历的对象的name不一样，并且自身的binddata也没有数值，就会赋值。
              if (!Name.length) {
                BindData.push(this.image[i]);
              }
            }
          }
        }
        console.log("BindData1", BindData);
      }
    },
    
    changeDate2(){
        var that = this
        var BindData = [];
        BindData.push(that.imageP[0]) 
        for(var i=0; that.imageP.length>i; i++){
            if(BindData.length > 0){
                var Type = []
                if(i == 0 && BindData[0].Name ==  that.imageP[0].Name  ){
                var FindData = that.imageP.filter(a=>a.Name==BindData[0].Name) || []
                  if(FindData.length>0){
                    for(var j=0;FindData.length>j;j++){
                    Type.push(FindData[j].Type)
                    Object.assign(BindData[0],FindData[j])
                  }
                 }
                BindData[0].Type = Type
                }else if(i > 0 ){
                var FindDataP = BindData.filter(a=>a.Name == that.imageP[i].Name) || []
                if(FindDataP.length == 0){
                    var FindData= that.imageP.filter(a=>a.Name==that.imageP[i].Name) || []
                    var Type = []
                    if(FindData.length>0){
                    BindData.push(FindData[0])
                    for(var j=0;FindData.length>j;j++){
                    Type.push(FindData[j].Type)
                    Object.assign(BindData[BindData.length-1],FindData[j])//问题点BindData.length-1 push将元素放在数组的最后一个
                  }
                 }
                BindData[BindData.length-1].Type = Type
              }
            }
          }
       }
       console.log('BindData2',BindData)
    }
    

  }
};
</script>

<style>
</style>
