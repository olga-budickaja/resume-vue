import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/skills',
    name: 'skills-page',
    meta: {layout: 'main'},
    component: () => import('../views/SkillsPage.vue')
  },
  {
    path: '/works',
    name: 'works-page',
    meta: {layout: 'main'},
    component: () => import('../views/WorksPage.vue')
  },
  {
    path: '/certificates',
    name: 'certificates-page',
    meta: {layout: 'main'},
    component: () => import('../views/CertificatesPage.vue')
  },
  {
    path: '/about',
    name: 'hobby-page',
    meta: {layout: 'main'},
    component: () => import('../views/HobbyPage.vue')
  },
  {
    path: '/contacts',
    name: 'contacts-page',
    meta: {layout: 'main'},
    component: () => import('../views/ContactsPage.vue')
  },
  {
    path: '/policy',
    name: 'my-policy',
    meta: {layout: 'main'},
    component: () => import('../components/MyPolicy.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/resume-vue/' : '/'),
  routes
})

export default router
