<template>
<div class="postCon">
    <el-container class="postCont">
      <el-header class="title">
        <el-link type="primary" href="#">{{ title }}</el-link>
      </el-header>
      <el-main class="content">
        <div class="contDiv">
          <el-button type="primary" class="readmore" @click="readmore">展开</el-button>
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
      <el-footer class="foot">
        <div class="footCon">
          <el-button type="primary">喜欢</el-button>
          <el-button type="primary">不喜欢</el-button>
          <el-button type="primary">评论</el-button>
          <el-button type="primary" class="readless" @click="readless">收起</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PostView',
  setup() {
    let readmore=()=>{
      let readMoreBtn = document.getElementsByClassName('readmore')[0]
      let readLessBtn = document.getElementsByClassName('readless')[0]
      let readMoreStyle = document.getElementsByClassName('postCon')[0].style
      readMoreStyle.height = '1000px'
      readMoreBtn.style.display = 'none'
      readLessBtn.style.display = 'block'
    }
    let readless=()=>{
      let readMoreBtn = document.getElementsByClassName('readmore')[0]
      let readLessBtn = document.getElementsByClassName('readless')[0]
      let readMoreStyle = document.getElementsByClassName('postCon')[0]
      readMoreStyle.style.height = '200px'
      readMoreBtn.style.display = 'block'
      readLessBtn.style.display = 'none'
    }
    return {
      readmore, 
      readless
    }
  },
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
  height: 205px;
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
  padding-bottom: 10px;
  height: 120px;
}
.contDiv{
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
}
.readmore{
  position: absolute;
  right: 0;
  bottom: 0;
  border: 0px;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(20, 182, 232, 0.7));
}
.foot{
  height: 40px;
  margin-bottom: 5px;
}
.footCon{
  position: relative;
  height: 100%;
}
.readless{
  position: absolute;
  right: 0;
  bottom: 0;
  border: 0px;
  width: 60px;
  height: 20px;
  display: none;
}
.overflowEllipsisStyle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 2;
}
.el-link {
  margin-right: 0px;
  font-size: large;
  color: blue;
}
</style>
