import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, AutoCompleteModule],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  
  constructor(private authService: AuthService) {}

  username: string = '';
  password: string = '';
  
  contactForm = new FormGroup({
    senderName:     new FormControl('', Validators.required),
    senderPassword: new FormControl('', Validators.required),
  })
  
  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => { console.log('Respuesta del backend:', response); },
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
