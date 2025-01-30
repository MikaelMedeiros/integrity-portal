// app.routes.ts
import { Routes } from '@angular/router';
// import { authGuard } from './guards/auth.guard';

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
    // canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component')
            .then(m => m.HomeComponent),
        data: {
          breadcrumb: [
            { label: 'Home', routerLink: '/home' }
          ]
        }
      },
      {
        path: 'principle',
        loadComponent: () =>
          import('./pages/principle/select-principle/select-principle.component')
            .then(m => m.SelectPrincipleComponent),
        data: {
          breadcrumb: [
            { label: 'Home', routerLink: '/home' },
            { label: 'Princípios', routerLink: '/principle' }
          ]
        }
      },
      {
        path: 'principle/:id',
        loadComponent: () =>
          import('./pages/principle/detail-principle/detail-principle.component')
            .then(m => m.DetailPrincipleComponent),
        data: {
          breadcrumb: [
            { label: 'Home', routerLink: '/home' },
            { label: 'Princípios', routerLink: '/principle' }
          ]
        }
      }
    ]
  }
];
