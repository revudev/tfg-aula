import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './not-found';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { PlanComponent } from './components/plan/plan.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IniciarrhhComponent } from './components/iniciarrhh/iniciarrhh.component';
import { MercamarkeComponent } from './components/mercamarke/mercamarke.component';
import { GestionesComponent } from './components/gestiones/gestiones.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'iniciarrhh', component: IniciarrhhComponent },
  { path: 'mercamarke', component: MercamarkeComponent },
  { path: 'gestions', component: GestionesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  { path: 'plan', component: PlanComponent },

  { path: 'perfil', component: PerfilComponent },

  { path: '**', component: NotFoundComponent },
];
