import { Component } from '@angular/core';
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
  template: `
    <div class="flex justify-center p-5">
      <div class="bg-blue-400 rounded-lg overflow-hidden shadow-md p-8">
        <div class="max-w-screen-lg mx-auto p-5">
          <div class="flex justify-center items-center">
            <div class="max-w-screen-lg mx-auto p-5 text-white">
              <div class="flex justify-between">
                <h1 class="text-3xl font-bold mb-5">Nuestros eventos:</h1>
                @if (!userAdmin) {
                  <button (click)="toggleForm()" class="px-2 py-2 font-bold text-white rounded bg-dark-blue-500 hover:bg-dark-blue-600">Añadir evento</button>
                }
              </div>
              @if(showForm){
<!-- ------------------------------------------------------------Add errors  --------------------------------------------->
                <form (submit)="addEvent()" [formGroup]="eventForm" (ngSubmit)="$event.preventDefault();">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="nombre">Nombre del evento</label>
                      <input type="text" [(ngModel)]="evento.Event" formControlName="senderNameEv"
                             class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                                    focus:border-gray-500" id="nombre" placeholder="Nombre del evento">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="descripcion"  >Descripción</label>
                      <input type="text" [(ngModel)]="evento.Description"
                             class="appearance-none block w-full bg-gray-200 text-gray-700 border
                            border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                            focus:border-gray-500" id="descripcion" placeholder="Descripción"
                              formControlName="senderDesc">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                             for="fecha">Fecha</label>
                      <input type="date" [(ngModel)]="evento.Date" class="appearance-none block w-full bg-gray-200 text-gray-700 border
                           border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                           focus:border-gray-500" id="fecha" placeholder="Fecha" formControlName="senderData">
                    </div>
                  </div>
                  <button [disabled]="eventForm.invalid" type="submit" class="px-4 py-2 font-bold text-white rounded bg-dark-blue-500 hover:bg-dark-blue-600">Enviar</button>
                </form>
              }@else{
                <mat-card class="tam">
                  <mat-calendar [(selected)]="selected"></mat-calendar>
                </mat-card>
                <p>Selected date: {{selected}}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `.tam { width: 600px; }`
})
export class EventsComponent {
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
  toggleForm(){ this.showForm = !this.showForm; }
  constructor(private authService: AuthService) { }
}
