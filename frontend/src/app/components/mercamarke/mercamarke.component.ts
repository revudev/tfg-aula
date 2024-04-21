import { Component } from '@angular/core';

@Component({
  selector: 'app-mercamarke',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-image">
      <div class="w-full pt-20 mx-auto bg-blue-200 md:max-w-4xl">
        <div class="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
          <div class="font-sans text-gray-800">
            <div class="bg-blue-100 rounded-lg p-4 mb-6">
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Mercado
              </h1>
              El mercado es el espacio donde se lleva a cabo la interacción
              entre compradores y vendedores, determinando los precios y las
              cantidades de los bienes y servicios intercambiados. Es un
              concepto fundamental en economía que abarca tanto transacciones
              físicas como virtuales.<br /><br />
              Existen diversos tipos de mercado, cada uno con sus
              características particulares:
            </div>

            <ol class="pl-5 mb-3 list-disc">
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Mercado de competencia perfecta: Caracterizado por una gran
                cantidad de compradores y vendedores, productos homogéneos y
                libre entrada y salida de empresas.
              </li>
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Mercado de competencia imperfecta: En este mercado, hay varios
                vendedores que ofrecen productos diferenciados o tienen cierto
                control sobre el precio.
              </li>
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Mercado monopolístico: Un solo vendedor controla la oferta de un
                bien o servicio, lo que le otorga un alto grado de poder de
                mercado.
              </li>
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Mercado oligopólico: Pocas empresas dominan la oferta en un
                determinado sector, lo que puede dar lugar a prácticas
                colusorias o estratégicas.
              </li>
              <li class="bg-yellow-50 rounded-lg p-2 mb-2">
                Mercado monopolio: Un único vendedor controla toda la oferta, lo
                que le permite establecer el precio según su conveniencia.
              </li>
            </ol>

            <div class="bg-green-100 rounded-lg p-4 mb-6">
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Marketing
              </h1>
              El marketing es el proceso de planificar y ejecutar la concepción,
              fijación de precios, promoción y distribución de ideas, bienes y
              servicios para satisfacer los objetivos individuales y
              organizacionales.<br /><br />
              El marketing implica comprender las necesidades y deseos del
              cliente y desarrollar productos y servicios que los satisfagan.
              También incluye determinar el precio adecuado para esos productos
              y servicios, identificar los mejores canales de distribución para
              llegar a los clientes y promocionar y comunicar efectivamente los
              beneficios de los productos y servicios.<br /><br />
              En resumen, el marketing se trata de crear valor para los clientes
              y construir relaciones sólidas con ellos, con el objetivo final de
              generar ingresos y obtener beneficios para la empresa.<br /><br />
              En el proceso de marketing, se consideran cuatro elementos
              fundamentales:
            </div>

            <ul class="pl-5 mb-6 list-disc">
              <li class="bg-purple-50 rounded-lg p-2 mb-2">
                Producto: Refiere a los bienes tangibles o intangibles que una
                empresa ofrece a sus clientes. Esto incluye la calidad, el
                diseño, las características y el empaquetado del producto.
              </li>
              <li class="bg-purple-50 rounded-lg p-2 mb-2">
                Precio: Es el valor monetario que se asigna al producto o
                servicio. Determinar el precio adecuado implica considerar los
                costos de producción, la demanda del mercado, la competencia y
                la percepción de valor por parte del cliente.
              </li>
              <li class="bg-purple-50 rounded-lg p-2 mb-2">
                Distribución: Se refiere a los canales y métodos utilizados para
                llevar el producto o servicio al cliente final. Esto incluye
                decisiones sobre la distribución física del producto, la
                selección de intermediarios y la gestión de inventarios.
              </li>
              <li class="bg-purple-50 rounded-lg p-2 mb-2">
                Promoción: Incluye todas las actividades de marketing destinadas
                a comunicar y persuadir al público objetivo sobre los beneficios
                y ventajas del producto o servicio. Esto puede incluir
                publicidad, relaciones públicas, ventas personales y promociones
                de ventas.
              </li>
            </ul>

            <div class="bg-yellow-100 rounded-lg p-4 mb-6">
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                La franquicia
              </h1>
              La franquicia es un acuerdo entre el franquiciante (dueño de una
              empresa) y el franquiciado (persona interesada en operar un
              negocio) que otorga al franquiciado el derecho de utilizar el
              nombre comercial, los productos, los servicios y los métodos de
              operación del franquiciante a cambio de regalías y otras
              tarifas.<br /><br />
              Las franquicias tienen ventajas y desventajas tanto para el
              franquiciante como para el franquiciado. A continuación, se
              presentan algunas de ellas:
            </div>

            <ul class="pl-5 mb-6 list-disc">
              <li class="bg-blue-50 rounded-lg p-2 mb-2">
                Ventajas:
                <ul class="pl-5">
                  <li>Posibilidad de utilizar una marca reconocida.</li>
                  <li>Recibir apoyo y capacitación del franquiciante.</li>
                  <li>Acceso a un modelo de negocio probado.</li>
                </ul>
              </li>
              <li class="bg-blue-50 rounded-lg p-2 mb-2">
                Desventajas:
                <ul class="pl-5">
                  <li>Pago de regalías y tarifas al franquiciante.</li>
                  <li>Falta de control total sobre el negocio.</li>
                  <li>Dependencia del éxito del franquiciante.</li>
                </ul>
              </li>
            </ul>

            <p class="bg-green-100 rounded-lg p-4 mb-6">
              A pesar de las ventajas y desventajas, las franquicias son una
              forma popular de emprendimiento para aquellos que desean iniciar
              un negocio con el respaldo de una marca establecida y un sistema
              operativo probado.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: 'mercamarke.component.css',
})
export class MercamarkeComponent {}
