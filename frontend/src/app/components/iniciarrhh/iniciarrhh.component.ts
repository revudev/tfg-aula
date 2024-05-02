import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciarrhh',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-image">
      <div class="w-full pt-20 mx-auto bg-blue-200 md:max-w-4xl">
        <div class="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
          <div>
            <h1
              class="pt-6 pb-2 font-voll text-3xl font-bold text-gray-900 break-normal md:text-4xl"
            >
              Lo primero es la iniciativa emprendedora
            </h1>
          </div>
          <div class="text-gray-800">
            <div class="bg-yellow-100 rounded-lg p-4 mb-6 font-comfortaa">
              La iniciativa emprendedora supone la capacidad de convertir una
              idea en una realidad utilizando
              <span class="text-blue-600"
                >imaginación e ingenio (creatividad)</span
              >
              para hacer algo nuevo o algo que ya existe, pero con alguna
              modificación (<span class="text-green-600">innovación</span>), y
              siempre asumiendo el riesgo de las decisiones. Una persona
              emprendedora ve oportunidades donde otros ven problemas.
            </div>

            <div class="bg-blue-100 rounded-lg p-4 mb-6 font-comfortaa">
              Debido a los continuos cambios que se producen en nuestra
              sociedad, la <span class="text-green-600">creatividad</span> y la
              <span class="text-blue-600">innovación</span> son las
              características que diferencian una iniciativa emprendedora de
              éxito de otra condenada al fracaso.
            </div>

            <div class="bg-green-100 rounded-lg p-4 mb-6 font-comfortaa">
              Podemos definir la iniciativa emprendedora como la capacidad para
              hacer realidad una idea
              <span class="text-blue-600">innovadora</span>, es decir, emprender
              es transformar una idea en un proyecto concreto, generando algún
              beneficio.
            </div>

            <div class="bg-gray-100 rounded-lg p-4 mb-6 font-comfortaa">
              <p class="text-lg font-semibold">
                Surge con la identificación de una oportunidad y la capacidad
                para explotarla con una idea de negocio, que debe cumplir
                ciertos requisitos para tener éxito:
              </p>
              <ul class="pl-5 mb-3 list-disc">
                <li>
                  Cubrir una necesidad en el mercado, es decir, los clientes
                  necesitan ese producto.
                </li>
                <li>
                  Producir beneficios, es decir, el producto debe ser rentable a
                  corto plazo o en un futuro.
                </li>
                <li>
                  Ser técnicamente posible, es decir, se puede llevar a cabo con
                  los medios técnicos actuales.
                </li>
                <li>
                  Aportar novedad o distinción, es decir, el producto debe
                  diferenciarse de la competencia de algún modo.
                </li>
              </ul>
            </div>

            <h1 class="text-3xl font-voll font-bold mb-3">
              Consejos de Recursos Humanos para emprendedores
            </h1>
            <ol class="pl-5 list-decimal font-comfortaa">
              <li class="mb-2">Detecta las necesidades de la empresa.</li>
              <li class="mb-2">Elige personal con formación en RRHH.</li>
              <li class="mb-2">Define un manual para los empleados.</li>
              <li class="mb-2">
                Crea un organigrama y un Manual de Organización.
              </li>
              <li class="mb-2">Diseña una oferta laboral detallada.</li>
              <li class="mb-2">
                Tómate el tiempo necesario para seleccionar el mejor talento.
              </li>
              <li class="mb-2">
                Elabora un proceso de selección y contratación efectivo.
              </li>
              <li class="mb-2">Evalúa el clima laboral regularmente.</li>
              <li class="mb-2">Compensa a los buenos trabajadores.</li>
              <li class="mb-2">
                Implementa planes de formación para empleados.
              </li>
            </ol>

            <blockquote
              class="bg-gray-200 border-l-4 border-green-500 italic p-4 mb-8 font-sed"
            >
              El éxito en el emprendimiento no se trata solo de tener grandes
              ideas, sino de tener la determinación y la perseverancia para
              convertirlas en realidad
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['iniciarrhh.component.css'],
})
export class IniciarrhhComponent {}
