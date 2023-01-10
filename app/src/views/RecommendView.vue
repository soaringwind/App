<template>
    <p>推荐</p>
    <PostView :msg="'dfsf'"></PostView>
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