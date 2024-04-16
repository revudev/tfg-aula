import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciarrhh',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-image">
      <div class="w-full pt-20 mx-auto bg-blue-200 md:max-w-4xl">
        <div class="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
          <div class="font-sans">
            <h1 class="pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Lo primero es la iniciativa emprendedora</h1>
          </div>
          <br>La iniciativa emprendedora supone la capacidad de convertir una idea en una realidad utilizando imaginación e ingenio (creatividad) para hacer algo nuevo o algo que ya existe, pero con alguna modificación (innovación), y siempre asumiendo el riesgo de las decisiones. Una persona emprendedora ve oportunidades donde otros ven problemas.
          <br><br>Debido a los continuos cambios que se producen en nuestra sociedad, la creatividad y la innovación son las características que diferencian una iniciativa emprendedora de éxito de otra condenada al fracaso.
          <br><br>Podemos definir la iniciativa emprendedora como la capacidad para hacer realidad una idea innovadora, es decir, emprender es transformar una idea en un proyecto concreto, generando algún beneficio.
          <br><br>
          <p>Surge con la identificación de una oportunidad y la capacidad para explotarla con una idea de negocio, que debe cumplir ciertos requisitos para tener éxito:
          </p>
          <ul class="pl-5 mb-3 list-disc">
            <li>Cubrir una necesidad en el mercado, es decir, los clientes necesitan ese producto.</li>
            <li>Producir beneficios, es decir, el producto debe ser rentable a corto plazo o en un futuro.</li>
            <li>Ser técnicamente posible, es decir, se puede llevar a cabo con los medios técnicos actuales.</li>
            <li>Aportar novedad o distinción, es decir, el producto debe diferenciarse de la competencia de algún modo.</li>
          </ul><br>
          <h1 class="mb-3">Consejos de Recursos Humanos para emprendedores</h1>
          <ol class="pl-5 list-decimal">
            <li>Detecta las necesidades de la empresa.</li>
            <li>Elige personal con formación en RRHH.</li>
            <li>Define un manual para los empleados.</li>
            <li>Crea un organigrama y un Manual de Organización.</li>
            <li>Diseña una oferta laboral detallada.</li>
            <li>Tómate el tiempo necesario para seleccionar el mejor talento.</li>
            <li>Elabora un proceso de selección y contratación efectivo.</li>
            <li>Evalúa el clima laboral regularmente.</li>
            <li>Compensa a los buenos trabajadores.</li>
            <li>Implementa planes de formación para empleados.</li>
          </ol>
          <blockquote class="pl-4 my-8 italic border-l-4 border-green-500 md:pl-5">El éxito en el emprendimiento no se trata solo de tener grandes ideas, sino de tener la determinación y la perseverancia para convertirlas en realidad</blockquote>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['iniciarrhh.component.css']
})
export class IniciarrhhComponent {}
