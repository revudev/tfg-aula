import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <main>
      <form (ngSubmit)="onSubmit()">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" name="username" [(ngModel)]="credentials.username" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" [(ngModel)]="credentials.password" required>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </main>
  `,
  styles: ``
})
export class LoginComponent {
  
  constructor(private authService: AuthService) {}

  credentials = { username: '', password: '' };

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
        // Agregar el token JWT en el localStorage aquí
      },
      error: (error) => { console.error('Error de autenticación:', error); }
    });
  }
}
