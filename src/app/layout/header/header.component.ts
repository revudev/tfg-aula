import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header><!--Poner un background-->
      <nav class="bg-light border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <!-- Poner Logo -->
          <div class="flex items-center">
            <img src="../assets/logoAula.png" class="rounded-full mr-3 h-6 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Aula Emprende</span>
          </div>
          <div class="flex items-center lg:order-2">

            @if (userLogged) {
              <a href="/logout" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
                  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
                  focus:outline-none dark:focus:ring-primary-800"
              >Cerrar sesión</a>
            }@else {
              <a routerLink="/login" routerLinkActive="active" aria-current="page" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
                  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
                  focus:outline-none dark:focus:ring-primary-800"
              >Iniciar sesión</a>
            }

            <button type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
              dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false" (click)="toggleMobileMenu()"
            >
              <span class="sr-only">Abrir menú principal</span>
              @if (!isMobileMenuOpen) {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              }@else {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                  stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              }
            </button>
          </div>
          <div [class.hidden]="!isMobileMenuOpen" class="justify-between items-center w-full lg:flex 
              lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <!--Cargar la pagina de bienvenida y home-->
                <a routerLink="/" routerLinkActive="active" aria-current="page" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent
                  lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Inicio</a>
              </li>
              <li>
                <!--Cargar la pagina algun contenido-->
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0
                  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  lg:dark:hover:bg-transparent dark:border-gray-700">Contenido1</a>
              </li>
              <li>
                <!--Cargar la pagina algun contenido-->
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 
                  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  lg:dark:hover:bg-transparent dark:border-gray-700">Contenido2</a>
              </li>
              <li>
                <!--Cargar la pagina del plan-->
                <a routerLink="/plan" routerLinkActive="active" aria-current="page" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 
                  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  lg:dark:hover:bg-transparent dark:border-gray-700">Haz tu plan</a>
              </li>
              <li>
                <!--Cargar la pagina de eventos-->
                <a routerLink="/events" routerLinkActive="active" aria-current="page" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 
                  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  lg:dark:hover:bg-transparent dark:border-gray-700">Eventos</a>
              </li>
              <li>
                <a routerLink="/contact" routerLinkActive="active" aria-current="page" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 
                  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  lg:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
              </li>
              <!--Comprobar si user es admin y add functionality?-->
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: `.bg-full { height: 100vh; }`
})
export class HeaderComponent {
  userLogged: boolean = false;
  isMobileMenuOpen = false;

  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
}
