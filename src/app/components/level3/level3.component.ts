import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {

  question: any;
  questions: Array<{}> = [
    {
      id: 0,
      title: "¿Puede mi mascota contagiarme el COVID-19?",
      options: [
        {
        a: "Verdadero", 
        b:"Falso"
      }
    ],
    explanation:"No hay pruebas hasta la fecha que demuestran que mascotas como los gatos o los perros puedan transmitir el virus que ocasiona el COVID-19.",
    answer:"Falso"
  },
    {
      id: 1,
      title: "¿La enfermedad por coronavirus es lo mismo que la gripe?",
      options: [
        {
        a: "Verdadero", 
        b:"Falso"
      }
    ],
    explanation:"No. La enfermedad por coronavirus (COVID-19) y la gripe son enfermedades infecciosas distintas, causadas por virus distintos. Aunque las dos son enfermedades respiratorias que se transmiten de una forma similar (a través de las gotas de la respiración) y pueden tener síntomas parecidos (fiebre, tos y falta de aire), presentan otras características diferentes.",
    answer:"Falso"
  },
    {
      id: 2,
      title: "¿Puede la enfermedad por coronavirus (COVID-19) transmitirse tanto en temperaturas cálidas como frías?",
      options: [
        {
        a: "Verdero", 
        b:"Falso"
      }
      ],
      explanation:"Sí. El virus se está propagando por lugares con temperaturas cálidas y frías por igual. Por el momento, no se sabe si las condiciones climáticas estacionales y los cambios de temperatura repercutirán sobre la transmisión de la enfermedad por coronavirus (COVID-19)",
      answer:"Verdadero"
    },
    {
      id: 3,
      title: "¿Pueden las cartas, los productos y los paquetes estar contaminados por el virus causante del coronavirus?",
      options: [
        {
        a: "Verdadero", 
        b:"Falso"
      }
    ],
    explanation:"Sí. Se aconseja limpiar la superficie del paquete con un producto o toallitas desinfectantes antes de tocarlo o abrirlo, y desecha el paquete en un contenedor cerrado. Inmediatamente después, lávate las manos con agua y jabón o con un desinfectante de manos con alcohol.",
    answer:"Verdadero"
  },
  {
    id: 4,
    title: "¿Es posible esterilizar y reutilizar las mascarillas poniéndolas en vapor a altas temperaturas?",
    options: [
      {
      a: "Verdadero", 
      b:"Falso"
    }
  ],
  explanation:"Las mascarillas pierden su eficacia al ser expuestas a la humedad: “Si se refiere al uso comunitario, domiciliario o doméstico de mascarillas, esta forma de tratarlas podría hacer que pierdan su capacidad de proteger. Para que la mascarilla realmente proteja, no debe tener manchas, fisuras ni estar húmeda.",
  answer:"Falso"
},
{
  id: 5,
  title: "Bañarse en agua caliente no previene la infección por el nuevo coronavirus",
  options: [
    {
    a: "Verdadero", 
    b:"Falso"
  }
],
explanation:"Bañarse en agua caliente no proporciona ninguna protección contra el COVID-19. Con independencia de la temperatura del agua de la bañera o la ducha, la temperatura corporal continuará siendo de 36,5 °C a 37 °C.",
answer:"Verdadero"
},
  ];

  index:any=0;

  constructor(private router: Router) { }

  nextQuestion(){
    if (this.index <= this.questions.length -1) {
      return this.question = this.questions[(this.index++)];
    } else {
      this.router.navigateByUrl('/correct3');
    }
  }

  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}
