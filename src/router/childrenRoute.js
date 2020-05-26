export const childrenRoute = [{
        path: '',
        name: "Default",
        component: () => import("../views/Default.vue")
    },
    {
        path: '/About',
        name: "About",
        component: () => import("../views/About.vue")
    },
    {
        path: '/Resume', // 忘写了加下去
        name: "Resume",
        component: () => import("../views/Resume.vue")
    },
    {
        path: '/Portfolio', // 忘写了加下去
        name: "Portfolio",
        component: () => import("../views/Portfolio.vue")
    }
];