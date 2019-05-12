<template>
 <div >
   <div class="home-page-style">
     <el-dropdown trigger="click" class="navigation"  @command="handleCommand">
        <span class="el-dropdown-link" >
            我的账户<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="exitLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
     </el-dropdown>
   </div>

    <el-card style="float:left;margin-top:2px;margin-right:5px;" >
        <el-menu  :class="isCollapse?'menuCollapse':'menuExpand'" :collapse="isCollapse"  mode="vertical" :default-active="activeIndex" router style='border:none;'>


            <template  v-for="menu in Menus" >
                   <el-submenu v-if='menu.Children' :index='menu.Code' :key='menu.Code'>
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{menu.Name}}</span>
                        </template>
                        <template v-for="child in menu.Children" >
                            <el-menu-item :index='child.Code' :route="{name:child.Url}" :key="child.Code">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{child.Name}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
             </template>

            <!-- :default-active="activeIndex"  :collapse="isCollapse" -->
            <!-- <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>基础功能</span>
                </template>
                <el-menu-item index="1-1" :route="{name:'datalist'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">数据列表</span>
                </el-menu-item>

                <el-menu-item index="1-2" :route="{name:'dialog'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">对话框</span>
                </el-menu-item>

                <el-menu-item index="1-3" :route="{name:'form'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">表单</span>
                </el-menu-item>

            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>账务中心</span>
                </template>
                <el-menu-item index="2-1" :route="{name:''}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">对话框</span>
                </el-menu-item>
                <el-menu-item index="2-2" :route="{name:'m_merchantset'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">商户设置</span>
                </el-menu-item>
                <el-menu-item index="2-3" :route="{name:'m_channelset'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">通道设置</span>
                </el-menu-item>
                <el-menu-item index="2-4" :route="{name:'m_orderinquiry'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">订单查询</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>个人中心</span>
                </template>
                <el-menu-item index="3-1" :route="{name:'b_accountinfo'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">模拟1</span>
                </el-menu-item>
            </el-submenu> -->

        </el-menu>
    </el-card>
    <div style="overflow:hidden;margin-top:2px">
        <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Menus:[
          {
            Name:'基础功能',
            Code:'01',
            Children:[
              {
                Name:'数据列表',
                Code:'0101',
                Url:'datalist',    
              },
              {
                Name:'对话框',
                Code:'0102',
                Url:'dialog',   
              },
              {
                Name:'表单',
                Code:'0103',
                Url:'form', 
              }
            ],
          },
          {
            Name:'进阶功能',
            Code:'02',
          }
      ],
      activeIndex: '1',
      isCollapse: false
    }
  },
  methods: {
    handleCommand () {
    }
  }
}
</script>

<style scoped>
  .navigation {
    color:white;
    font-size:15px;
    margin-right:100px
  }

 .home-page-style {
    background-color: rgb(61, 62, 63);
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
 }

 .el-menu-vertical-demo {
    float:left;margin-right:5px;
 }

 .home-page-style {
    background-color: rgb(61, 62, 63);
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

 .menuExpand {
    border:none;
    width:200px;
 }

.menuCollapse {
    border:none;
 }
</style>
