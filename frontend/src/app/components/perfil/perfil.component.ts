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
  messageComments?: messageResponsive;
  comments?: any[];

  ngOnInit() {
    this.currentUser = this.authService.getUserLS();
    if (this.currentUser) {
      this.getPlan();
      this.getComments();
    }
  }
  setCurrentIndex(index: number) {
    this.authService.setCurrentTILS(index);
  }
  getComments() {
    this.authService.getComments(this.currentUser?.id).subscribe({
      next: (response) => {
        console.log(response);
        this.comments = response;
        this.messageComments = {
          message: `Tienes ${this.comments?.length} mensajes nuevos: `,
          resultado: true,
        };
      },
      error: (error) => {
        console.log(error);
        this.messageComments = {
          message: 'No tienes mensajes',
          resultado: true,
        };
      },
    });
  }
  deleteComment(id: number) {
    this.authService.deleteComment(id).subscribe({
      next: (response) => {
        this.router.navigate(['/perfil']).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      },
      error: (err) => alert(err),
    });
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
