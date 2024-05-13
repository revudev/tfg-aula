import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { Plan, User } from '../../../types';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: 'perfil.component.html',
  styles: ``,
})
export class PerfilComponent {
  constructor(private authService: AuthService, private router: Router) {}

  currentUser?: User;
  currentPlan?: Plan;
  messageResponsive?: string;

  ngOnInit() {
    this.currentUser = this.authService.getUserLS();
    this.getPlan();
  }
  getPlan() {
    if (this.currentUser) {
      this.authService.getPlan(this.currentUser.user_id).subscribe({
        next: (response) => {
          this.messageResponsive = 'Tu plan es el siguiente: ';
          this.currentPlan = response;
        },
        error: (error) => {
          this.messageResponsive = `Aun no tienes ningun plan ${error})`;
        },
      });
    }
  }
}
