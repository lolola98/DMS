import Vue from 'vue';
import Vuex from 'vuex';
import authStore from './modules/auth';
import surveyStore from './modules/survey';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        authStore,
        surveyStore,
    },
});
