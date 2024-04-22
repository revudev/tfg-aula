import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./components/perfil/perfil.component').then(
        (c) => c.PerfilComponent
      ),
  },
  {
    path: 'iniciarrhh',
    loadComponent: () =>
      import('./components/iniciarrhh/iniciarrhh.component').then(
        (c) => c.IniciarrhhComponent
      ),
  },
  {
    path: 'mercamarke',
    loadComponent: () =>
      import('./components/mercamarke/mercamarke.component').then(
        (c) => c.MercamarkeComponent
      ),
  },
  {
    path: 'gestions',
    loadComponent: () =>
      import('./components/gestiones/gestiones.component').then(
        (c) => c.GestionesComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./components/events/events.component').then(
        (c) => c.EventsComponent
      ),
  },
  {
    path: 'plan',
    loadComponent: () =>
      import('./components/plan/plan.component').then((c) => c.PlanComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found').then((c) => c.NotFoundComponent),
  },
];
