import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AutoCompleteModule,
    FloatLabelModule,
    InputTextModule,
  ],
  templateUrl: 'login.component.html',
  styles: '',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';
  errorMessage: string | undefined = '';

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderPassword: new FormControl('', Validators.required),
  });

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.user) {
          this.authService.setUserLS(response.user);
          this.router.navigate(['/perfil']).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }
        // console.log('Respuesta del backend:', response);
      },
      error: (error) => {
        this.errorMessage = `Credenciales inválidas. Por favor, inténtalo de nuevo.`;
      },
    });
  }
}
