<template>
  <div class="postCon" :name="itemId">
      <el-container class="postCont">
        <el-header class="title">
          <el-link type="primary" href="#">{{ title }}</el-link>
        </el-header>
        <el-main class="content">
          <div class="contDiv">
            <el-button type="primary" class="readmore" v-on:click="readmore(itemId)">展开</el-button>
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
            <el-button type="primary" class="Button">喜欢</el-button>
            <el-button type="primary" class="Button">不喜欢</el-button>
            <el-button type="primary" class="Button">评论</el-button>
            <el-button type="primary" class="readless" @click="readless(itemId)">收起</el-button>
          </div>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostView',
    setup() {
      let readmore=(itemId)=>{
        let parentNode=document.getElementsByName(itemId)[0]
        let readMoreBtn = parentNode.getElementsByClassName('readmore')[0]
        let readLessBtn = parentNode.getElementsByClassName('readless')[0]
        let contDiv = parentNode.getElementsByClassName('contDiv')[0]
        let cont = parentNode.getElementsByClassName('content')[0]
        contDiv.style.overflow = 'visible'
        readMoreBtn.style.display = 'none'
        readLessBtn.style.display = 'block'
        cont.style.height = 'fit-content'
      }
      let readless=(itemId)=>{
        let parentNode=document.getElementsByName(itemId)[0]
        let readMoreBtn = parentNode.getElementsByClassName('readmore')[0]
        let readLessBtn = parentNode.getElementsByClassName('readless')[0]
        let contDiv = parentNode.getElementsByClassName('contDiv')[0]
        let cont = parentNode.getElementsByClassName('content')[0]
        cont.style.height = '120px';
        contDiv.style.overflow = 'hidden'
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
      content: String, 
      itemId: Number
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  p{
    margin: 0px;
  }
  .postCon{
    width: 694px;
    // height: 205px;
    height: fit-content;
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
    padding-top: 10px;
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
    font-size: 10px;
      // overflow: hidden;
      // white-space: nowrap;
      // text-overflow: ellipsis;
      // display: -webkit-box;
      // -webkit-box-orient: vertical;
      // -webkit-line-clamp: 2;
  }
  .el-link {
    margin-right: 0px;
    font-size: large;
    color: blue;
  }
  .Button{
    height: 30px;
  }
  </style>
  
