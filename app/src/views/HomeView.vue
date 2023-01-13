<template>
  <div class="commonLayout">
    <el-container>
      <el-header class="titleHeader">
        <el-row class="title" align="middle">
          <el-col :span="4">
            <el-button class="mainText" style="background: orange; border:0px">音乐论坛</el-button>
          </el-col>
          <el-col :span="16" class="primaryTitle">
            <div class="middleText">
              <el-menu mode="horizontal" default-active="recommendations" :router="true" class="menu" type="flex">
                <el-menu-item class="perTitle" :route="i.path" v-for="i in tabList" :key="i.name" :index="i.name">
                  <template #title>{{ i.meta.title }}</template>
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
          <el-col :span="2">
            <div>
              <router-link to="WritePost">
                <el-button class="sendText" style="background: orange; border: 0px">发帖</el-button>
              </router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div>
              <el-button class="loginText" style="background: orange; border: 0px">登录/注册</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from '../router/index';
// import { reactive } from 'vue';
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    let tabList = router.options.routes[0].children;
    tabList = tabList.filter(v => v.meta.isShow)
    return { tabList }
  }
}
</script>

<style scoped lang="scss">
.commonLayout {
  margin: 0px;
}

.titleHeader {
  background-color: white;
}

.title {
  text-align: center;
}

.mainText {
  background-color: orange;
  color: white;
  font-size: 22px;
}

.loginText {
  font-size: 18px;
}

.el-row {
  // 垂直对齐
  height: 100%;
}

.perTitle {
  font-size: 18px;
}

.middleText {
  display: flex;
  margin-left: 25%;
}
</style>
