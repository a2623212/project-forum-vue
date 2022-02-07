<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersProfilingCard
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UsersProfilingCard from "./../components/UsersProfilingCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$OEpYPwy1SULoNCUJ9FAiXOzZhpCkXliy.4dUCZXLBsFPSlrWTIRT2",
      isAdmin: true,
      image: "http://fakeimg.pl/300/282828/EAE0D0/?text=WOW",
      createdAt: "2022-01-24T10:33:09.000Z",
      updatedAt: "2022-01-24T10:33:09.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$kC7d3SpwVWNisG25ZhSJ1.wLBlW5kexc9q3Ryh4ak0rT1xAd8Omw6",
      isAdmin: false,
      image: "http://fakeimg.pl/300/282828/EAE0D0/?text=YEAH",
      createdAt: "2022-01-24T10:33:09.000Z",
      updatedAt: "2022-01-24T10:33:09.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$qhrZaoxt6F/u55QasF0QWuXV83u8wMRMkywz9UgVNi/t.K9rF/sGC",
      isAdmin: false,
      image: "http://fakeimg.pl/300/282828/EAE0D0/?text=HAHA",
      createdAt: "2022-01-24T10:33:09.000Z",
      updatedAt: "2022-01-24T10:33:09.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "UsersTops",
  components: {
    NavTabs,
    UsersProfilingCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
};
</script>
