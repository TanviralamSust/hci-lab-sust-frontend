import axios from "axios";
import apiConfig from "../../config";
import cookies from "js-cookie";

const achievementModule = {
  state: {
    achievements: [],
  },
  getters: {
    getAchievements(state) {
      return state.achievements;
    },
  },
  mutations: {
    createAchievement(state, payload) {
      state.achievements.push(payload);
    },
    fetchAchievements(state, payload) {
      state.achievements = payload;
    },
  },
  actions: {

    createAchievement(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('title', payload.title);
      bodyFormData.set('description', payload.description);
      bodyFormData.append('achievmentImage', payload.achievementImage);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + cookies.get("user-token"),
        }
      };
      return  axios.post(apiConfig.API_URL + '/achievments', bodyFormData, config).then(response => {
        context.commit('createAchievement', response.data);
        return response;
      });
    },
    fetchAchievements(context) {
      axios.get(apiConfig.API_URL + '/achievments').then(response => {
        console.log(response.data);
        context.commit('fetchAchievements', response.data);
      }).catch(function (err) {
        console.log(err)

      });
    },
    onDeleteAchievement(context, payload) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + cookies.get("user-token"),
        }
      };
      return axios.delete(apiConfig.API_URL + '/achievments/'+payload, config)
        .then(response=>{
          return response;
        }).catch(err=>{
          return err;
        })
    },
  }
};

export default achievementModule;
