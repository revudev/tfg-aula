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
  styles: `.tam { width: 600px; }`
})
export class EventsComponent implements OnInit{

  ngOnInit(): void { this.getEvent(); }

  eventos: Evento[] = [];
  selected: Date | null = null;
  showForm = false;

  user = this.authService.getUserFromLocalStorage().user_type;
  userAdmin = this.user == 'admin' || this.user =='teacher';

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

  getSelectedEventDescription(): string {
    if (!this.selected) { this.selected = new Date(); }; // If not selected then day of the week
    if (!(this.selected instanceof Date)) { this.selected = new Date(this.selected); }

    const selectedEvent = this.eventos
      .find(evento => new Date(evento.Date).toDateString() === this.selected!.toDateString());

    this.selected = new Date(this.selected); // Restart the event for this day
    return selectedEvent ? selectedEvent.Description : '';
  }
  addEvent(){
    this.authService.addEvent(this.evento).subscribe({
      next: (response) => {
        // console.log('Respuesta del backend:', response);
        this.eventForm.reset();
        this.showForm = false;
        // TODO: Informar de el evento se ha creado correctamente
      },
      error: (error) => { console.error('Error, no he podido añadir el evento:', error  ); }
    }
    );
  }
  getEvent(){
    this.authService.getEvent().subscribe({
      next: (response) => {
        // console.log("Respuesta del backend:", response);
        this.eventos = response.events.map((evento: Evento) => ({ ...evento, Date: new Date(evento.Date)}));
      },
      error: (error) => { console.error('Error, no he podido obtener los eventos:', error  ); }
    });
  }
  dateClass = (date: Date): string => {
    // TODO: Add class to the calendar
    return '';
  }
  toggleForm(){ this.showForm = !this.showForm; }
  constructor(private authService: AuthService) { }
}
