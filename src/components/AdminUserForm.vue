<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="user.name"
        type="text"
        name="name"
        class="form-control"
        placeholder="Enter Name"
        required
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="user.image"
        :src="user.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AdminUserForm",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        name: "",
        image: "",
      }),
    },
  },
  created() {
    this.user = {
      ...this.user,
      ...this.initialUser,
    };
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  methods: {
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      console.log("123");
      const form = e.target; // <form></form>
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>
