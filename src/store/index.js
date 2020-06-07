import Vue from 'vue'
import Vuex from 'vuex';
import projectModule from "./modules/project";
import authModule from "./modules/auth";
import noticeModule from "./modules/notice";
import memberModule from "./modules/member";
import achievementModule from "./modules/achievement";
Vue.use(Vuex);

const modules = {
  projectModule,
  authModule,
  noticeModule,
  memberModule,
  achievementModule
};

export default new Vuex.Store({
  modules: modules
});
