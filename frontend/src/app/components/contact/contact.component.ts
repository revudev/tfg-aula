import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'contact.component.html',
  styles: ``,
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderLastName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.http
        .post('http://localhost:4000/enviarCorreo', this.contactForm.value) // https://back-lemon.vercel.app/enviarCorreo
        .subscribe({
          next: () => {
            alert('¡Correo enviado correctamente!');
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error al enviar el correo:', error);
            alert(
              'Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.'
            );
          },
        });
    }
  }
}
