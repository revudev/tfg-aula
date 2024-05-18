import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Plan, User, messageResponsive } from '../../../types';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  constructor(private authService: AuthService) {}

  currentUser?: User;
  allPlan?: any[];
  messageResponsive?: messageResponsive;
  messageComment?: messageResponsive;
  seeMessage: boolean = false;

  ngOnInit() {
    this.currentUser = this.authService.getUserLS();
    if (this.currentUser) this.getAllPlan();
  }
  sendComment(planId: number, text: string) {
    console.log(planId, text);
    this.authService.sendComment(planId, text, this.currentUser?.id).subscribe({
      next: (response) => {
        console.log(response);
        this.messageComment = {
          message: 'Comentario enviado',
          resultado: true,
        };
        this.seeMessage = true;
        setTimeout(() => {
          this.seeMessage = false;
        }, 3000);
      },
      error: (error) => {
        console.log(error);
        this.messageComment = {
          message: 'Error al enviar el comentario',
          resultado: false,
        };
        this.seeMessage = true;
        setTimeout(() => {
          this.seeMessage = false;
        }, 3000);
      },
    });
  }
  getAllPlan() {
    this.authService.getAllPlan().subscribe({
      next: (response) => {
        this.messageResponsive = {
          message: 'Planes disponibles: ',
          resultado: true,
        };
        console.log(response);
        this.allPlan = response;
      },
      error: (error) => {
        console.log(error);
        this.messageResponsive = {
          message: `No hay ningún plan por revisar`,
          resultado: false,
        };
      },
    });
  }
}
