import { Component } from '@angular/core';

@Component({
  selector: 'app-gestiones',
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
                  <h1 class="text-3xl font-bold mb-5">Qué son las gestiones empresariales</h1>
                  <p class="text-lg leading-relaxed">Las gestiones empresariales son el conjunto de actividades y procesos que se llevan a cabo dentro de una empresa para administrar eficientemente sus recursos y alcanzar sus objetivos. Estas actividades pueden incluir la planificación, organización, dirección y control de los recursos humanos, financieros, materiales y tecnológicos de la empresa.</p>
                  <p class="text-lg leading-relaxed">Hay diferentes tipos de gestiones empresariales, entre las cuales se pueden mencionar:</p>
                  <ol class="list-decimal pl-5">
                    <li class="text-lg leading-relaxed">Gestión financiera: Se encarga de administrar los recursos financieros de la empresa, incluyendo la inversión, financiamiento, control de costos y presupuestos.</li>
                    <li class="text-lg leading-relaxed">Gestión de recursos humanos: Se centra en la administración del talento humano de la empresa, incluyendo la contratación, capacitación, evaluación del desempeño y desarrollo del personal.</li>
                    <li class="text-lg leading-relaxed">Gestión de operaciones: Se ocupa de la planificación, organización y control de los procesos de producción y distribución de bienes y servicios.</li>
                  </ol><br>
                  <p class="text-lg leading-relaxed">Todo esto radica en que una adecuada gestión empresarial es fundamental para el éxito y la sostenibilidad de cualquier empresa, ya que permite aprovechar eficientemente los recursos disponibles y adaptarse a un entorno empresarial en constante cambio.</p>
                </div>
              </div>
              <div class="flex justify-center items-center">
                <div class="max-w-screen-lg mx-auto p-5 text-white">
                  <h1 class="text-3xl font-bold mb-5">Gestión administrativa</h1>
                  <p class="text-lg leading-relaxed">Consiste en el conjunto de actividades y procesos relacionados con la administración y organización de una empresa. Esto incluye la planificación, coordinación y control de las diferentes áreas y recursos de la empresa para garantizar su correcto funcionamiento y alcanzar sus objetivos.</p>
                  <p class="text-lg leading-relaxed">En resumen, la gestión administrativa abarca desde la gestión del personal y los recursos humanos hasta la gestión financiera, pasando por la gestión de operaciones y la gestión de la información.</p>
                  <ul class="list-disc pl-5">
                    <li class="text-lg leading-relaxed">Proceso general de la gestión administrativa:</li>
                    <li class="text-lg leading-relaxed">Pedido de productos o servicios.</li>
                    <li class="text-lg leading-relaxed">Preparación y emisión de albaranes de entrega.</li>
                    <li class="text-lg leading-relaxed">Facturación de los productos o servicios entregados.</li>
                  </ul>
                </div>
              </div>
              <div class="flex justify-center items-center">
                <div class="max-w-screen-lg mx-auto p-5 text-white">
                  <h1 class="text-3xl font-bold mb-5">Gestión fiscal</h1>
                  <p class="text-lg leading-relaxed">
                    <br>Consiste en el conjunto de acciones y procedimientos que una empresa realiza para cumplir con sus obligaciones tributarias ante las autoridades fiscales. Esto incluye el cálculo, declaración y pago de impuestos, así como el cumplimiento de otras obligaciones fiscales establecidas por la ley.
                  </p>
                  <ul class="list-disc pl-5">
                    <li class="text-lg leading-relaxed">Tipos de impuestos en la gestión fiscal:
                      <ul class="list-disc pl-5">
                        <li>Impuesto sobre la Renta de las Personas Físicas (IRPF).</li>
                        <li>Impuesto sobre el Valor Añadido (IVA).</li>
                        <li>Impuesto sobre Sociedades (IS).</li>
                      </ul>
                    </li>
                  </ul>
                  <p class="text-lg leading-relaxed">La gestión fiscal es fundamental para garantizar el cumplimiento de las obligaciones legales de la empresa y evitar posibles sanciones por incumplimiento de las normativas fiscales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styleUrl: 'gestiones.component.css'
})
export class GestionesComponent { }
