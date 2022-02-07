<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";

const dummyData = {
  restaurants: [
    {
      id: 4,
      name: "Tia Waters",
      tel: "1-770-256-3892",
      address: "69376 Elza Plains",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.34470364313296",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Nora Swift",
      tel: "228-609-2023 x49013",
      address: "56128 Rupert Junction",
      opening_hours: "08:00",
      description: "libero",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.169212820351591",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 17,
      name: "Dr. Reinhold Stokes",
      tel: "1-544-089-8501 x52399",
      address: "69990 Jakob Ports",
      opening_hours: "08:00",
      description: "Suscipit fuga sunt dolorum.\nSaepe neque aut corpor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.284733701702045",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 19,
      name: "Garnet King",
      tel: "752-997-6261",
      address: "951 Runolfsson Points",
      opening_hours: "08:00",
      description: "Numquam veritatis est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.4027339886871",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 27,
      name: "Augustus Dooley",
      tel: "(175) 004-9584 x5197",
      address: "3050 Chadrick Dam",
      opening_hours: "08:00",
      description: "Rem quidem est quia a quia et odio soluta. Qui har",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.65082695329529",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 28,
      name: "Candace Lockman",
      tel: "843.384.2303 x58392",
      address: "62593 Providenci Port",
      opening_hours: "08:00",
      description: "Eum aut neque sequi rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.96346878198973",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 30,
      name: "Cali Kilback I",
      tel: "(579) 941-6369 x187",
      address: "13750 Skiles Extension",
      opening_hours: "08:00",
      description: "Et eaque non quod nulla incidunt accusamus. Neque ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.250514192750515",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 35,
      name: "Elinor Corwin V",
      tel: "(124) 319-5381 x593",
      address: "16078 Bosco Lakes",
      opening_hours: "08:00",
      description: "Modi voluptatem praesentium nulla magni reiciendis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.33540617554037",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 36,
      name: "Alvis Zboncak",
      tel: "139.156.6201 x46482",
      address: "61997 Oren Mountain",
      opening_hours: "08:00",
      description: "dolores quae aperiam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.59838699206003",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 43,
      name: "Earl Johnston",
      tel: "(400) 972-5323",
      address: "78345 Stefan Knolls",
      opening_hours: "08:00",
      description: "Sed nisi et id dicta. Est alias exercitationem rer",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.245354854803516",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T10:33:10.000Z",
        updatedAt: "2022-01-24T10:33:10.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
