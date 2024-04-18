import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'Aula-Emprende';
}
