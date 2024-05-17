import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { Plan, User, messageResponsive } from '../../../types';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'perfil.component.html',
  styles: ``,
})
export class PerfilComponent {
  constructor(private authService: AuthService, private router: Router) {}

  currentUser?: User;
  currentPlan?: Plan;
  messageResponsive?: messageResponsive;

  ngOnInit() {
    this.currentUser = this.authService.getUserLS();
    if (this.currentUser) this.getPlan();
  }
  setCurrentIndex(index: number) {
    this.authService.setCurrentTILS(index);
  }
  getPlan() {
    this.authService.getPlan(this.currentUser?.id).subscribe({
      next: (response) => {
        this.messageResponsive = {
          message: 'Tu plan es el siguiente: ',
          resultado: true,
        };
        this.currentPlan = response;
      },
      error: (error) => {
        this.messageResponsive = {
          message: `Aun no tienes ningun plan`,
          resultado: false,
        };
      },
    });
  }
}
