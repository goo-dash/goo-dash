import Vue from 'vue';
import Router from 'vue-router';
import animateScrollTo from 'animated-scroll-to';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Authors from '@/pages/Authors/Authors';
import Contribute from '@/pages/Contribute/Contribute';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors,
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: Contribute,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const options = {
    speed: 1500,
    minDuration: 250,
    maxDuration: 3000,
    cancelOnUserAction: false,
  };
  animateScrollTo(0, options);
  next();
});

export { router as default };
