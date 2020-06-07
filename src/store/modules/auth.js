import axios from "axios";
import apiConfig from "../../config";
import cookies from "js-cookie";

const authModule = {
  state: {
    token: cookies.get("user-token") || "",
    status: "",
    hasLoadedOnce: false,
    refreshToken: cookies.get("refresh-token") || "",
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    }
  },
  mutations: {
    loginUser(state, payload) {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.status = "success";
    },
    loginError(state, payload) {
      state.status = "error";
    },
    logoutUser(state, payload) {
      state.token = "";
      state.refreshToken = "";
      state.status = "";
      cookies.remove("user-token");
      cookies.remove("refresh-token");
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    loginUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(apiConfig.API_URL + '/login', payload)
          .then(resp => {
            cookies.set("user-token", resp.data.token);
            cookies.set("refresh-token", resp.data.refreshToken);
            context.commit('loginUser', resp.data);
            // dispatch(USER_REQUEST);
            resolve(resp);
          })
          .catch(err => {
            console.log(err);
            context.commit('loginError', err);
            cookies.remove("user-token");
            cookies.remove("refresh-token");
            reject(err);
          });
      });
    },

    sendRefreshToken(context) {
      return new Promise((resolve, reject )=>{
        let body = {
          refreshToken: this.state.refreshToken,
        };
        axios.post(apiConfig.API_URL + '/token', body).then(response =>{
          console.log(response+'---------------ref token');
          resolve(response);
        }).catch(err=>{
          reject(err);
        })
      })
    },
    setToken(context, payload) {
      context.commit('setToken',payload);
    },
    logoutUser(context, payload) {
      context.commit('logoutUser')
    },
  }
};

export default authModule;
