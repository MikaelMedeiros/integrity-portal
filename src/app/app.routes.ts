
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/navbar/navbar.component')
        .then(m => m.NavComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'principle',
        loadComponent: () =>
          import('./pages/principle/select-principle/select-principle.component')
            .then(m => m.SelectPrincipleComponent),
        data: {
          breadcrumb: 'Princípios'
        }
      },
      {
        path: 'principle/:id',
        loadComponent: () =>
          import('./pages/principle/detail-principle/detail-principle.component')
            .then(m => m.DetailPrincipleComponent),
        data: {
          breadcrumb: 'Detalhe do Princípio'
        }
      }
    ]
  }
];
