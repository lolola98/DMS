import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '설문조사',
            component: () => import('@/page/travelApplication/SurveyContainer.vue'),
        },
    ],
});

export default router;
