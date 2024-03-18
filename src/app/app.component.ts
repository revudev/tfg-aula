import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styles: `.bg-full { height: 100vh; }`
})

export class AppComponent { 
  title = 'Aula-Emprende'; 
  userLogged: boolean = false;
  isMobileMenuOpen = false;

  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
}