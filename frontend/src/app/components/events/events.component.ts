import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { AuthService } from '../../../service/auth.service';
import { Evento } from '../../../types';
import 'moment/locale/es';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [MatCardModule, MatDatepickerModule, ReactiveFormsModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    provideNativeDateAdapter(),
    provideMomentDateAdapter(),
  ],
  standalone: true,
  templateUrl: 'events.component.html',
  styleUrl: 'events.component.css',
})
export class EventsComponent implements OnInit {
  ngOnInit(): void {
    this.getEvent();
  }

  eventos: Evento[] = [];
  selected: Date | null = null;
  showForm = false;

  user = this.authService.getUserLS().user_type;
  userAdmin = this.user == 'admin' || this.user == 'teacher';

  eventForm = new FormGroup({
    senderNameEv: new FormControl('', Validators.required),
    senderDesc: new FormControl('', Validators.required),
    senderData: new FormControl('', Validators.required),
  });

  evento: Evento = {
    Date: new Date(),
    Event: '',
    Description: '',
    id_user: this.authService.getUserLS().id,
  };

  getSelectedEventDescription(): string {
    if (!this.selected) {
      this.selected = new Date();
    } // If not selected then day of the week
    if (!(this.selected instanceof Date)) {
      this.selected = new Date(this.selected);
    }

    const selectedEvent = this.eventos.find(
      (evento) =>
        new Date(evento.Date).toDateString() === this.selected!.toDateString()
    );

    this.selected = new Date(this.selected); // Restart the event for this day
    return selectedEvent ? selectedEvent.Description : '';
  }
  addEvent() {
    this.authService.addEvent(this.evento).subscribe({
      next: (response) => {
        this.eventForm.reset();
        setTimeout(() => {
          window.location.reload();
        }, 500);
        this.showForm = false;
        alert('El evento ha sido añadido correctamente');
      },
      error: (error) => {
        console.error('Error, no he podido añadir el evento:', error);
      },
    });
  }
  getEvent() {
    this.authService.getEvent().subscribe({
      next: (response) => {
        this.eventos = response.events.map((evento: Evento) => ({
          ...evento,
          Date: new Date(evento.Date),
        }));
      },
      error: (error) => {
        console.error('Error, no he podido obtener los eventos:', error);
      },
    });
  }
  dateClass = (date: Date): string => {
    return '';
  };
  toggleForm() {
    this.showForm = !this.showForm;
  }
  constructor(private authService: AuthService) {}
}
