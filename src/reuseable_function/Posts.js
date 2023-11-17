import { ref } from "vue";

// create reuseable getPost 
const getPosts = () => {
  // fetch data from data/data.json to posts
  const posts = ref([]);
  const error = ref(null); // for check error when fetch

  // in this case use async await for fetch data in json-server
  // http://localhost:3000/posts
  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      console.log("data in Posts.js: ", data);
      if (!data.ok) {
        throw Error("Data not available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log("Erorrr Posts");
    }
  };

  load();

  return {posts, error, load}
};

export default getPosts