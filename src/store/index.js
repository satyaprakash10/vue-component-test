import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { users: [] },

  getters: {
    getUsers(state) {
      console.log(state);
      return state.users;
    },
  },

  mutations: {
    SET_USERS(state, users) {
      console.log(state);
      state.users = users;
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },

  modules: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
});
