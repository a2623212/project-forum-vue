<template>
  <div class="container py-5">
    <!-- AdminUserForm -->
    <AdminUserForm :initial-user="user" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    image: "https://i.imgur.com/58ImzMM.png",
  },
};
import AdminUserForm from "./../components/AdminUserForm";
export default {
  name: "AdminUserEdit",
  components: {
    AdminUserForm,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
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
    fetchUser(userId) {
      console.log("user id:", userId);
      this.user = {
        id: dummyData.profile.id,
        name: dummyData.profile.name,
        image: dummyData.profile.image,
      };
    },
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
