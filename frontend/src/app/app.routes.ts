import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './not-found';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { PlanComponent } from './components/plan/plan.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'events', component: EventsComponent},
  {path: 'plan', component: PlanComponent},
  //Rutas para las secciones

  { path: '**', component: NotFoundComponent}
];
