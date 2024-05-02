import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../service/AuthGuard.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // skip lazy loading by main video
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
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
    path: 'perfil',
    loadComponent: () =>
      import('./components/perfil/perfil.component').then(
        (c) => c.PerfilComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./components/events/events.component').then(
        (c) => c.EventsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'plan',
    loadComponent: () =>
      import('./components/plan/plan.component').then((c) => c.PlanComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: () => import('./not-found').then((c) => c.NotFoundComponent),
  },
];
