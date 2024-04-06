import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/es';

@Component({
  selector: 'app-events',
  imports: [MatCardModule, MatDatepickerModule],
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
              <h1 class="text-3xl font-bold mb-5">Nuestros eventos:</h1>
              <mat-card class="tam">
                <mat-calendar [(selected)]="selected"></mat-calendar>
              </mat-card>
              <p>Selected date: {{selected}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `.tam { width: 600px; }`
})
export class EventsComponent { selected: Date | null = new Date; }