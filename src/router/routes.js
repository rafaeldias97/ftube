
const routes = [
  {
    path: '/',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login.vue') },
      { path: 'cadastrar', component: () => import('pages/auth/Cadastrar.vue') },
      { path: 'cadastrar2', component: () => import('pages/auth/Cadastrar2.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'profile', component: () => import('pages/tabs/Profile.vue') },
      { path: 'room', component: () => import('pages/tabs/Rooms.vue') },
      { path: 'video', component: () => import('pages/tabs/Videos.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
