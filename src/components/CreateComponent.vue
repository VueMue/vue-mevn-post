<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Post Title:</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="post.title"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="body" style="display: block">Post Body:</label>
            <textarea
              name="body"
              id="body"
              rows="5"
              cols="55"
              v-model="post.body"
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
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
  methods: {
    addPost() {
      let uri = "http://localhost:4000/posts/add";
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  cursor: pointer;
}
</style>