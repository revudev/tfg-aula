import { Component } from '@angular/core';
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
  styleUrls: ['contact.component.css'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderLastName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
}
