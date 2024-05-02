import { Component } from '@angular/core';

@Component({
  selector: 'app-gestiones',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-image">
      <div class="w-full pt-20 mx-auto bg-blue-200 md:max-w-4xl">
        <div class="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
          <div class="font-sans text-gray-800">
            <div class="bg-blue-100 rounded-lg p-4 mb-6">
              <h1
                class="text-3xl md:text-4xl font-bold font-voll text-gray-900 mb-2"
              >
                Qué son las gestiones empresariales
              </h1>
              <p class="font-comfortaa">
                Las gestiones empresariales son el conjunto de actividades y
                procesos que se llevan a cabo dentro de una empresa para
                administrar eficientemente sus recursos y alcanzar sus
                objetivos. Estas actividades pueden incluir la planificación,
                organización, dirección y control de los recursos humanos,
                financieros, materiales y tecnológicos de la empresa.<br /><br />
              </p>
            </div>
            <p class="font-comfortaa mb-5">
              Hay diferentes tipos de gestiones empresariales, entre las cuales
              se pueden mencionar:
            </p>
            <ol class="pl-5 mb-3 list-disc font-comfortaa">
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Gestión financiera: Se encarga de administrar los recursos
                financieros de la empresa, incluyendo la inversión,
                financiamiento, control de costos y presupuestos.
              </li>
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Gestión de recursos humanos: Se centra en la administración del
                talento humano de la empresa, incluyendo la contratación,
                capacitación, evaluación del desempeño y desarrollo del
                personal.
              </li>
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Gestión de operaciones: Se ocupa de la planificación,
                organización y control de los procesos de producción y
                distribución de bienes y servicios.
              </li>
            </ol>

            <div class="bg-green-100 rounded-lg p-4 mb-6">
              <h1
                class="text-3xl md:text-4xl font-voll font-bold text-gray-900 mb-2"
              >
                Gestión administrativa
              </h1>
              <p class="font-comfortaa">
                Consiste en el conjunto de actividades y procesos relacionados
                con la administración y organización de una empresa. Esto
                incluye la planificación, coordinación y control de las
                diferentes áreas y recursos de la empresa para garantizar su
                correcto funcionamiento y alcanzar sus objetivos.<br /><br />
                En resumen, la gestión administrativa abarca desde la gestión
                del personal y los recursos humanos hasta la gestión financiera,
                pasando por la gestión de operaciones y la gestión de la
                información.
              </p>
            </div>

            <ul class="pl-5 mb-6 list-disc">
              <li class="bg-purple-50 rounded-lg p-2 mb-2">
                Proceso general de la gestión administrativa:
                <ul class="pl-5">
                  <li>Pedido de productos o servicios.</li>
                  <li>Preparación y emisión de albaranes de entrega.</li>
                  <li>Facturación de los productos o servicios entregados.</li>
                </ul>
              </li>
            </ul>

            <div class="bg-yellow-100 rounded-lg p-4 mb-6">
              <h1
                class="text-3xl md:text-4xl font-voll font-bold text-gray-900 mb-2"
              >
                Gestión fiscal
              </h1>
              <p class="font-comfortaa">
                Consiste en el conjunto de acciones y procedimientos que una
                empresa realiza para cumplir con sus obligaciones tributarias
                ante las autoridades fiscales. Esto incluye el cálculo,
                declaración y pago de impuestos, así como el cumplimiento de
                otras obligaciones fiscales establecidas por la ley.<br /><br />
                La gestión fiscal es fundamental para garantizar el cumplimiento
                de las obligaciones legales de la empresa y evitar posibles
                sanciones por incumplimiento de las normativas fiscales.
              </p>
            </div>

            <ul class="pl-5 mb-6 list-disc">
              <li class="bg-blue-50 rounded-lg p-2 mb-2 font-comfortaa">
                Tipos de impuestos en la gestión fiscal:
                <ul class="pl-5">
                  <li>
                    Impuesto sobre la Renta de las Personas Físicas (IRPF).
                  </li>
                  <li>Impuesto sobre el Valor Añadido (IVA).</li>
                  <li>Impuesto sobre Sociedades (IS).</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: 'gestiones.component.css',
})
export class GestionesComponent {}
