import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  exports: [
    AppComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class AppModule { }
