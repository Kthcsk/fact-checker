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
        "Verdadero", 
        "Falso"
    ],
      explanation:"No hay pruebas hasta la fecha que demuestran que mascotas como los gatos o los perros puedan transmitir el virus que ocasiona el COVID-19.",
      answer:"Falso"
  },
    {
      id: 1,
      title: "¿La enfermedad por coronavirus es lo mismo que la gripe?",
      options: [
        "Sí", 
        "No"
    ],
      explanation:"No. La enfermedad por coronavirus (COVID-19) y la gripe son enfermedades infecciosas distintas, causadas por virus distintos. Aunque ambas se transmiten de forma similar y pueden tener síntomas parecidos.",
      answer:"No"
  },
    {
      id: 2,
      title: "¿Puede la enfermedad por coronavirus (COVID-19) transmitirse tanto en temperaturas cálidas como frías?",
      options: [
        "Verdadero", 
        "Falso"
    ],
      explanation:"Sí. El virus se está propagando por lugares con temperaturas cálidas y frías por igual.",
      answer:"Verdadero"
    },
      {
        id: 3,
        title: "¿Pueden las cartas, los productos y los paquetes estar contaminados por el virus causante del coronavirus?",
        options: [
          "Sí", 
          "No"
    ],
      explanation:"Sí. Se aconseja limpiar la superficie del paquete con un producto o toallitas desinfectantes antes de tocarlo o abrirlo, y desecha el paquete en un contenedor cerrado.",
      answer:"Sí"
  },
    {
      id: 4,
      title: "¿Es posible esterilizar y reutilizar las mascarillas poniéndolas en vapor a altas temperaturas?",
      options: [
        "Verdadero", 
        "Falso"
    ],
      explanation:"Las mascarillas pierden su eficacia al ser expuestas a la humedad, esta forma de tratarlas podría hacer que pierdan su capacidad de proteger.",
      answer:"Falso"
  },
    {
      id: 5,
      title: "Bañarse en agua caliente no previene la infección por el nuevo coronavirus",
      options: [
        "Sí", 
        "No"
    ],
      explanation:"Bañarse en agua caliente no proporciona ninguna protección contra el COVID-19. Con independencia de la temperatura del agua de la bañera o la ducha, la temperatura corporal continuará siendo de 36,5 °C a 37 °C.",
      answer:"Sí"
  },
];

  index:any=0;
  answer: any;
  options: any;

  correctOption: Object;
  wrongOption: Object;

  constructor(private router: Router) { }

  nextQuestion(){
    if (this.index <= this.questions.length -1) {
      return this.question = this.questions[(this.index++)];
    } else {
      this.router.navigateByUrl('/correct3');
    }
  }

  getAnswer(option:any) {
    if(option === this.question.answer) {
      this.correctOption = option;
      this.wrongOption = {};
    } else {
      this.wrongOption = option;
      this.correctOption = {};
    }
  }

  ngOnInit(): void {
    this.question = this.questions[(this.index)];
  }

}
