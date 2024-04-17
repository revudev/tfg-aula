import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/es';
import { AuthService } from '../../../service/auth.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Evento } from '../../../types';

@Component({
  selector: 'app-events',
  imports: [MatCardModule, MatDatepickerModule,ReactiveFormsModule],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    provideNativeDateAdapter(),
    provideMomentDateAdapter(),
  ],
  standalone: true,
  templateUrl: 'events.component.html',
  styles: `.tam { width: 600px; } .event-date{ background: yellow;}`
})
export class EventsComponent implements OnInit{
  eventos: Evento[] = [];
  ngOnInit(): void { this.getEvent(); }

  selected: Date | null = new Date;
  user = this.authService.getUserFromLocalStorage().user_type;
  userAdmin = this.user == 'admin' || this.user =='teacher';
  showForm = false;

  eventForm = new FormGroup({
    senderNameEv: new FormControl('', Validators.required),
    senderDesc:   new FormControl('', Validators.required),
    senderData:   new FormControl('', Validators.required),
  })

  evento: Evento = {
    Date: new Date(),
    Event: '',
    Description: '',
    id_user: this.authService.getUserFromLocalStorage().id
  };

  addEvent(){
    this.authService.addEvent(this.evento).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
        this.eventForm.reset();
        this.showForm = false;
        // Informar de el evento se ha creado correctamente
      },
      error: (error) => { console.error('Error, no he podido añadir el evento:', error  ); }
    }
    );
  }
  getEvent(){
    this.authService.getEvent().subscribe({
      next: (response) => {
        console.log("Respuesta del backend:", response);
        this.eventos = response.events;
      },
      error: (error) => { console.error('Error, no he podido obtener los eventos:', error  ); }
    });
  }
  dateClass = (date: Date): string => {
    // Add events to the calendar
    return '';
  }
  toggleForm(){ this.showForm = !this.showForm; }
  constructor(private authService: AuthService) { }
}
