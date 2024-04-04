import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  template: `
    <main>
      <div class="bg-image h-screen">
        <div class="flex justify-center items-center h-screen bg-image">
          <div class="bg-blue-400 rounded-lg overflow-hidden shadow-md p-8">
            <div class="max-w-screen-lg mx-auto p-5">
              <h1>Eventos bien</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: ``
})
export class EventsComponent {

}
