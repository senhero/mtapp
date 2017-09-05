import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Deatail from '@/components/FoodDetail'

Vue.use(Router)

var router = new Router({
	mode:'history',
    routes: [
    	{ path: '/', redirect: { name: "main"}},
        { path: '/main', name:'main', component: Main },
        { path: '/detail/:id',name:'deatail', component: Deatail },
    ]
});

export default router;