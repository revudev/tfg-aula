import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, AutoCompleteModule],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';
  
  contactForm = new FormGroup({
    senderName:     new FormControl('', Validators.required),
    senderPassword: new FormControl('', Validators.required),
  })
  
  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => { 
        console.log('Respuesta del backend:', response); 
        if (response.user) {
          this.authService.setUserInLocalStorage(response.user);
          this.router.navigate(['/perfil']).then(()=>{
            setTimeout(() => { window.location.reload(); }, 500);
          });
        }
      },
      error: (error) => { console.error('Error de autenticación:', error  ); }      
    }
    );
  }
  // ngOnInit(): void { //Check the users db
  //   this.authService.getUser('http://localhost:3000/login').subscribe(
  //     (user: User)=>{
  //       console.log(user);
  //     }
  //   )
  // }
  
}
