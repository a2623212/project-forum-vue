<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Isai Blanda",
      tel: "973-420-2671 x770",
      address: "32527 Brionna Locks",
      opening_hours: "08:00",
      description: "Ullam iusto mollitia voluptatem dolore molestias m",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.04909446572691",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Scotty Gislason",
      tel: "1-389-492-5705",
      address: "6129 Jon Alley",
      opening_hours: "08:00",
      description: "A sed consequatur rerum tempora aut sunt.\nQuia id ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.2350874441712474",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Rafaela Roob",
      tel: "1-154-010-7474 x03952",
      address: "525 Nya Cove",
      opening_hours: "08:00",
      description: "hic",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.30781920578876",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Everardo Weber",
      tel: "(409) 471-9566 x62596",
      address: "51372 Donavon Ranch",
      opening_hours: "08:00",
      description: "Consequatur aut omnis est impedit ut eos labore la",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.96316616403517",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Rachael Waters",
      tel: "621.096.6881",
      address: "664 Benny Stream",
      opening_hours: "08:00",
      description: "Magnam mollitia expedita qui ea consequatur. Volup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.129032217818175",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Palma Hane",
      tel: "811.466.6531",
      address: "2466 Justine Branch",
      opening_hours: "08:00",
      description: "Dolores sint ut sit consequatur expedita.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.78713156969505",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Morgan Sporer I",
      tel: "085.518.2855 x2130",
      address: "14531 Mayer Manors",
      opening_hours: "08:00",
      description: "Et nisi eveniet et id laboriosam blanditiis iusto ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.54586971616148",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Burdette Lubowitz",
      tel: "1-618-589-1151 x70203",
      address: "591 Wolf Landing",
      opening_hours: "08:00",
      description: "Ipsam modi fugiat ipsum ut. Voluptas neque omnis m",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.90167413540065",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Mrs. Jalyn Gerlach",
      tel: "976.807.6559 x081",
      address: "879 Ernser Villages",
      opening_hours: "08:00",
      description: "Quos voluptas quod corrupti assumenda. Sunt archit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.54399342056597",
      viewCounts: 0,
      createdAt: "2022-01-24T10:33:10.000Z",
      updatedAt: "2022-01-24T10:33:10.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  name: "restaurantsTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          FavoriteCount: restaurant.FavoriteCount - 1,
          isFavorited: false,
        };
      });
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          FavoriteCount: restaurant.FavoriteCount + 1,
          isFavorited: true,
        };
      });
    },
  },
};
</script>
