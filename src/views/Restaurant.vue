<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" />
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";

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
    updatedAt: "2022-02-07T15:36:45.973Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
  },
};
</script>
