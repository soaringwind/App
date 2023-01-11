<template>
<div class="postCon">
    <el-container class="postCont">
      <el-header class="title">
        <el-link type="primary" href="#">{{ title }}</el-link>
      </el-header>
      <el-main class="content">
        <div class="contDiv">
          <el-button type="primary" class="readmore" @click="readmore">点击展开全文</el-button>
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
  setup() {
    let readmore=()=>{
      console.log('阅读全文')
      console.log(document.getElementsByClassName('postCon'))
      let readMoreBtn = document.getElementsByClassName('readmore')[0]
      let readMoreStyle = document.getElementsByClassName('postCon')[0].style
      // let readMoreMainStyle = document.getElementsByClassName('contDiv')[0].style
      readMoreStyle.height = '1000px'
      readMoreBtn.style.display = 'none'
      // readMoreMainStyle.height = '200px'
    }
    return {
      readmore
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
  background-image: linear-gradient(#fff, rgba(255,255,255,0));
}
.foot{
  height: 40px;
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
