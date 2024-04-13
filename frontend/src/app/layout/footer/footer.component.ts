import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="w-full bg-blue-500 py-8 flex flex-col items-center">
      <!-- <ul class="flex flex-wrap justify-center mb-4">
        <li class="list-none">
          <a href="#" class="text-white text-2xl mr-4 transition duration-500 transform hover:-translate-y-1">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="list-none">
          <a href="#" class="text-white text-2xl mr-4 transition duration-500 transform hover:-translate-y-1">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="list-none">
          <a href="#" class="text-white text-2xl mr-4 transition duration-500 transform hover:-translate-y-1">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="list-none">
          <a href="#" class="text-white text-2xl transition duration-500 transform hover:-translate-y-1">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul> -->
      <ul class="flex flex-wrap justify-center mb-4">
        <li class="list-none">
          <a routerLink="/" routerLinkActive="active" aria-current="page" class="text-white text-lg mr-4 transition duration-500 opacity-75 hover:opacity-100">Inicio</a>
        </li>
        <li class="list-none">
          <a routerLink="/contact" routerLinkActive="active" aria-current="page" class="text-white text-lg mr-4 transition duration-500 opacity-75 hover:opacity-100">Contactanos</a>
        </li>
        <li class="list-none">
          <a routerLink="/iniciarrhh" routerLinkActive="active" aria-current="page" class="text-white text-lg mr-4 transition duration-500 opacity-75 hover:opacity-100">Iniciativa</a>
        </li>
        <li class="list-none">
          <a routerLink="/gestions" routerLinkActive="active" aria-current="page" class="text-white text-lg mr-4 transition duration-500 opacity-75 hover:opacity-100">Gestiones</a>
        </li>
      </ul>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {}
