import { Component } from '@angular/core';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [HomeModule],
  template: `
    <app-home /> 
  `,
})
export class AppComponent { title = 'Aula-Emprende'; }
