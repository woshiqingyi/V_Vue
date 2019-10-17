<template>
   <el-card class="v-card-layout">
    <div class="navige-layout">
      <el-card class="navige-left">
        <div class="menu-title">快捷菜单</div>
        <div class="menu-content" router>
          <el-button
            class="per-menu"
            style="height:31px;width:70%;font-size:13px;"
          >账户列表</el-button>
        </div>
      </el-card>
      <div class="navige-right">
        <router-view></router-view>
      </div>
    </div>
    </el-card>
</template>
<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.manage-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
}
.navige-layout {
  margin-top: 20px;
  width: 98%;
  height: 200px;
  display: flex;
}
.navige-left {
  width: 260px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  margin-left: 10px;
}
.navige-right {
  width: 70%;
  margin-left: 15px;
}
.menu-title {
  margin-top: 10px;
  font-weight: 600;
  color: rgb(74, 153, 255);
  border-bottom: 1px rgb(228, 228, 228) solid;
  height: 35px;
}
.menu-content {
  margin-top: 15px;
  flex-direction: column;
  display: flex;
  align-items: center;
}
.per-menu {
  margin-top: 20px;
  color: gray;
  font-size: 14px;
  width: 50%;
  background-color: whitesmoke;
  padding: 5px;
  border-radius: 10px;
}
</style>

