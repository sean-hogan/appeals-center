import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/ContactUs.vue')
    },
    {
        path: '/appeals/grade-appeals',
        name: 'GradeAppeals',
        component: () =>
            import ( /* webpackChunkName: "grade-appeals" */ '../views/appeals/GradeAppeals.vue')
    },
    {
        path: '/appeals/tuition-appeals',
        name: 'TuitionAppeals',
        component: () =>
            import ( /* webpackChunkName: "tuition-appeals" */ '../views/appeals/TuitionAppeals.vue')
    },
    {
        path: '/appeals/provost-appeals',
        name: 'ProvostAppeals',
        component: () =>
            import ( /* webpackChunkName: "provost-appeals" */ '../views/appeals/ProvostAppeals.vue')
    },
    {
        path: '/appeals/retroactive-withdrawal',
        name: 'RetroactiveWithdrawal',
        component: () =>
            import ( /* webpackChunkName: "retroactive-withdrawal" */ '../views/appeals/RetroactiveWithdrawal.vue')
    },
    {
        path: '/appeals/satisfactory-academic-progress',
        name: 'SatisfactoryAcademicProgress',
        component: () =>
            import ( /* webpackChunkName: "satisfactory-academic-progress" */ '../views/appeals/SatisfactoryAcademicProgress.vue')
    },
    {
        path: '/academic-integrity/academic-dishonesty',
        name: 'AcademicDishonesty',
        component: () =>
            import ( /* webpackChunkName: "academic-dishonesty" */ '../views/academic-integrity/AcademicDishonesty.vue')
    },
    {
        path: '/academic-integrity/student-grievance',
        name: 'StudentGrievance',
        component: () =>
            import ( /* webpackChunkName: "student-grievance" */ '../views/academic-integrity/StudentGrievance.vue')
    },
    {
        path: '/academic-integrity/violations-of-student-code-of-conduct',
        name: 'ViolationsOfStudentCodeOfConduct',
        component: () =>
            import ( /* webpackChunkName: "violations-of-student-code-of-conduct" */ '../views/academic-integrity/ViolationsOfStudentCodeOfConduct.vue')
    }



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    //base: publicPath,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100,
            }
        } else {
            return { left: 0, top: 0 }
        }
    }
})

export default router