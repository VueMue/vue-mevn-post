<template>
  <div>
    
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Post Title</label>
            <input type="text" class="form-control" v-model="post.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="body">Post Body:</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              class="form-control"
              v-model="post.body"
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  created() {
    let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    this.axios.get(uri).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost() {
      let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
