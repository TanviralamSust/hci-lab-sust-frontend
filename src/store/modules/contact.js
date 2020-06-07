import axios from "axios";
import apiConfig from "../../config";

const contactModule = {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    sendContact(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(apiConfig.API_URL + '/contact',payload).then(response=>{
          console.log(response.data);
          resolve(response.data);
        }).catch(err=>{
          console.log(err);
          reject(err);
        })
      })
    },
  }
};

export default contactModule;
