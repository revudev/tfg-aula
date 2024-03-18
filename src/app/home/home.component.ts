import { Component } from '@angular/core';
import { HomeModule } from './home.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  userLogged: boolean = false;
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
 }