
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
            .then(m => m.HomeComponent)
      },
      {
        path: 'principle/:id',
        loadComponent: () =>
          import('./pages/principle/detail-principle/detail-principle.component')
            .then(m => m.DetailPrincipleComponent)
      }
      // Adicione outras rotas protegidas aqui
    ]
  }
];
