import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciarrhh',
  standalone: true,
  imports: [],
  template: `
    <main>
      <div class="bg-image h-screen">
        <div class="flex justify-center bg-image">
          <div class="bg-blue-400 rounded-lg overflow-hidden shadow-md p-8">
            <div class="max-w-screen-lg mx-auto p-5">
              <div class="flex justify-center items-center">
                <div class="max-w-screen-lg mx-auto p-5 text-white">
                  <h1 class="text-3xl font-bold mb-5">Lo primero es Iniciativa emprendedora</h1>
                  <p class="text-lg leading-relaxed">
                    <br>La iniciativa emprendedora supone la capacidad de convertir una idea en una realidad utilizando imaginación e ingenio (creatividad) para hacer algo nuevo o algo que ya existe, pero con alguna modificación (innovación), y siempre asumiendo el riesgo de las decisiones. Una persona emprendedora ve oportunidades donde otros ven problemas.
                    <br><br>Debido a los continuos cambios que se producen en nuestra sociedad, la creatividad y la innovación son las características que diferencian una iniciativa emprendedora de éxito de otra condenada al fracaso.
                    <br><br>Podemos definir la iniciativa emprendedora como la capacidad para hacer realidad una idea innovadora, es decir, emprender es transformar una idea en un proyecto concreto, generando algún beneficio.
                  </p>
                </div>
              </div>
              <div class="flex justify-center items-center">
                <div class="max-w-screen-lg mx-auto p-5 text-white">
                  <h1 class="text-3xl font-bold mb-5">Requisitos</h1>
                  <p class="text-lg leading-relaxed">
                    La iniciativa emprendedora surge con la identificación de una oportunidad y la capacidad para explotarla con una idea de negocio, que debe cumplir ciertos requisitos para tener éxito:
                  </p>
                  <ul class="list-disc pl-5">
                    <li class="text-lg leading-relaxed">Cubrir una necesidad en el mercado, es decir, los clientes necesitan ese producto.</li>
                    <li class="text-lg leading-relaxed">Producir beneficios, es decir, el producto debe ser rentable a corto plazo o en un futuro.</li>
                    <li class="text-lg leading-relaxed">Ser técnicamente posible, es decir, se puede llevar a cabo con los medios técnicos actuales.</li>
                    <li class="text-lg leading-relaxed">Aportar novedad o distinción, es decir, el producto debe diferenciarse de la competencia de algún modo.</li>
                  </ul>
                </div>
              </div>
              <div class="max-w-screen-lg mx-auto p-5 text-white">
                <h1 class="text-3xl font-bold mb-5">Consejos de Recursos Humanos para emprendedores</h1>
                <ol class="list-decimal pl-5">
                  <li class="text-lg leading-relaxed">Detecta las necesidades de la empresa.</li>
                  <li class="text-lg leading-relaxed">Elige personal con formación en RRHH.</li>
                  <li class="text-lg leading-relaxed">Define un manual para los empleados.</li>
                  <li class="text-lg leading-relaxed">Crea un organigrama y un Manual de Organización.</li>
                  <li class="text-lg leading-relaxed">Diseña una oferta laboral detallada.</li>
                  <li class="text-lg leading-relaxed">Tómate el tiempo necesario para seleccionar el mejor talento.</li>
                  <li class="text-lg leading-relaxed">Elabora un proceso de selección y contratación efectivo.</li>
                  <li class="text-lg leading-relaxed">Evalúa el clima laboral regularmente.</li>
                  <li class="text-lg leading-relaxed">Compensa a los buenos trabajadores.</li>
                  <li class="text-lg leading-relaxed">Implementa planes de formación para empleados.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['iniciarrhh.component.css']
})
export class IniciarrhhComponent { }
