import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LoginModule } from '../login/login.module';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    HomeComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  exports: [
    HomeComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class HomeModule { }
