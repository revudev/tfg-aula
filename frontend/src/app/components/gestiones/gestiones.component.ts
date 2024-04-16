import { Component } from '@angular/core';

@Component({
  selector: 'app-gestiones',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-image">
      <div class="w-full pt-20 mx-auto bg-blue-200 md:max-w-4xl">
        <div class="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
          <div class="font-sans">
            <h1 class="pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Qué son las gestiones empresariales</h1>
          </div>
          <br>Las gestiones empresariales son el conjunto de actividades y procesos que se llevan a cabo dentro de una empresa para administrar eficientemente sus recursos y alcanzar sus objetivos. Estas actividades pueden incluir la planificación, organización, dirección y control de los recursos humanos, financieros, materiales y tecnológicos de la empresa.
          <br><br>Hay diferentes tipos de gestiones empresariales, entre las cuales se pueden mencionar:
          <br><br>
          <ol class="pl-5 mb-3 list-disc">
            <li>Gestión financiera: Se encarga de administrar los recursos financieros de la empresa, incluyendo la inversión, financiamiento, control de costos y presupuestos.</li>
            <li>Gestión de recursos humanos: Se centra en la administración del talento humano de la empresa, incluyendo la contratación, capacitación, evaluación del desempeño y desarrollo del personal.</li>
            <li>Gestión de operaciones: Se ocupa de la planificación, organización y control de los procesos de producción y distribución de bienes y servicios.</li>
          </ol>
          <br>Todo esto radica en que una adecuada gestión empresarial es fundamental para el éxito y la sostenibilidad de cualquier empresa, ya que permite aprovechar eficientemente los recursos disponibles y adaptarse a un entorno empresarial en constante cambio.
          <div class="font-sans">
            <h1 class="pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Gestión administrativa</h1>
          </div>
          <p>Consiste en el conjunto de actividades y procesos relacionados con la administración y organización de una empresa. Esto incluye la planificación, coordinación y control de las diferentes áreas y recursos de la empresa para garantizar su correcto funcionamiento y alcanzar sus objetivos.</p>
          <p>En resumen, la gestión administrativa abarca desde la gestión del personal y los recursos humanos hasta la gestión financiera, pasando por la gestión de operaciones y la gestión de la información.</p>
          <ul class="list-disc pl-5">
            <li>Proceso general de la gestión administrativa:</li>
            <li>Pedido de productos o servicios.</li>
            <li>Preparación y emisión de albaranes de entrega.</li>
            <li>Facturación de los productos o servicios entregados.</li>
          </ul>

          <div class="font-sans">
            <h1 class="pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Gestión fiscal</h1>
          </div>
          <p>
            <br>Consiste en el conjunto de acciones y procedimientos que una empresa realiza para cumplir con sus obligaciones tributarias ante las autoridades fiscales. Esto incluye el cálculo, declaración y pago de impuestos, así como el cumplimiento de otras obligaciones fiscales establecidas por la ley.
          </p>
          <ul class="list-disc pl-5">
            <li>Tipos de impuestos en la gestión fiscal:
              <ul class="list-disc pl-5">
                <li>Impuesto sobre la Renta de las Personas Físicas (IRPF).</li>
                <li>Impuesto sobre el Valor Añadido (IVA).</li>
                <li>Impuesto sobre Sociedades (IS).</li>
              </ul>
            </li>
          </ul>
          <p>La gestión fiscal es fundamental para garantizar el cumplimiento de las obligaciones legales de la empresa y evitar posibles sanciones por incumplimiento de las normativas fiscales.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: 'gestiones.component.css'
})
export class GestionesComponent { }
