import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
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
        path: '/appeals/sap-max-time-frame',
        name: 'SAPMaxTimeFrame',
        component: () =>
            import ( /* webpackChunkName: "sap-max-time-frame" */ '../views/appeals/SAPMaxTimeFrame.vue')
    },
    {
        path: '/appeals/sap-probation',
        name: 'SAPProbation',
        component: () =>
            import ( /* webpackChunkName: "sap-probation" */ '../views/appeals/SAPProbation.vue')
    },
    {
        path: '/appeals/sap-suspension',
        name: 'SAPSuspension',
        component: () =>
            import ( /* webpackChunkName: "sap-suspension" */ '../views/appeals/SAPSuspension.vue')
    },
    {
        path: '/appeals/sap-financial-aid',
        name: 'SAPFinancialAid',
        component: () =>
            import ( /* webpackChunkName: "sap-financial-aid" */ '../views/appeals/SAPFinancialAid.vue')
    },
    {
        path: '/academic-integrity/academic-dishonesty',
        name: 'AcademicDishonesty',
        component: () =>
            import ( /* webpackChunkName: "academic-dishonesty" */ '../views/academic-integrity/AcademicDishonesty.vue')
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            console.log(from)
            console.log(to);
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100,
            }
        } else {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            //scroll to top
            return { left: 0, top: 0 }
        }
    }
})

export default router