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
            import ('../views/ContactUs.vue')
    },
    {
        path: '/appeals/grade-appeals',
        name: 'GradeAppeals',
        component: () =>
            import ('../views/appeals/GradeAppeals.vue')
    },
    {
        path: '/academic-integrity/academic-dishonesty',
        name: 'AcademicDishonesty',
        component: () =>
            import ('../views/academic-integrity/AcademicDishonesty.vue')
    },
    {
        path: '/academic-integrity/student-grievance',
        name: 'StudentGrievance',
        component: () =>
            import ('../views/academic-integrity/StudentGrievance.vue')
    },
    {
        path: '/academic-integrity/violations-of-student-code-of-conduct',
        name: 'ViolationsOfStudentCodeOfConduct',
        component: () =>
            import ('../views/academic-integrity/ViolationsOfStudentCodeOfConduct.vue')
    }



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router