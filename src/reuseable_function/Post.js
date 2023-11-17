import { ref } from "vue";

// create reuseable getPost 
const getPost = (id) => {
  // fetch data from data/data.json to posts
  const post = ref(null);
  const error = ref(null); // for check error when fetch

  // in this case use async await for fetch data in json-server
  // http://localhost:3000/posts
  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("Post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log("Erorrr Post");
    }
  };

  load();

  return {post, error, load}
};

export default getPost