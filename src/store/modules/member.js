import axios from "axios";
import apiConfig from "../../config";
import cookies from "js-cookie";

const memberModule = {
  state: {
    members: [],
  },
  getters: {
    getMembers(state) {
      return state.members;
    },
  },
  mutations: {
    createMember(state, payload) {
      state.members.push(payload);
    },
    fetchMembers(state, payload) {
      state.members = payload;
    },
  },
  actions: {
    createMember(context, payload) {
      let bodyFormData = new FormData();
      bodyFormData.set('firstName', payload.firstName);
      bodyFormData.set('lastName', payload.lastName);
      bodyFormData.set('email', payload.email);
      bodyFormData.set('researchInterest', payload.researchInterest);
      bodyFormData.set('designation', payload.designation);
      bodyFormData.set('currentWork', payload.currentWork);
      bodyFormData.append('memberImage', payload.memberImage);

      console.log(this.state.token+" ==============2>token");

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + cookies.get("user-token"),
        }
      };

      return  axios.post(apiConfig.API_URL + '/members', bodyFormData, config).then(response => {
        context.commit('createMember', response.data);
        return response;
      });
    },
    fetchMembers(context) {
      axios.get(apiConfig.API_URL + '/members').then(response => {
        console.log(response.data);
        context.commit('fetchMembers', response.data);
      }).catch(function (err) {
        console.log(err)
      });
    },
    onDeleteMember(context, payload) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + cookies.get("user-token"),
        }
      };
      return axios.delete(apiConfig.API_URL + '/members/'+payload, config)
        .then(response=>{
          return response;
        }).catch(err=>{
          return err;
        })
    },
  }
};

export default memberModule;
