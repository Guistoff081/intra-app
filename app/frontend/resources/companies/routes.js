export default [
  {
    path: '/companies',
    component: () => import('./components/Index.vue'),
    name: 'companies_path',
    meta: {
      resourceIndexUrl: '/companies'
    }
  }
];
