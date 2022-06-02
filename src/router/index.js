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
            path: '/body',
            name: '몸 알아차리기',
            component: () => import('@/page/solution/SolutionContainer.vue'),
        },
        {
            path: '/sleepDiary',
            name: '수면일지',
            component: () => import('@/page/solution/SleepDiary.vue'),
        },
        {
            path: '/',
            name: '꿈일기',
            component: () => import('@/page/solution/DreamDiary.vue'),
        },
        {
            path: '/breath',
            name: '호흡형',
            component: () => import('@/page/solution/SolutionBreath.vue'),
        },
        {
            path: '/survey',
            name: '설문조사',
            component: () => import('@/page/travelApplication/SurveyContainer.vue'),
        },
    ],
});

export default router;
