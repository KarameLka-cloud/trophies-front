import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: import('./components/auth/Login.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            component: import('./components/auth/Registration.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: import('./components/dashboard/Dashboard.vue'),
            redirect: '/dashboard/user/main',
            children: [
                {
                    path: '/dashboard/user/main',
                    name: 'mainUser',
                    component: import('./components/dashboard/user/MainUser.vue'),
                },
                {
                    path: '/dashboard/user/progress',
                    name: 'progressUser',
                    component: import('./components/dashboard/user/ProgressUser.vue')
                },
                {
                    path: '/dashboard/user/trophies',
                    name: 'trophiesUser',
                    component: import('./components/dashboard/user/TrophiesUser.vue'),
                },
                {
                    path: '/dashboard/user/news',
                    name: 'newsUser',
                    component: import('./components/dashboard/user/NewsUser.vue'),
                },

                {
                    path: '/dashboard/admin/main',
                    name: 'adminMain',
                    component: import('./components/dashboard/admin/MainAdmin.vue'),
                },
                {
                    path: '/dashboard/admin/users',
                    name: 'adminUsers',
                    component: import('./components/dashboard/admin/UsersAdmin.vue')
                },
                {
                    path: '/dashboard/admin/trophies',
                    name: 'adminTrophies',
                    component: import('./components/dashboard/admin/TrophiesAdmin.vue'),
                },
                {
                    path: '/dashboard/admin/news',
                    name: 'adminNews',
                    component: import('./components/dashboard/admin/NewsAdmin.vue'),
                },
            ]
        },
    ]
})
