<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="!user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-show="user.id !== currentUser.id"
              v-else
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$OEpYPwy1SULoNCUJ9FAiXOzZhpCkXliy.4dUCZXLBsFPSlrWTIRT2",
      isAdmin: true,
      image: null,
      createdAt: "2022-01-24T10:33:09.000Z",
      updatedAt: "2022-01-24T10:33:09.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$kC7d3SpwVWNisG25ZhSJ1.wLBlW5kexc9q3Ryh4ak0rT1xAd8Omw6",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-24T10:33:09.000Z",
      updatedAt: "2022-01-24T10:33:09.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$qhrZaoxt6F/u55QasF0QWuXV83u8wMRMkywz9UgVNi/t.K9rF/sGC",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-24T10:33:09.000Z",
      updatedAt: "2022-01-24T10:33:09.000Z",
    },
  ],
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  created() {
    this.fetchUser();
    this.fetchCurrentUser();
  },
  data() {
    return {
      users: {},
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
    },
    fetchCurrentUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>
