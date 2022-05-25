import Vue from 'vue';
import Vuex from 'vuex';
import surveyStore from './modules/surveyStore';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        surveyStore,
    },
});
