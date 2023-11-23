export default [
  {
    path: '/equipments',
    component: () => import('./components/Index.vue'),
    name: 'equipments_path',
    meta: {
      resourceIndexUrl: '/equipments'
    }
  }
];
