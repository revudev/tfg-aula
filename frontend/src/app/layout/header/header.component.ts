import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'header.component.html',
  styles: `.bg-full { height: 100vh; }`,
})
export class HeaderComponent {
  userLogged: boolean = false;
  isMobileMenuOpen: boolean = false;
  dropdownOpen: boolean = false;
  currentUser: any;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getUserLS();
    this.userLogged = !!this.currentUser;
  }
  logout(): void {
    this.authService.logout();
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
