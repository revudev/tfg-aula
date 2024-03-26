import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-center items-center">
        <p class="text-center">© 2024 Todos los derechos reservados</p>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {}
