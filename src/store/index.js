import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
    token: "",
  },
  // use 'commit' to call
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      };
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem("token");
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true;
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      // 登出時一併將 state 內的 token 移除
      state.token = "";
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  // use 'dispatch' to call
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await usersAPI.getCurrentUser();

        const { id, name, email, image, isAdmin } = data;
        commit("setCurrentUser", {
          id,
          name,
          email,
          image,
          isAdmin,
        });
        return true;
      } catch (error) {
        console.log("error", error);
        console.error("can not fetch user information");
        //驗證失敗直接強制登出
        commit("revokeAuthentication");
        return false;
      }
    },
  },
  modules: {},
});
