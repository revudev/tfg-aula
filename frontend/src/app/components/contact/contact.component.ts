import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <main>
      <div class="max-w-screen-lg mx-auto p-5">
        <div class="border md:flex">
          <div class="bg-dark-blue-900 md:w-1/3 p-10 text-white">
            <p class="mt-4 text-sm leading-7 font-regular uppercase">Contacto</p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">Envianos un mensaje</h3>
            <p class="mt-4 leading-7 text-gray-200">
              Conoce muy bien el mundo de emprendimineto y crea tu propio plan de empresa!
            </p>
            <div class="mt-5">
              <span class="text-sm">I.E.S. Enrique Tierno Galván</span><br>
              <span class="text-sm">+34 913 171 972</span><br><br>
              <span class="text-sm">Horario Publico 9:00 a 13:00</span><br>
              <span class="text-sm">Horario Alumnado mañanas recreo y tardes de 15:15 a 15:45 H.</span>
            </div>
          </div>
          <form action="secretaria.ies.tiernogalvan.madrid@educa.madrid.org" 
                method="post" [formGroup]="contactForm" class="md:w-2/3 p-10" (ngSubmit)="$event.preventDefault();" >

            <div class="mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">Nombre</label>
              <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border 
                           border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                           focus:border-gray-500" formControlName="senderName" 
                      id="name" type="text" placeholder="Juan
              ">
              @if (contactForm.get('senderName')?.invalid && 
                  (contactForm.get('senderName')?.dirty || contactForm.get('senderName')?.touched)) {
                @if (contactForm.get('senderName')?.hasError('required')){
                  <div> <small class="text-red-600">No puedes dejar este campo en blanco</small> </div>
                }
              }
            </div>
            <div class="mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="lastname">Apellidos</label>
              <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border 
                           border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                           focus:border-gray-500" formControlName="senderLastName" 
                      id="lastname" type="text" placeholder="Lopez
              ">
              @if (contactForm.get('senderLastName')?.invalid && 
                  (contactForm.get('senderLastName')?.dirty || contactForm.get('senderLastName')?.touched)) {
                @if (contactForm.get('senderLastName')?.hasError('required')){
                  <div> <small class="text-red-600">No puedes dejar este campo en blanco</small> </div>
                }
              }
            </div>
            <div class="mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gmail">Email:</label>
              <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border 
                           border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                           focus:border-gray-500" formControlName="senderEmail" 
                      id="gmail" type="email" placeholder="juan@gmail.com
              ">
              @if (contactForm.get('senderEmail')?.invalid && 
                  (contactForm.get('senderEmail')?.dirty || contactForm.get('senderEmail')?.touched)) {
                @if (contactForm.get('senderEmail')?.hasError('required')){
                  <div> <small class="text-red-600">No puedes dejar este campo en blanco</small> </div>
                }
                @if (contactForm.get('senderEmail')?.hasError('email')){
                  <div> <small class="text-red-600">Por favor introduce bien tu correo</small> </div>
                }
              }
            </div>

            <div class="mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">Tu mensaje:</label>
              <textarea rows="10" formControlName="senderMessage" 
                class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              </textarea>
              @if (contactForm.get('senderMessage')?.invalid && 
                  (contactForm.get('senderMessage')?.dirty || contactForm.get('senderMessage')?.touched)) {
                @if (contactForm.get('senderMessage')?.hasError('required')){
                  <div> <small class="text-red-600">No puedes dejar este campo en blanco</small> </div>
                }
                @if (contactForm.get('senderMessage')?.hasError('minlength')){
                  <div> <small class="text-red-600">El mensaje tiene que ser por lo menos de 10 caracteres</small> </div>
                }
              }
            </div>
            <div class="flex justify-between">
              <button [disabled]="contactForm.invalid" class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,
  styles: ``
})
export class ContactComponent { 
  contactForm = new FormGroup({
    senderName:     new FormControl('', Validators.required),
    senderLastName: new FormControl('', Validators.required),
    senderEmail:    new FormControl('', [Validators.required, Validators.email]),
    senderMessage:  new FormControl('', [Validators.required, Validators.minLength(10)])
  })
}
