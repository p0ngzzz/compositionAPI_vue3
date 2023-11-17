<template>
  <div class="home">
    <!-- create condition if get error when fetch -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading data json...</div>
    <!-- use lifecycle hook -->
    <!-- <button @click="togglePost">toggle posts</button>
    <button @click="posts.pop()">DeletePost</button> -->
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from '../reuseable_function/Posts';

export default {
  name: "Home",
  components: { PostList },
  setup() {

    // use getPost from Post.js reuseable function
    const {posts, error} = getPosts();

    //   use lifecycle hook with button
    const showState = ref(true);
    // console.log(showState.value);
    const togglePost = () => {
      showState.value = !showState.value;
    };
    

    return {posts, error, showState, togglePost };
  },
};
</script>
