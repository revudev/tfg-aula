import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { PlanComponent } from './plan/plan.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'events', component: EventsComponent},
  {path: 'plan', component: PlanComponent},
  //Rutas para las secciones

  { path: '**', component: NotFoundComponent}
];
