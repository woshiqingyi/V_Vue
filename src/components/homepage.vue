<template>
  <div>
    <div class="home-page-style">
      <el-dropdown trigger="click" class="navigation" @command="handleCommand">
        <span class="el-dropdown-link">
          我的账户
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="exitLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-card class="menu-layout">
      <el-menu
        :class="isCollapse?'menuCollapse':'menuExpand'"
        :collapse="isCollapse"
        mode="vertical"
        :default-active="activeIndex"
        router
        style="border:none;"
      >
        <template v-for="menu in Menus">
          <el-submenu v-if="menu.Children" :index="menu.Code" :key="menu.Code">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{menu.Name}}</span>
            </template>
            <template v-for="child in menu.Children">
              <el-menu-item :index="child.Code" :route="{name:child.Url}" :key="child.Code">
                <i class="el-icon-menu"></i>
                <span slot="title">{{child.Name}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-card>
    <div class="per-menu-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Menus: [
        {
          Name: "基础功能",
          Code: "01",
          Children: [
            {
              Name: "数据列表",
              Code: "0101",
              Url: "datalist"
            },
            {
              Name: "对话框",
              Code: "0102",
              Url: "dialog"
            },
            {
              Name: "模板表单",
              Code: "0103",
              Url: "templateform"
            },
            {
              Name: "表单风格",
              Code: "0104",
              Url: "formstyle"
            },
            {
              Name: "数据分页",
              Code: "0105",
              Url: "datapage"
            },
            {
              Name: "自定义数据分页",
              Code: "0106",
              Url: "mydatapage"
            },
            {
              Name: "日期",
              Code: "0107",
              Url: "date"
            },
            {
              Name: "无ID删数组数据",
              Code: "0108",
              Url: "deletedata"
            },
            {
              Name: "图片组件",
              Code: "0109",
              Url: "showimageassembly"
            },

          ]
        },
        {
          Name: "进阶功能",
          Code: "02",
          Children: [
            {
              Name: "勾选单选列表",
              Code: "0203",
              Url: "formchecklist"
            },
            {
              Name: "手机验证码",
              Code: "0206",
              Url: "verificationcode"
            },
            {
              Name: "新增组件",
              Code: "0207",
              Url: "addcomponent"
            },
            {
              Name: "快捷菜单",
              Code: "0210",
              Url: "easymenu"
            },
            {
              Name: "累积",
              Code: "0211",
              Url: "accumulation"
            },
            {
              Name: "判断",
              Code: "0213",
              Url: "judge"
            },
            {
              Name: "数据结构的转化",
              Code: "0214",
              Url: "changedatestructure"
            },
            {
              Name: "试验",
              Code: "0212",
              Url: "test"
            },
            {
              Name: "对象",
              Code: "0215",
              Url: "newobject"
            },
          ]
        }
      ],
      activeIndex: "1",
      isCollapse: false
    };
  },
  methods: {
    handleCommand() {}
  }
};
</script>

<style scoped>
.menu-layout {
  float: left;
  margin-left: 25px;
  margin-top: 20px;
  margin-right: 25px;
}

.per-menu-content {
  overflow: hidden;
  margin-top: 20px;
  margin-right: 25px;
}

.navigation {
  color: white;
  font-size: 15px;
  margin-right: 100px;
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
  float: left;
  margin-right: 5px;
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
  border: none;
  width: 200px;
}

.menuCollapse {
  border: none;
}
</style>
