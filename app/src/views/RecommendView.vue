<template>
    <p>推荐</p>
    <PostView :title="'这是第一个帖子'" :content="'hello world'" :itemId="1"></PostView>
    <PostView :title="'这是第二个帖子'" :content="'hello world'" :itemId="2"></PostView>
</template>

<script>
import PostView from '../components/Post.vue'
export default {
  name: 'RecommendView',
  setup() {
  },
  components: {
    PostView, 
  }
}
</script>
