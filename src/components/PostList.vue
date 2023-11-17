<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <!-- create new component SinglePost -->
      <SinglePost  :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import SinglePost from "../components/SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    // console.log(props.posts);
    //   use lifecycle hook
    onMounted(() => console.log("Component mounted"));
    onUnmounted(() => console.log("Component unmounted"));
  },
//   can be mount outside setup()
mounted() {
    // console.log("mounted outside setup")
},
update() {

},
unmounted() {

}
};
</script>

<style></style>
