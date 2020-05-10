<template>
  <div class="home">
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import postList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: {
    postList,
  }
}
</script>
