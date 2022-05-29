import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            name: '메인',
            component: () => import('@/page/main/Main.vue'),
        },
        {
            path: '/notic',
            name: '알림',
            component: () => import('@/page/notification/Notification.vue'),
        },
        {
            path: '/travel',
            name: '여행지도',
            component: () => import('@/page/travelMap/TravelMap.vue'),
        },
        {
            path: '/',
            name: '솔루션',
            component: () => import('@/page/solution/SolutionContainer.vue'),
        },
        {
            path: '/survey',
            name: '설문조사',
            component: () => import('@/page/travelApplication/SurveyContainer.vue'),
        },
    ],
});

export default router;
