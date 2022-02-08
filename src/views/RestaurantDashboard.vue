<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Hilbert Jerde",
    tel: "935-194-4661 x0212",
    address: "7666 MacGyver Ford",
    opening_hours: "08:00",
    description: "omnis",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=33.779635623332574",
    viewCounts: 1,
    createdAt: "2022-01-24T10:33:10.000Z",
    updatedAt: "2022-02-07T15:36:45.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Animi rerum dolores enim est quia et.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$OEpYPwy1SULoNCUJ9FAiXOzZhpCkXliy.4dUCZXLBsFPSlrWTIRT2",
          isAdmin: true,
          image: null,
          createdAt: "2022-01-24T10:33:09.000Z",
          updatedAt: "2022-01-24T10:33:09.000Z",
        },
      },
      {
        id: 101,
        text: "Perferendis possimus minima corporis animi quis praesentium.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$OEpYPwy1SULoNCUJ9FAiXOzZhpCkXliy.4dUCZXLBsFPSlrWTIRT2",
          isAdmin: true,
          image: null,
          createdAt: "2022-01-24T10:33:09.000Z",
          updatedAt: "2022-01-24T10:33:09.000Z",
        },
      },
      {
        id: 51,
        text: "Nihil eius velit enim quia incidunt nemo enim amet assumenda.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$kC7d3SpwVWNisG25ZhSJ1.wLBlW5kexc9q3Ryh4ak0rT1xAd8Omw6",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-24T10:33:09.000Z",
          updatedAt: "2022-01-24T10:33:09.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        viewCounts: 0,
        commentsLength: 0,
      },
    };
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        viewCounts: dummyData.restaurant.viewCounts,
        commentsLength: dummyData.restaurant.Comments.length,
      };
    },
  },
  created() {
    this.fetchRestaurant();
  },
};
</script>
