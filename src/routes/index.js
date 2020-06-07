import Projects from '../components/projects/Projects';
import CreateProject from '../components/projects/CreateProject';
import Members from '../components/members/Members';
import Notices from '../components/notices/Notices';
import Home from '../components/home/Home';
import CreateMember from '../components/members/CreateMember'
import CreateNotice from "../components/notices/CreateNotice";
import Achievements from "../components/achievements/Achievements";
import CreateAchievement from "../components/achievements/CreateAchievement";
import Auth from "../components/auth/Login";
import store from "../store"

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/");
};
  
const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/login");
};

export const routes = [
    {
        path : '',
        component : Home
    },
    {
        path : '/projects',
        component: Projects
    },
    {
        path : '/projects/addProject',
        component: CreateProject,
        beforeEnter: ifAuthenticated
    },
    {
        path : '/members',
        component: Members
    },
    {
        path : '/members/addMember',
        component: CreateMember,
        beforeEnter: ifAuthenticated
    },
    {
        path : '/notices',
        component: Notices
    },
    {
        path : '/notices/addNotice',
        component: CreateNotice,
        beforeEnter: ifAuthenticated
    },
    {
        path : '/achievements',
        component: Achievements
    },
    {
        path : '/achievements/addAchievement',
        component: CreateAchievement,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/login',
        component: Auth,
        beforeEnter: ifNotAuthenticated
    }
]
