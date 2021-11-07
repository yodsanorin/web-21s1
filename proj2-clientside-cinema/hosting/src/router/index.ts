import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CinemaList from '../views/CinemaList.vue'
import films from '../views/FilmsList.vue'
import CinemaDetails from '../views/CinemaDetails.vue'
import FilmDetails from '../views/FilmDetails.vue'
import Book from '../views/Book.vue'
import Tickets from '../views/Tickets.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'FilmList',
    component: films
  },
  {
    path: '/films/:slug',
    name: 'FilmDetails',
    component: FilmDetails
  },
  {
    path: '/cinemas',
    name: 'CinemaList',
    component: CinemaList
  },
  {
    path: '/cinemas/:slug',
    name: 'CinemaDetails',
    component: CinemaDetails
  },
  {
    path: '/book/:slug',
    name: 'Book',
    component: Book
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
