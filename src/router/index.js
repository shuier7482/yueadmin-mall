import Layout from '@/components/Layout'
import Home from '@/pages/home'
import List from '@/pages/list'
import Detail from '@/pages/detail'
import Order from '@/pages/order'
const routes = [
	{
		path: '/',
    name: 'index',
    redirect: '/home'
	},
	{
    path: '/',
    name: 'Hello',
    component: Layout,
    children: [
    	{ path: 'home', name: 'home', component: Home },
    	{ path: 'list', name: 'list', component: List },
    	{ path: 'native', name: 'native', component: List },
    	{ path: 'oversea', name: 'oversea', component: List },
    	{ path: 'travel', name: 'travel', component: List },
    	{ path: 'detail', name: 'detail', component: Detail },
    	{ path: 'order', name: 'book', component: Order },
    ]
  },

]
export default routes
