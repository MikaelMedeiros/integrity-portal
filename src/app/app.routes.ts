
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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'principle/:id',
        loadComponent: () =>
          import('./pages/principle/detail-principle/detail-principle.component')
            .then(m => m.DetailPrincipleComponent),
        data: {
          nome: 'name',
          breadcrumb: 'detail'
        }
      }
    ]
  }
];
