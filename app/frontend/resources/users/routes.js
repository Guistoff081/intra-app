export default [
  {
    path: '/users',
    component: () => import('../users/components/Index.vue'),
    name: 'users_path',
    meta: {
      resource: {
        name: 'user',
        indexUrl: '/users',
        modalKey: 'UserCreate'
      }
    }
  }
];
