import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
      <div class="bg-white shadow-lg overflow-hidden sm:rounded-lg pb-8">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="text-9xl font-bold text-blue-500">404</h1>
          <h1 class="text-6xl font-medium py-8">Oops! Page not found</h1>
          <p class="text-2xl pb-8 px-12 font-medium">The page you are looking for does not exist. </p>
          <a href="/" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">Inicio</a>
          <a href="/contact" class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">Contáctanos</a>
        </div>
      </div>
    </div>
  `,
  styles: `
    .error-container    { text-align: center; margin-top: 100px; }
    .error-container h1 { font-size: 10rem;   font-weight: bold; color: red; }
    .error-container p  { font-size: 2rem;    margin-top: 20px; }
    .error-container a  { color: yellow;      text-decoration: none; font-weight: bold; }  
  `
})
export class NotFoundComponent {}