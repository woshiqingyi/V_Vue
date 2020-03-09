<template>
  <el-card class="v-card-layout">
    <div slot="header" style="text-align:left;display:flex;align-items:center;">
      <span class="v-small-menu-title">自定义数据分页</span>
    </div>


      <el-table :data="ShowDataInfoItems" class="table-style">
          <el-table-column label="名字" width="180" prop="name">
            
          </el-table-column>
      </el-table>

      <el-pagination
        style="margin-top:15px;"
        :current-page.sync="Page"
        :page-size="PageSize"
        layout="prev, pager, next"
        :total="Count"
        @current-change="changePage"
      ></el-pagination>

  </el-card>
</template>

<script>
export default {
  data() {
    return {
        Page:1,
        PageSize:5,
        Count:0,
        DataInfoItems:[
            {
                name:'1',
            },
            {
                name:'2',
            },
            {
                name:'3',
            },
            {
                name:'4',
            },
             {
                name:'5',
            },
            {
                name:'6',
            },
            {
                name:'7',
            },
            {
                name:'8',
            },
            {
                name:'9',
            },
            {
                name:'10',
            },
            {
                name:'11',
            },
        ],
        ShowDataInfoItems:[]
    };
  },

  created() {
      this.Count = this.DataInfoItems.length
      this.getPageData(this.Page,this.PageSize)
  },

  methods: {
    getPageData(Page, PageSize) {
      var start = (Page - 1) * PageSize;
      var end = Page * PageSize - 1;
      var DataInfoItems = [];
      for (var i = 0; end - start + 1 > i; i++) {
          console.log('数据',this.DataInfoItems[i + start])
        if (this.DataInfoItems[i + start]) {
          DataInfoItems.push(this.DataInfoItems[i + start]);
        }
      }
      console.log('DataInfoItems',DataInfoItems)
      this.ShowDataInfoItems = DataInfoItems;
    },

    changePage(Page){
        this.getPageData(Page,this.PageSize)
    }
  }
};
</script>

<style>
</style>
