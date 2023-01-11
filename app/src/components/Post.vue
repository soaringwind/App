<template>
<div class="postCon">
    <el-container class="postCont">
      <el-header class="title">
        <el-link type="primary" href="#">{{ title }}</el-link>
      </el-header>
      <el-main class="content overflowEllipsisStyle">
        <div class="overflowEllipsisStyle">
          <p class="overflowEllipsisStyle">
            {{ title }}第一个帖子的内容: {{ content }}<br />
            I dabbled around a lot when I decided to learn to code <br />
            I went from A to Z with resources <br />
            When I decided to make my own things <br />
            I discovered I've been in the old all while <br />
            So I remained a novice in coding <br />
            But then I found freeCodeCamp <br />
            I got my hands on the platform <br />
            I went from novice to ninja in coding <br />
            And now I'm a camper for life <br />
          </p>
        </div>
      </el-main>
      <el-footer class="foot">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PostView',
  props: {
    title: String, 
    content: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p{
  margin: 0px;
}
.postCon{
  width: 80%;
  height: 200px;
  border: 1px solid #efefef;
}
.postCont{
  height: 100%;
}
.title{
  height: 40px;
  align-items: center;
  .el-link{
    padding-top: 10px;
  }
}
.content{
  margin: 0px;
  height: 120px;
}
.foot{
  height: 40px;
}
.overflowEllipsisStyle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.el-link {
  margin-right: 0px;
  font-size: large;
  color: blue;
}
</style>
